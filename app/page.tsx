import Link from 'next/link';
import { ArrowRight, Shield, FileCheck, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">NormaTech</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/auth/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-gray-50"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Secure Document Management</span>
            <span className="block text-primary">with Compliance Review</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Upload, manage, and review documents with role-based access control. 
            Streamline your compliance process with our secure platform.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/auth/register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 left-4">
              <div className="rounded-full bg-primary/10 p-3">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900">Document Upload</h3>
            <p className="mt-2 text-base text-gray-500">
              Securely upload and manage your documents with ease.
            </p>
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 left-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900">Compliance Review</h3>
            <p className="mt-2 text-base text-gray-500">
              Efficient review process by assigned compliance officers.
            </p>
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-4 left-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900">Role-Based Access</h3>
            <p className="mt-2 text-base text-gray-500">
              Secure access control with user and compliance officer roles.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}