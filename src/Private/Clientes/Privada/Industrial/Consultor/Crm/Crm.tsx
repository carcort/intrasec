import { useEffect, useMemo, useState, type FormEvent } from "react";
import CreateOrganizationModal from "../Components/CreateOrganizationModal";
import CrmFilters from "../Components/CrmFilters";
import CrmHeader from "../Components/CrmHeader";
import CrmPagination from "../Components/CrmPagination";
import CrmSummary from "../Components/CrmSummary";
import OrganizationDetailModal from "../Components/OrganizationDetailModal";
import OrganizationGrid from "../Components/OrganizationGrid";
import { emptyOrganization, PAGE_SIZE } from "../Components/crmConstants";
import type {
  ApiDataResponse,
  ApiListResponse,
  Criticality,
  DashboardSummary,
  Industry,
  NewOrganization,
  Organization,
  OrganizationDetail,
  OrganizationStatus,
  PaginationMeta,
  Usuario,
} from "../Components/crmTypes";

const API_BASE_URL = ((import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000/api/v1")
  .replace(/\/$/, "");

type CrmProps = {
  usuario: Usuario;
};

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal });
  if (!response.ok) throw new Error("No fue posible obtener la información del CRM.");
  return response.json() as Promise<T>;
}

async function createOrganization(data: NewOrganization): Promise<Organization> {
  const payload = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      typeof value === "string" && value.trim() === "" ? undefined : value,
    ]),
  );
  const response = await fetch(`${API_BASE_URL}/organizations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as { error?: { message?: string } } | null;
    throw new Error(errorBody?.error?.message ?? "No fue posible crear el cliente.");
  }

  const result = (await response.json()) as ApiDataResponse<Organization>;
  return result.data;
}

const Crm = ({ usuario }: CrmProps) => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [meta, setMeta] = useState<PaginationMeta>({
    total: 0,
    page: 1,
    pageSize: PAGE_SIZE,
    pages: 0,
  });
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<OrganizationStatus | "">("");
  const [industry, setIndustry] = useState<Industry | "">("");
  const [criticality, setCriticality] = useState<Criticality | "">("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detail, setDetail] = useState<OrganizationDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [newOrganization, setNewOrganization] = useState<NewOrganization>(emptyOrganization);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const parameters = new URLSearchParams({
      page: String(page),
      pageSize: String(PAGE_SIZE),
      sortBy: "updatedAt",
      order: "desc",
    });
    if (search) parameters.set("search", search);
    if (status) parameters.set("status", status);
    if (industry) parameters.set("industry", industry);
    if (criticality) parameters.set("criticality", criticality);

    setLoading(true);
    setError("");
    getJson<ApiListResponse<Organization>>(`/organizations?${parameters.toString()}`, controller.signal)
      .then((result) => {
        setOrganizations(result.data);
        setMeta(result.meta);
      })
      .catch((requestError: unknown) => {
        if (requestError instanceof DOMException && requestError.name === "AbortError") return;
        setError(requestError instanceof Error ? requestError.message : "No fue posible cargar los clientes.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [criticality, industry, page, refreshKey, search, status]);

  useEffect(() => {
    const controller = new AbortController();
    getJson<ApiDataResponse<DashboardSummary>>("/dashboard/summary", controller.signal)
      .then((result) => setSummary(result.data))
      .catch((requestError: unknown) => {
        if (!(requestError instanceof DOMException && requestError.name === "AbortError")) {
          setError(requestError instanceof Error ? requestError.message : "No fue posible cargar el resumen.");
        }
      });
    return () => controller.abort();
  }, [refreshKey]);

  useEffect(() => {
    if (!selectedId) {
      setDetail(null);
      return;
    }

    const controller = new AbortController();
    setDetailLoading(true);
    getJson<ApiDataResponse<OrganizationDetail>>(`/organizations/${selectedId}`, controller.signal)
      .then((result) => setDetail(result.data))
      .catch((requestError: unknown) => {
        if (!(requestError instanceof DOMException && requestError.name === "AbortError")) {
          setError(requestError instanceof Error ? requestError.message : "No fue posible cargar el detalle.");
          setSelectedId(null);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setDetailLoading(false);
      });
    return () => controller.abort();
  }, [selectedId]);

  const totalOrganizations = useMemo(
    () => Object.values(summary?.organizations ?? {}).reduce<number>(
      (total, amount) => total + (amount ?? 0),
      0,
    ),
    [summary],
  );

  const firstResult = meta.total === 0 ? 0 : (meta.page - 1) * meta.pageSize + 1;
  const lastResult = Math.min(meta.page * meta.pageSize, meta.total);

  function refresh() {
    setRefreshKey((current) => current + 1);
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  }

  function clearFilters() {
    setSearchInput("");
    setSearch("");
    setStatus("");
    setIndustry("");
    setCriticality("");
    setPage(1);
  }

  async function submitOrganization(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setFormError("");
    try {
      const created = await createOrganization({
        ...newOrganization,
        name: newOrganization.name.trim(),
      });
      setCreateOpen(false);
      setNewOrganization(emptyOrganization);
      clearFilters();
      refresh();
      setSelectedId(created.id);
    } catch (requestError) {
      setFormError(requestError instanceof Error ? requestError.message : "No fue posible crear el cliente.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex h-full w-[97%] min-h-0 flex-col bg-white text-gray-700">
      <CrmHeader
        area={usuario.area ?? "Industrial"}
        onRefresh={refresh}
        onCreate={() => setCreateOpen(true)}
      />

      <main className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <CrmSummary summary={summary} totalOrganizations={totalOrganizations} />
        <CrmFilters
          searchInput={searchInput}
          status={status}
          industry={industry}
          criticality={criticality}
          onSearchInputChange={setSearchInput}
          onStatusChange={(value) => {
            setStatus(value);
            setPage(1);
          }}
          onIndustryChange={(value) => {
            setIndustry(value);
            setPage(1);
          }}
          onCriticalityChange={(value) => {
            setCriticality(value);
            setPage(1);
          }}
          onSubmit={submitSearch}
          onClear={clearFilters}
        />

        <div className="flex items-center justify-between py-4">
          <h2 className="text-lg font-semibold text-gray-600">Clientes asignados</h2>
          <span className=" text-gray-500">{meta.total} resultados</span>
        </div>

        <OrganizationGrid
          organizations={organizations}
          loading={loading}
          error={error}
          apiBaseUrl={API_BASE_URL}
          onRetry={refresh}
          onSelect={setSelectedId}
        />
      </main>

      <CrmPagination
        page={page}
        pages={meta.pages}
        loading={loading}
        firstResult={firstResult}
        lastResult={lastResult}
        total={meta.total}
        onPageChange={setPage}
      />

      {(selectedId || detailLoading) && (
        <OrganizationDetailModal
          detail={detail}
          loading={detailLoading}
          onClose={() => setSelectedId(null)}
        />
      )}

      {createOpen && (
        <CreateOrganizationModal
          value={newOrganization}
          saving={saving}
          error={formError}
          onChange={setNewOrganization}
          onClose={() => {
            if (saving) return;
            setCreateOpen(false);
            setFormError("");
          }}
          onSubmit={submitOrganization}
        />
      )}
    </div>
  );
};

export default Crm;
