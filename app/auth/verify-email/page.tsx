'use client';

import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function VerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Check your email
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;ve sent you a verification link to your email address.
            Please click the link to verify your account.
          </p>
        </div>
        
        <div className="mt-6">
          <div className="text-sm text-center">
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:text-primary/80"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}