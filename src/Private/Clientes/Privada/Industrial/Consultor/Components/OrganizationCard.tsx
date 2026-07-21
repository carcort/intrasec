import {
  criticalityClasses,
  criticalityLabels,
  industryLabels,
  statusClasses,
  statusLabels,
} from "./crmConstants";
import { initials } from "./crmFormatters";
import type { Organization } from "./crmTypes";

type OrganizationCardProps = {
  organization: Organization;
  onClick: () => void;
};

const OrganizationCard = ({ organization, onClick }: OrganizationCardProps) => (
  <button type="button" onClick={onClick} className="cursor-pointer group flex min-h-48 w-full flex-col rounded border border-gray-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg">
    <div className="flex items-start gap-3">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-violet-50  font-bold text-violet-600">
        {initials(organization.name)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate  font-semibold text-violet-600 group-hover:text-violet-700">{organization.name}</p>
        <p className="mt-0.5 truncate text-xs text-gray-500">{organization.legalName ?? organization.taxId ?? "Sin razón social"}</p>
      </div>
      <span className={`rounded-full px-2 py-1  font-semibold ${statusClasses[organization.status]}`}>
        {statusLabels[organization.status]}
      </span>
    </div>

    <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 ">
      <div>
        <p className="text-gray-400">Industria</p>
        <p className="truncate font-semibold text-gray-600">{industryLabels[organization.industry]}</p>
      </div>
      <div>
        <p className="text-gray-400">Ubicación</p>
        <p className="truncate font-semibold text-gray-600">
          {[organization.city, organization.country].filter(Boolean).join(", ") || "Sin registro"}
        </p>
      </div>
    </div>

    <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-3">
      <div className="flex gap-3  text-gray-500">
        <span><strong className="text-gray-700">{organization._count.contacts}</strong> contactos</span>
        <span><strong className="text-gray-700">{organization._count.opportunities}</strong> negocios</span>
      </div>
      <span className={`rounded px-2 py-1  font-semibold ${criticalityClasses[organization.criticality]}`}>
        {criticalityLabels[organization.criticality]}
      </span>
    </div>
  </button>
);

export default OrganizationCard;
