'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/components/ui/Button"; // Assume this supports `disabled` prop

export default function SearchPage() {
  const [companyId, setCompanyId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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

    if (companyId.length < 9) {
      setError('Input valid digits for company ID ');
      return;
    }

    setError('');
    setLoading(true);
    router.push(`/company/${companyId}`);
  };

  return (
    <div className="pt-2">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          id="companyId"
          maxLength={9}
          pattern="\d*"
          inputMode="numeric"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
          placeholder="Enter a valid company ID"
          className="flex-1 text-gray-800 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Loading...
            </span>
          ) : (
            'Check'
          )}
        </Button>
      </form>
    </div>
  );
}