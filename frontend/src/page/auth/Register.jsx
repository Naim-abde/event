import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
    const {register} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image : null
    
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("image", formData.image);

    register(data)

   
  };

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
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

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

        <input
          type="file"
          name="image"
          onChange={handleChange}
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
    
  );
}