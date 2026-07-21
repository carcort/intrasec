type CrmPaginationProps = {
  page: number;
  pages: number;
  loading: boolean;
  firstResult: number;
  lastResult: number;
  total: number;
  onPageChange: (page: number) => void;
};

const CrmPagination = ({ page, pages, loading, firstResult, lastResult, total, onPageChange }: CrmPaginationProps) => (
  <footer className="flex items-center justify-center gap-4 border-t border-gray-100 py-3 font-semibold text-gray-600">
    <span>{firstResult}-{lastResult} / {total}</span>
    <div className="flex gap-1">
      <button
        type="button"
        aria-label="Página anterior"
        disabled={page <= 1 || loading}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        className="h-8 w-9 rounded bg-gray-100 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {"<"}
      </button>
      <button
        type="button"
        aria-label="Página siguiente"
        disabled={page >= pages || loading}
        onClick={() => onPageChange(Math.min(pages, page + 1))}
        className="h-8 w-9 rounded bg-gray-100 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {">"}
      </button>
    </div>
  </footer>
);

export default CrmPagination;
