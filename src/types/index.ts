export interface Profile {
    id: string;
    email: string;
    role: 'user' | 'compliance_officer';
    compliance_officer_id: string | null;
  }