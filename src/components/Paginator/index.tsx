import Button from "@components/inputs/Button";
import { useRouter } from "next/router";
import { PaginationBar, Separator } from "./styles";

interface PaginatorProps {
  page: number;
  totalRecords: number;
  perPage: number;
  setPage: any;
  url: string;
}

const Operations = {
  NEXT: "next",
  PREV: "prev",
  FIRST: "first",
  LAST: "last",
};

const Paginator: React.FC<PaginatorProps> = ({
  page,
  totalRecords,
  perPage,
  setPage,
  url,
}) => {
  const router = useRouter();

  const totalPages = Math.ceil(totalRecords / perPage);

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
    window.scrollTo({ top: 0, behavior: `smooth` });
    router.push(`/${url}?page=${newPage}`, undefined, {
      shallow: true,
    });
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
