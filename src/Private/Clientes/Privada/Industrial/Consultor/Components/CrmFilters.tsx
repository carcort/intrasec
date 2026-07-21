import type { FormEventHandler } from "react";
import { criticalityLabels, industryLabels, statusLabels } from "./crmConstants";
import {
  criticalities,
  industries,
  organizationStatuses,
  type Criticality,
  type Industry,
  type OrganizationStatus,
} from "./crmTypes";

type CrmFiltersProps = {
  searchInput: string;
  status: OrganizationStatus | "";
  industry: Industry | "";
  criticality: Criticality | "";
  onSearchInputChange: (value: string) => void;
  onStatusChange: (value: OrganizationStatus | "") => void;
  onIndustryChange: (value: Industry | "") => void;
  onCriticalityChange: (value: Criticality | "") => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClear: () => void;
};

const CrmFilters = ({
  searchInput,
  status,
  industry,
  criticality,
  onSearchInputChange,
  onStatusChange,
  onIndustryChange,
  onCriticalityChange,
  onSubmit,
  onClear,
}: CrmFiltersProps) => (
  <form onSubmit={onSubmit} className="h-[12%]  mt-4 flex flex-wrap items-center gap-3 rounded   p-3">
    <label className="min-w-[220px]  flex-1  font-semibold text-gray-600">
      Buscar cliente
      <div className="mt-1 flex">
        <input
          value={searchInput}
          onChange={(event) => onSearchInputChange(event.target.value)}
          className="h-10 min-w-0 flex-1 rounded-l border border-gray-200 bg-white px-3 font-normal outline-none transition focus:border-violet-400"
          placeholder="Nombre, RUT o correo"
        />
        <button className="h-10 rounded-r bg-violet-500 px-4 text-white hover:bg-violet-600" type="submit">
          Buscar
        </button>
      </div>
    </label>
    <FilterSelect
      label="Estado"
      value={status}
      onChange={(value) => onStatusChange(value as OrganizationStatus | "")}
      options={organizationStatuses.map((value) => ({ value, label: statusLabels[value] }))}
    />
    <FilterSelect
      label="Industria"
      value={industry}
      onChange={(value) => onIndustryChange(value as Industry | "")}
      options={industries.map((value) => ({ value, label: industryLabels[value] }))}
    />
    <FilterSelect
      label="Criticidad"
      value={criticality}
      onChange={(value) => onCriticalityChange(value as Criticality | "")}
      options={criticalities.map((value) => ({ value, label: criticalityLabels[value] }))}
    />
    <button type="button" onClick={onClear} className="h-9 mt-6 px-2 flex items-center font-semibold  text-gray-500 hover:border-b hover:border-violet-600 cursor-pointer">
      Limpiar filtros
    </button>
  </form>
);

type FilterSelectProps = {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="min-w-36  font-semibold text-gray-600">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block h-9 w-full rounded border border-gray-200 bg-white px-3 font-normal outline-none transition focus:border-violet-400"
      >
        <option value="">Todos</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}

export default CrmFilters;
