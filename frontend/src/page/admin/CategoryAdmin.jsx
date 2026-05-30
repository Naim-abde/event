import { useContext } from "react";
import { useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { useNavigate } from "react-router-dom";

export default function CategoryAdmin() {
    const navigate = useNavigate()
    const {store } = useContext(CategoryContext)
    const [form, setForm] = useState({
        name: "",
        image : null
        
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("name" , form.name)
    data.append("image" , form.image)
   
    
    const succes = await store(data)
    if (succes){
        navigate("/admin/categories")
    }
     
    console.log(form)
}
 const handlechange = (e)=>{
     const {name , files , value} = e.target
     setForm({
        ...form , [name] : files ? files[0] : value 
       })


 }

    return (
       <form
    onSubmit={handleSubmit}
    className="min-h-screen flex items-center justify-center bg-black px-4"
>
    <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6">

        <h1 className="text-3xl font-black text-white text-center mb-6">
             category
        </h1>

        <input
            placeholder="Category"
            onChange={handlechange}
            name="name"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />

        <input
            placeholder="image"
            onChange={handlechange}
            name="image"
            type="file"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-600 transition"
        />


        

        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-bold text-white"
        >
            Submit
        </button>

    </div>
</form>
    )
}