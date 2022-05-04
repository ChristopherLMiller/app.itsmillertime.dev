import Button from "@components/inputs/Button";
import { useRouter } from "next/router";

interface PaginatorProps {
  page: number;
  totalRecords: number;
  perPage: number;
  setPage: any;
  url: string;
}

const Paginator: React.FC<PaginatorProps> = ({
  page,
  totalRecords,
  perPage,
  setPage,
  url,
}) => {
  const router = useRouter();

  const totalPages = Math.ceil(totalRecords / perPage) - 1;

  const clickHandler = (operation) => {
    let newPage = operation === "next" ? page + 1 : page - 1;

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
    <div>
      <Button isDisabled={page === 1} onClick={() => clickHandler("previous")}>
        Previous
      </Button>
      <Button>
        {page} of {totalPages}
      </Button>
      <Button
        isDisabled={page === totalPages}
        onClick={() => clickHandler("next")}
      >
        Next
      </Button>
    </div>
  );
};

export default Paginator;
