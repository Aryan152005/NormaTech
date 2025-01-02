import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import { Profile } from '../../types';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Profile['role']>('user');
  const [complianceOfficerId, setComplianceOfficerId] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.signUp({ email, password });
    if (user) {
      await supabase
        .from('profiles')
        .insert([{ id: user.id, email, role, compliance_officer_id: complianceOfficerId || null }]);
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={role} onChange={(e) => setRole(e.target.value as Profile['role'])}>
        <option value="user">User</option>
        <option value="compliance_officer">Compliance Officer</option>
      </select>
      {role === 'user' && (
        <input
          type="text"
          placeholder="Compliance Officer ID"
          value={complianceOfficerId}
          onChange={(e) => setComplianceOfficerId(e.target.value)}
        />
      )}
      <button type="submit">Register</button>
    </form>
  );
}