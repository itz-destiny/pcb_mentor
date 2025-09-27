import React from "react";
import { useRouter } from "next/router";

const AdminAuth = ({ children }) => {
    const router = useRouter();

    // Example authentication logic
    const isAuthenticated = true; // Replace with actual authentication check

    if (!isAuthenticated) {
        router.push("/login"); // Redirect to login page if not authenticated
        return null;
    }

    return <>{children}</>;
};

export default AdminAuth;