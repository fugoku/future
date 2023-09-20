export interface ProjectProps {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  usage: number;
  usageLimit: number;
  plan: PlanProps;
  stripeId?: string;
  billingCycleStart?: number;
  createdAt?: Date;

  domains?: {
    slug: string;
  }[];
  users?: {
    role: "owner" | "member";
  }[];
}

export interface ProjectWithDomainProps extends ProjectProps {
  domains: DomainProps[];
  primaryDomain?: DomainProps;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
  role: "owner" | "member";
  projects?: { projectId: string }[];
}

export type DomainVerificationStatusProps =
  | "Valid Configuration"
  | "Invalid Configuration"
  | "Pending Verification"
  | "Domain Not Found"
  | "Unknown Error";

export interface RootDomainProps {
  target: string;
  rewrite?: boolean;
}

export interface DomainProps {
  slug: string;
  verified: boolean;
  primary: boolean;
  target?: string;
  type: "redirect" | "rewrite";
}

export type PlanProps = "free" | "pro" | "enterprise";

