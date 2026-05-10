import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://localhost:8000/api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            }
        })
        .then((res) => {
            setUser(res.data);
        })
        .catch((err) => {
            console.log("Error:", err.response?.status);

            if (err.response?.status === 401) {
                localStorage.removeItem("token");
                navigate("/login");
            }
        });

    }, [navigate]);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <h1 className="text-xl font-bold">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">

            <Link to="/events" className="text-blue-500 hover:underline">
                Go to Events
            </Link>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl w-[400px] text-center shadow-xl">

                <h1 className="text-2xl font-bold mb-3">
                    Profile dyal: {user.name}
                </h1>

                <p className="text-gray-400">
                    {user.email}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                    Joined: {new Date(user.created_at).toLocaleDateString()}
                </p>

                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }}
                    className="mt-6 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl"
                >
                    Logout
                </button>

            </div>
        </div>
    );
}