import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {login  } = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData);

    if(success){

        navigate("/profile");
    }




  
  };

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
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-bold text-white"
        >
          Login
        </button>
        </div>
      </form>
  );
}