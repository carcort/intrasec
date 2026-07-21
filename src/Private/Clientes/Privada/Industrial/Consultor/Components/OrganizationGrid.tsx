import { PAGE_SIZE } from "./crmConstants";
import type { Organization } from "./crmTypes";
import OrganizationCard from "./OrganizationCard";

type OrganizationGridProps = {
  organizations: Organization[];
  loading: boolean;
  error: string;
  apiBaseUrl: string;
  onRetry: () => void;
  onSelect: (id: string) => void;
};

const OrganizationGrid = ({ organizations, loading, error, apiBaseUrl, onRetry, onSelect }: OrganizationGridProps) => (
  <>
    {error && (
      <div className="mb-4 flex items-center justify-between rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
        <span>{error} Verifica que la API esté activa en {apiBaseUrl}.</span>
        <button type="button" className="font-semibold underline" onClick={onRetry}>Reintentar</button>
      </div>
    )}

    {loading ? (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: PAGE_SIZE }, (_, index) => (
          <div key={index} className="h-48 animate-pulse rounded border border-gray-100 bg-gray-100" />
        ))}
      </div>
    ) : organizations.length > 0 ? (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {organizations.map((organization) => (
          <OrganizationCard key={organization.id} organization={organization} onClick={() => onSelect(organization.id)} />
        ))}
      </div>
    ) : (
      <div className="grid min-h-48 place-items-center rounded border border-dashed border-gray-300 bg-gray-50 text-center">
        <div>
          <p className="text-lg font-semibold text-gray-600">No encontramos clientes</p>
          <p className="mt-1 text-gray-500">Prueba con otros filtros o registra un cliente nuevo.</p>
        </div>
      </div>
    )}
  </>
);

export default OrganizationGrid;
