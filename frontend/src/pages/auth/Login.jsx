import { useState } from "react"
import { login } from "../../services/authService"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await login(form);

        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("is_auth", true);

        navigate("/profile");

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

    return (
       <form
    onSubmit={handleSubmit}
    className="min-h-screen flex items-center justify-center bg-black px-4"
>
    <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">

        <h1 className="text-3xl font-black text-white text-center mb-6">
            Login
        </h1>

        <input
            placeholder="Email"
            onChange={(e) =>
                setForm({ ...form, email: e.target.value })
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

        <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
                setForm({ ...form, password: e.target.value })
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-bold text-white"
        >
            Register
        </button>

    </div>
</form>
    )
}