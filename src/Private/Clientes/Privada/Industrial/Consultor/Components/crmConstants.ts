import type { Criticality, Industry, NewOrganization, Opportunity, Organization, OrganizationStatus } from "./crmTypes";

export const PAGE_SIZE = 8;

export const emptyOrganization: NewOrganization = {
  name: "",
  legalName: "",
  taxId: "",
  industry: "INDUSTRIAL",
  country: "Chile",
  city: "",
  email: "",
  phone: "",
  criticality: "MEDIUM",
  status: "LEAD",
  notes: "",
};

export const statusLabels: Record<OrganizationStatus, string> = {
  LEAD: "Lead",
  PROSPECT: "Prospecto",
  ACTIVE: "Activo",
  INACTIVE: "Inactivo",
};

export const industryLabels: Record<Industry, string> = {
  ENERGY_GENERATION: "Generación eléctrica",
  OIL_GAS: "Petróleo y gas",
  MINING: "Minería",
  TRANSMISSION: "Transmisión",
  DISTRIBUTION: "Distribución",
  RENEWABLE_ENERGY: "Energía renovable",
  INDUSTRIAL: "Industrial",
  OTHER: "Otro",
};

export const criticalityLabels: Record<Criticality, string> = {
  LOW: "Baja",
  MEDIUM: "Media",
  HIGH: "Alta",
  CRITICAL: "Crítica",
};

export const maturityLabels: Record<Organization["securityMaturity"], string> = {
  INITIAL: "Inicial",
  MANAGED: "Gestionada",
  DEFINED: "Definida",
  MEASURED: "Medida",
  OPTIMIZING: "Optimizada",
};

export const opportunityStageLabels: Record<Opportunity["stage"], string> = {
  DISCOVERY: "Descubrimiento",
  QUALIFICATION: "Calificación",
  PROPOSAL: "Propuesta",
  NEGOTIATION: "Negociación",
  WON: "Ganada",
  LOST: "Perdida",
};

export const statusClasses: Record<OrganizationStatus, string> = {
  LEAD: "bg-sky-50 text-sky-700",
  PROSPECT: "bg-amber-50 text-amber-700",
  ACTIVE: "bg-emerald-50 text-emerald-700",
  INACTIVE: "bg-gray-100 text-gray-600",
};

export const criticalityClasses: Record<Criticality, string> = {
  LOW: "bg-emerald-50 text-emerald-700",
  MEDIUM: "bg-amber-50 text-amber-700",
  HIGH: "bg-orange-50 text-orange-700",
  CRITICAL: "bg-red-50 text-red-700",
};
