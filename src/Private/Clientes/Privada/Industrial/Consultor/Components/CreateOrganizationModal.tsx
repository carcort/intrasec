import type { FormEventHandler } from "react";
import { criticalityLabels, industryLabels, statusLabels } from "./crmConstants";
import {
  criticalities,
  industries,
  organizationStatuses,
  type Criticality,
  type Industry,
  type NewOrganization,
  type OrganizationStatus,
} from "./crmTypes";

type CreateOrganizationModalProps = {
  value: NewOrganization;
  saving: boolean;
  error: string;
  onChange: (value: NewOrganization) => void;
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const CreateOrganizationModal = ({
  value,
  saving,
  error,
  onChange,
  onClose,
  onSubmit,
}: CreateOrganizationModalProps) => {
  function update<Key extends keyof NewOrganization>(key: Key, nextValue: NewOrganization[Key]) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-gray-900/40 p-4" role="dialog" aria-modal="true" aria-label="Crear cliente" >
      <form onSubmit={onSubmit} className="max-h-[300vh] bg-white h-[65%] w-full max-w-3xl overflow-y-auto rounded  shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200  px-5 py-4">
          <div>
            <p className=" font-semibold uppercase tracking-widest text-violet-500">CRM</p>
            <h2 className="text-xl font-semibold text-gray-700">Nuevo cliente</h2>
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

        <div className="grid gap-4 p-5 md:grid-cols-2 bg-white h-[80%]">
          <FormInput label="Nombre comercial *" value={value.name} onChange={(nextValue) => update("name", nextValue)} required />
          <FormInput label="Razón social" value={value.legalName} onChange={(nextValue) => update("legalName", nextValue)} />
          <FormInput label="RUT" value={value.taxId} onChange={(nextValue) => update("taxId", nextValue)} />
          <FormSelect
            label="Industria"
            value={value.industry}
            onChange={(nextValue) => update("industry", nextValue as Industry)}
            options={industries.map((item) => ({ value: item, label: industryLabels[item] }))}
          />
          <FormInput label="País" value={value.country} onChange={(nextValue) => update("country", nextValue)} />
          <FormInput label="Ciudad" value={value.city} onChange={(nextValue) => update("city", nextValue)} />
          <FormInput label="Correo" type="email" value={value.email} onChange={(nextValue) => update("email", nextValue)} />
          <FormInput label="Teléfono" value={value.phone} onChange={(nextValue) => update("phone", nextValue)} />
          <FormSelect
            label="Estado"
            value={value.status}
            onChange={(nextValue) => update("status", nextValue as OrganizationStatus)}
            options={organizationStatuses.map((item) => ({ value: item, label: statusLabels[item] }))}
          />
          <FormSelect
            label="Criticidad"
            value={value.criticality}
            onChange={(nextValue) => update("criticality", nextValue as Criticality)}
            options={criticalities.map((item) => ({ value: item, label: criticalityLabels[item] }))}
          />
          <label className="md:col-span-2  font-semibold text-gray-600">
            Notas
            <textarea
              value={value.notes}
              onChange={(event) => update("notes", event.target.value)}
              rows={3}
              maxLength={5000}
              className="mt-1 block w-full resize-none rounded border border-gray-200 px-3 py-2 font-normal outline-none focus:border-violet-400"
            />
          </label>
          {error && <p className="md:col-span-2 rounded bg-red-50 px-3 py-2 text-red-700">{error}</p>}
        </div>

        <div className="sticky bottom-0 flex justify-end gap-2 border-t border-gray-200 bg-white px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="cursor-pointer h-12 rounded border border-gray-200 px-4 font-semibold text-gray-600 hover:bg-gray-50 disabled:opacity-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={saving || value.name.trim().length < 2}
            className="cursor-pointer h-12 rounded bg-violet-500 px-5 font-semibold text-white hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Guardando..." : "Guardar cliente"}
          </button>
        </div>
      </form>
    </div>
  );
};

type FormInputProps = {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function FormInput({ label, value, type = "text", required = false, onChange }: FormInputProps) {
  return (
    <label className=" font-semibold text-gray-600">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block h-9 w-full rounded border border-gray-200 px-3 font-normal outline-none focus:border-violet-400"
      />
    </label>
  );
}

type FormSelectProps = {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

function FormSelect({ label, value, options, onChange }: FormSelectProps) {
  return (
    <label className=" font-semibold text-gray-600">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block h-9 w-full rounded border border-gray-200 bg-white px-3 font-normal outline-none focus:border-violet-400"
      >
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}

export default CreateOrganizationModal;
