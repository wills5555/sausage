'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchPage() {
  const [companyId, setCompanyId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!companyId.trim()) {
      setError('Please enter a company ID');
      return;
    }
    
    if (isNaN(Number(companyId))) {
      setError('Company ID must be a number');
      return;
    }
    
    setError('');
    router.push(`/company/${companyId}`);
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen flex flex-col items-center text-[#333]">
      <header className="bg-[#C92228] text-white p-6 text-center w-full">
        <h1 className="text-3xl font-bold">Company Checker</h1>
        <p className="mt-2">Search for company information by ID</p>
      </header>

      <main className="max-w-lg w-full mx-auto my-16 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Find a Company</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyId" className="block mb-2 font-medium">
                Company ID:
              </label>
              <input
                type="text"
                id="companyId"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                placeholder="Enter company ID number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C92228]"
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#C92228] text-white py-3 rounded-lg hover:bg-[#A61D22] transition duration-200"
            >
              Search
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Enter a valid company ID to view detailed information</p>
          </div>
        </div>
      </main>

      <footer className="mt-auto text-center p-6 bg-[#392525] text-white text-sm w-full">
        &copy; 2025 Company Checker Ltd. | All rights reserved.
      </footer>
    </div>
  );
}