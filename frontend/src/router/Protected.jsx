import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const {setUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);

    useEffect(() => {

        async function verifyToken() {

            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

               const res =  await api.get("/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(res.data);
                setAuth(true);

            } catch {
                localStorage.removeItem("token");
            }

            setLoading(false);
        }

        verifyToken();

    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!auth) {
        return <Navigate to="/login" />;
    }

    return children;
}