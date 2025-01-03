'use client';

import { useState } from 'react';
import { Upload, FileText, Clock } from 'lucide-react';
import type { Profile } from '@/lib/supabase/types';

export default function UserDashboard({ profile }: { profile: Profile | null }) {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUploading(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {profile?.full_name || 'User'}
        </h2>
        <p className="text-gray-600 mb-4">Role: {profile?.role || 'N/A'}</p>
        
        {/* Upload Section */}
        <div className="mt-6">
          <label
            htmlFor="file-upload"
            className={`relative cursor-pointer ${
              uploading ? 'opacity-50' : ''
            } flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors`}
          >
            <input
              id="file-upload"
              type="file"
              className="sr-only"
              onChange={handleFileUpload}
              disabled={uploading}
              accept=".pdf"
            />
            <div className="space-y-2 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="text-sm text-gray-600">
                <span className="font-medium text-primary hover:text-primary/80">
                  Click to upload
                </span>{' '}
                or drag and drop
              </div>
              <p className="text-xs text-gray-500">PDF files only (max 10MB)</p>
            </div>
          </label>
        </div>

        {/* Recent Documents */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Documents</h3>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Document {i + 1}.pdf</p>
                  <p className="text-xs text-gray-500">Pending Review</p>
                </div>
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
