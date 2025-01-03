export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: 'user' | 'compliance_officer';
  created_at: string;
  updated_at: string;
};

export type UserComplianceOfficer = {
  id: string;
  user_id: string;
  compliance_officer_id: string;
  created_at: string;
};