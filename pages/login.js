import { getCsrfToken, signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login({ csrfToken }) {
  const [error, setError] = useState(null);
  const router = useRouter();
  const callbackUrl = router.query.callbackUrl || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl,
    });

    if (res.error) {
      setError("Invalid username or password");
    } else {
      router.push(callbackUrl);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to access your dashboard
          </p>
        </div>

        <form method="post" onSubmit={handleSubmit} className="space-y-5">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          {error && (
            <div className="bg-red-100 text-red-600 text-sm p-2 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-6">
          © {new Date().getFullYear()} PCBMENTOR. All rights reserved.
        </p>
      </div>
    </div>
  );
}

// Get CSRF token for NextAuth
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: (await getCsrfToken(context)) ?? null,
    },
  };
}
