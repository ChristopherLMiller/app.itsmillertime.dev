import Button from "@components/inputs/Button";
import { useEffect, useState } from "react";
import useMooseContext from "src/lib/context/dynamicContent";
import { PaginationBar, Separator } from "./styles";

const Operations = {
  NEXT: "next",
  PREV: "prev",
  FIRST: "first",
  LAST: "last",
};

export interface PaginatorTypes {
  scrollTop?: boolean;
}

const Paginator: React.FC<PaginatorTypes> = ({ scrollTop }) => {
  const {
    take,
    data: {
      meta: { pagination },
    },
    setPage,
  } = useMooseContext();
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Set up the total number of records and pages
  useEffect(() => {
    if (pagination) {
      setTotalRecords(pagination?.total);
      setTotalPages(pagination?.pageCount);
    }
  }, [pagination, take, totalPages, totalRecords]);

  const clickHandler = (operation) => {
    let newPage = pagination.page;
    switch (operation) {
      case Operations.NEXT:
        newPage++;
        break;
      case Operations.PREV:
        newPage--;
        break;
      case Operations.FIRST:
        newPage = 1;
        break;
      case Operations.LAST:
        newPage = totalPages;
        break;
      default:
        throw new Error("Unknown operation in paginator");
    }

    // check for over/under flow
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > totalPages) {
      newPage = totalPages;
    }
    setPage(newPage);
    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
  };

  return (
    <PaginationBar>
      <Button
        isDisabled={pagination.page === 1}
        type="button"
        onClick={() => clickHandler(Operations.FIRST)}
      >
        First
      </Button>
      <Separator />
      <Button
        isDisabled={pagination.page === 1}
        type="button"
        onClick={() => clickHandler(Operations.PREV)}
      >
        &lt;Prev
      </Button>
      <Button type="button">
        {pagination.page} of {pagination.pageCount}
      </Button>
      <Button
        isDisabled={pagination.page === pagination.pageCount}
        type="button"
        onClick={() => clickHandler(Operations.NEXT)}
      >
        Next&gt;
      </Button>
      <Separator />
      <Button
        isDisabled={pagination.page === pagination.pageCount}
        type="button"
        onClick={() => clickHandler(Operations.LAST)}
      >
        Last
      </Button>
    </PaginationBar>
  );
};

export default Paginator;
