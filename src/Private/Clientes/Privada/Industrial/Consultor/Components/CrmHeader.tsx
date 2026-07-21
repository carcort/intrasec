type CrmHeaderProps = {
  area: string;
  onRefresh: () => void;
  onCreate: () => void;
};

const CrmHeader = ({ area, onRefresh, onCreate }: CrmHeaderProps) => (
  <section className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-gray-100 px-4 py-3">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-500">Gestión comercial</p>
      <h1 className="text-xl font-semibold text-gray-700">CRM · {area}</h1>
    </div>
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onRefresh}
        className="h-9 rounded border border-gray-200 bg-white px-4 font-semibold text-gray-600 shadow-sm transition hover:border-violet-300 hover:text-violet-600"
      >
        Actualizar
      </button>
      <button
        type="button"
        onClick={onCreate}
        className="h-9 rounded bg-violet-500 px-4 font-semibold text-white shadow-sm transition hover:bg-violet-600"
      >
        + Nuevo cliente
      </button>
    </div>
  </section>
);

export default CrmHeader;
