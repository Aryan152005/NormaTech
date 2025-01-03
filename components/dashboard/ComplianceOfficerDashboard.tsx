'use client';

import { useState } from 'react';
import { Users, FileCheck, AlertCircle } from 'lucide-react';
import type { Profile } from '@/lib/supabase/types';

export default function ComplianceOfficerDashboard({ profile }: { profile: Profile }) {
  const [assigningUser, setAssigningUser] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');

  const handleAssignUser = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement user assignment functionality
    setAssigningUser(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setAssigningUser(false);
    setNewUserEmail('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome, {profile?.full_name || 'Compliance Officer'}</h2>
        <p className="text-gray-600 mb-4">Role: {profile?.role}</p>

        {/* Assign Users Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Assign New User</h3>
          <form onSubmit={handleAssignUser} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                User Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="user@example.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={assigningUser}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                assigningUser ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {assigningUser ? 'Assigning...' : 'Assign User'}
            </button>
          </form>
        </div>

        {/* Documents for Review */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Documents Pending Review</h3>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Document {i + 1}.pdf</p>
                  <p className="text-xs text-gray-500">Submitted by: user{i + 1}@example.com</p>
                </div>
                <button className="px-3 py-1 text-sm text-primary hover:text-primary/80">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Users */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Assigned Users</h3>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">user{i + 1}@example.com</p>
                  <p className="text-xs text-gray-500">Assigned on: {new Date().toLocaleDateString()}</p>
                </div>
                <FileCheck className="h-5 w-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}