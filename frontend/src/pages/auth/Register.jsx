import { useState } from "react"
import { register } from "../../services/authService"
import { useNavigate } from "react-router-dom"
export default function Register() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        image :""
    })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await register(form);

        console.log(res.data);

        localStorage.setItem("token", res.data.token);
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
    <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-5">

        <h1 className="text-3xl font-black text-white text-center mb-6">
            Create Account
        </h1>

        <input
            placeholder="Name"
            onChange={(e) =>
                setForm({ ...form, name: e.target.value })
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

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

        <input
            type="file"
            name="image"
            onChange={(e) =>
                setForm({ ...form, image: e.target.value })
            }
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3 text-gray-400 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-xl file:mr-4 cursor-pointer"
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