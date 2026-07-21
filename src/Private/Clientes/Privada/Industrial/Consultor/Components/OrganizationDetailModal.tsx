import type { ReactNode } from "react";
import {
  criticalityLabels,
  industryLabels,
  maturityLabels,
  opportunityStageLabels,
  statusLabels,
} from "./crmConstants";
import { formatCurrency, formatDate } from "./crmFormatters";
import type { OrganizationDetail } from "./crmTypes";

type OrganizationDetailModalProps = {
  detail: OrganizationDetail | null;
  loading: boolean;
  onClose: () => void;
};

const OrganizationDetailModal = ({ detail, loading, onClose }: OrganizationDetailModalProps) => (
  <div
    className="fixed inset-0 z-50 grid place-items-center bg-gray-900/40 p-4"
    role="dialog"
    aria-modal="true"
    aria-label="Detalle del cliente"
  >
    <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded bg-white shadow-2xl">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500">Ficha del cliente</p>
          <h2 className="text-xl font-semibold text-gray-700">{detail?.name ?? "Cargando..."}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid h-9 w-9 place-items-center rounded bg-gray-100 text-lg hover:bg-gray-200"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>

      {loading || !detail ? (
        <div className="grid h-64 place-items-center text-gray-500">Cargando información...</div>
      ) : (
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <DetailValue label="Estado" value={statusLabels[detail.status]} />
            <DetailValue label="Industria" value={industryLabels[detail.industry]} />
            <DetailValue label="Criticidad" value={criticalityLabels[detail.criticality]} />
            <DetailValue label="Madurez" value={maturityLabels[detail.securityMaturity]} />
            <DetailValue label="RUT" value={detail.taxId ?? "Sin registro"} />
            <DetailValue
              label="Ubicación"
              value={[detail.city, detail.country].filter(Boolean).join(", ") || "Sin registro"}
            />
            <DetailValue label="Correo" value={detail.email ?? "Sin registro"} />
            <DetailValue label="Teléfono" value={detail.phone ?? "Sin registro"} />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <DetailSection title={`Contactos (${detail.contacts.length})`} emptyMessage="No hay contactos registrados.">
              {detail.contacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between border-b border-gray-100 py-2 last:border-0">
                  <div>
                    <p className="font-semibold text-gray-700">{contact.firstName} {contact.lastName}</p>
                    <p className="text-xs text-gray-500">{contact.jobTitle ?? contact.email ?? "Sin cargo registrado"}</p>
                  </div>
                  {contact.isPrimary && (
                    <span className="rounded bg-violet-50 px-2 py-1 text-[10px] font-semibold text-violet-600">Principal</span>
                  )}
                </div>
              ))}
            </DetailSection>

            <DetailSection title={`Oportunidades (${detail.opportunities.length})`} emptyMessage="No hay oportunidades registradas.">
              {detail.opportunities.map((opportunity) => (
                <div key={opportunity.id} className="flex items-center justify-between border-b border-gray-100 py-2 last:border-0">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-gray-700">{opportunity.title}</p>
                    <p className="text-xs text-gray-500">{opportunityStageLabels[opportunity.stage]}</p>
                  </div>
                  <span className="ml-3 font-semibold text-violet-600">
                    {formatCurrency(opportunity.value, opportunity.currency)}
                  </span>
                </div>
              ))}
            </DetailSection>
          </div>

          <section className="mt-5 rounded border border-gray-100 p-4">
            <h3 className="mb-2 font-semibold text-gray-700">Actividad reciente</h3>
            {detail.interactions.length > 0 ? detail.interactions.map((interaction) => (
              <div key={interaction.id} className="flex gap-3 border-b border-gray-100 py-2 last:border-0">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-3">
                    <p className="truncate font-semibold text-gray-700">{interaction.subject}</p>
                    <span className="shrink-0 text-xs text-gray-400">{formatDate(interaction.occurredAt)}</span>
                  </div>
                  {interaction.nextAction && (
                    <p className="text-xs text-gray-500">Próxima acción: {interaction.nextAction}</p>
                  )}
                </div>
              </div>
            )) : <p className="py-4 text-center text-gray-400">No hay interacciones registradas.</p>}
          </section>
        </div>
      )}
    </div>
  </div>
);

type DetailValueProps = {
  label: string;
  value: string;
};

function DetailValue({ label, value }: DetailValueProps) {
  return (
    <div className="rounded bg-gray-50 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
      <p className="mt-1 truncate font-semibold text-gray-700" title={value}>{value}</p>
    </div>
  );
}

type DetailSectionProps = {
  title: string;
  emptyMessage: string;
  children: ReactNode;
};

function DetailSection({ title, emptyMessage, children }: DetailSectionProps) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children);
  return (
    <section className="rounded border border-gray-100 p-4">
      <h3 className="mb-2 font-semibold text-gray-700">{title}</h3>
      {hasChildren ? children : <p className="py-4 text-center text-gray-400">{emptyMessage}</p>}
    </section>
  );
}

export default OrganizationDetailModal;
