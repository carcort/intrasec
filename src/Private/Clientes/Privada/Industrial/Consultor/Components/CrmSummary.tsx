import { formatCurrency } from "./crmFormatters";
import type { DashboardSummary } from "./crmTypes";

type CrmSummaryProps = {
  summary: DashboardSummary | null;
  totalOrganizations: number;
};

const CrmSummary = ({ summary, totalOrganizations }: CrmSummaryProps) => (
  <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
    <SummaryCard label="Clientes" value={String(totalOrganizations)} detail={`${summary?.organizations.ACTIVE ?? 0} activos`} />
    <SummaryCard label="Contactos" value={String(summary?.contacts ?? 0)} detail="Personas registradas" />
    <SummaryCard
      label="Oportunidades abiertas"
      value={String(summary?.openPipeline.opportunities ?? 0)}
      detail="Pipeline comercial"
    />
    <SummaryCard
      label="Valor del pipeline"
      value={formatCurrency(summary?.openPipeline.value ?? 0)}
      detail="Negocios en curso"
    />
  </section>
);

type SummaryCardProps = {
  label: string;
  value: string;
  detail: string;
};

function SummaryCard({ label, value, detail }: SummaryCardProps) {
  return (
    <article className="border-l-4 border-violet-500 bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1 truncate text-2xl font-semibold text-violet-600">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{detail}</p>
    </article>
  );
}

export default CrmSummary;
