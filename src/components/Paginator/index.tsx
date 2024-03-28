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
  const { page, take, data, setPage } = useMooseContext();
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Set up the total number of records and pages
  useEffect(() => {
    if (data?.meta) {
      setTotalRecords(data?.meta?.total);
      setTotalPages(Math.ceil(totalRecords / take));
    }
  }, [data, take, totalPages, totalRecords]);

  const clickHandler = (operation) => {
    let newPage = page;
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
        isDisabled={page === 1}
        type="button"
        onClick={() => clickHandler(Operations.FIRST)}
      >
        First
      </Button>
      <Separator />
      <Button
        isDisabled={page === 1}
        type="button"
        onClick={() => clickHandler(Operations.PREV)}
      >
        &lt;Prev
      </Button>
      <Button type="button">
        {page} of {totalPages}
      </Button>
      <Button
        isDisabled={page === totalPages}
        type="button"
        onClick={() => clickHandler(Operations.NEXT)}
      >
        Next&gt;
      </Button>
      <Separator />
      <Button
        isDisabled={page === totalPages}
        type="button"
        onClick={() => clickHandler(Operations.LAST)}
      >
        Last
      </Button>
    </PaginationBar>
  );
};

export default Paginator;
