import React, { useState, useEffect } from 'react';
import ClientOnly from './components/ClientOnly';

const EnvironmentChecker = () => {
  const [envVars, setEnvVars] = useState(null);
  const [allSet, setAllSet] = useState(false);

  useEffect(() => {
    const checkEnv = () => {
      const vars = {
        'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL,
        'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        'SUPABASE_SERVICE_ROLE_KEY': process.env.SUPABASE_SERVICE_ROLE_KEY
      };
      return vars;
    };

    const vars = checkEnv();
    setEnvVars(vars);
    setAllSet(Object.values(vars).every(value => value && value !== 'undefined'));
  }, []);

  return (
    <ClientOnly fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Environment Variables Check
          </h1>
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    }>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Environment Variables Check
          </h1>
          
          <div className="space-y-4">
            {envVars && Object.entries(envVars).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="font-mono text-sm">{key}</span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  value && value !== 'undefined' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {value && value !== 'undefined' ? '✅ Set' : '❌ Missing'}
                </span>
              </div>
            ))}
          </div>

          <div className={`mt-6 p-4 rounded ${
            allSet ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <h3 className={`font-semibold ${
              allSet ? 'text-green-800' : 'text-red-800'
            }`}>
              {allSet ? '✅ All Environment Variables Set' : '❌ Missing Environment Variables'}
            </h3>
            <p className={`text-sm mt-2 ${
              allSet ? 'text-green-700' : 'text-red-700'
            }`}>
              {allSet 
                ? 'Your environment is properly configured. You can now access the admin panel.'
                : 'Please create a .env.local file with the required Supabase credentials. See QUICK_SETUP.md for instructions.'
              }
            </p>
          </div>

          <div className="mt-6 text-center space-x-4">
            <a
              href="/admin/login"
              className={`px-4 py-2 rounded font-semibold ${
                allSet 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
              onClick={!allSet ? (e) => e.preventDefault() : undefined}
            >
              Go to Admin Login
            </a>
            <a
              href="/test-supabase"
              className="px-4 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700"
            >
              Test Supabase Connection
            </a>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>If you're seeing this page, the basic Next.js setup is working.</p>
            <p>Check the browser console for any additional error messages.</p>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default EnvironmentChecker;