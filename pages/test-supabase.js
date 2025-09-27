import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';
import ClientOnly from './components/ClientOnly';

const SupabaseTest = () => {
  const [status, setStatus] = useState('Testing connection...');
  const [user, setUser] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      // Test basic connection
      const { data, error } = await supabase.from('admin_users').select('count').limit(1);
      
      if (error) {
        setStatus(`Connection error: ${error.message}`);
        return;
      }

      // Test auth
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        setUser(session.user.email);
        setStatus('✅ Connected successfully! User is logged in.');
      } else {
        setStatus('✅ Connected successfully! No user logged in.');
      }
    } catch (err) {
      setStatus(`❌ Connection failed: ${err.message}`);
    }
  };

  const testAuth = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'test@example.com',
        password: 'test123'
      });
      
      if (error) {
        setStatus(`Auth test: ${error.message}`);
      } else {
        setStatus('Auth test successful!');
      }
    } catch (err) {
      setStatus(`Auth test failed: ${err.message}`);
    }
  };

  return (
    <ClientOnly fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Supabase Connection Test
            </h1>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    }>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Supabase Connection Test
          </h1>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-2">Status:</p>
            <p className="text-sm font-mono">{status}</p>
            {user && (
              <p className="text-sm text-green-600 mt-2">User: {user}</p>
            )}
          </div>
          <div className="mt-4 space-x-2">
            <button
              onClick={testConnection}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Test Connection
            </button>
            <button
              onClick={testAuth}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Test Auth
            </button>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>Environment Variables Check:</p>
            <p>SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</p>
            <p>SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</p>
            <p>SERVICE_ROLE_KEY: {process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing'}</p>
          </div>
        </div>
      </div>
    </div>
    </ClientOnly>
  );
};

export default SupabaseTest;
