export const organizationStatuses = ["LEAD", "PROSPECT", "ACTIVE", "INACTIVE"] as const;
export const industries = [
  "ENERGY_GENERATION",
  "OIL_GAS",
  "MINING",
  "TRANSMISSION",
  "DISTRIBUTION",
  "RENEWABLE_ENERGY",
  "INDUSTRIAL",
  "OTHER",
] as const;
export const criticalities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;

export type OrganizationStatus = (typeof organizationStatuses)[number];
export type Industry = (typeof industries)[number];
export type Criticality = (typeof criticalities)[number];

export type Usuario = {
  area?: string;
  cargo?: string;
  primer_nombre?: string;
};

export type Organization = {
  id: string;
  name: string;
  legalName: string | null;
  taxId: string | null;
  industry: Industry;
  website: string | null;
  country: string | null;
  city: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  criticality: Criticality;
  securityMaturity: "INITIAL" | "MANAGED" | "DEFINED" | "MEASURED" | "OPTIMIZING";
  status: OrganizationStatus;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  _count: {
    contacts: number;
    opportunities: number;
    interactions: number;
  };
};

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string | null;
  email: string | null;
  phone: string | null;
  isPrimary: boolean;
};

export type Opportunity = {
  id: string;
  title: string;
  stage: "DISCOVERY" | "QUALIFICATION" | "PROPOSAL" | "NEGOTIATION" | "WON" | "LOST";
  value: string | null;
  currency: string;
};

export type Interaction = {
  id: string;
  type: string;
  subject: string;
  occurredAt: string;
  nextAction: string | null;
  nextActionDate: string | null;
};

export type OrganizationDetail = Omit<Organization, "_count"> & {
  contacts: Contact[];
  opportunities: Opportunity[];
  interactions: Interaction[];
};

export type PaginationMeta = {
  total: number;
  page: number;
  pageSize: number;
  pages: number;
};

export type DashboardSummary = {
  organizations: Partial<Record<OrganizationStatus, number>>;
  contacts: number;
  openPipeline: {
    opportunities: number;
    value: string | number | null;
  };
};

export type ApiListResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};

export type ApiDataResponse<T> = {
  data: T;
};

export type NewOrganization = {
  name: string;
  legalName: string;
  taxId: string;
  industry: Industry;
  country: string;
  city: string;
  email: string;
  phone: string;
  criticality: Criticality;
  status: OrganizationStatus;
  notes: string;
};
