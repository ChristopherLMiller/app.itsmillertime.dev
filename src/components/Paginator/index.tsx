interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: () => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  console.log(currentPage, totalPages);
  return (
    <div>
      <button>Previous</button>
      <button>{currentPage}</button>
      <button>totalPages</button>
      <button>Next</button>
    </div>
  );
};

export default Paginator;
