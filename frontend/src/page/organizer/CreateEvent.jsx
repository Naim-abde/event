import {  useState } from "react"
const CreateEvent = () => {
    const [form ,setForm ] = useState({
        title : "",
        description :"",
        image :"",
        location :'',
        start_date :"",
        end_date :"",
        category_id:"",
        total_seats:"",
        available_seats:"",
        price:"",
        status:''

    })
    const hundleForm = (e)=>{
        setForm({
            ...form ,
            [e.target.name] : e.target.value
        })
        

    }
     const hundleSubmit = (e)=>{
        
        e.preventDefault()
        
        

    }
     
     
  return (
   <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">

  <div className="w-full max-w-5xl">

    <div className="mb-10">
      <h1 className="text-4xl font-black">
        Event Details
      </h1>

      <p className="text-zinc-400 mt-2">
        Create or update your event information
      </p>
    </div>

    <form onSubmit={hundleSubmit} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 space-y-6 shadow-2xl">

      <div className=" gap-6">

        <div>
          <label className="text-sm text-zinc-400">Title</label>
          <input
            type="text"
            placeholder="Event title..."
            name="title"
            value={form.title}
            onChange={hundleForm}

            className="w-full  mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
          />
        </div>

      

      </div>

      <div>
        <label className="text-sm text-zinc-400">Description</label>

        <textarea
          rows="4"
          placeholder="Event description..."
           value={form.description}
           name="description"
            onChange={hundleForm}
          className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition resize-none"
        ></textarea>
      </div>

      <div>
        <label className="text-sm text-zinc-400">Image</label>

        <input
          type="file"
           value={form.image}
           name="image"
            onChange={hundleForm}
          className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
      </div>

      <div>
        <label className="text-sm text-zinc-400">Location</label>

        <input
          type="text"
           value={form.location}
            onChange={hundleForm}
            name = "location"
          placeholder="Casablanca, Morocco"
          className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-zinc-400">Start Date</label>
          <input
            type="datetime-local"
            name="start_date"
                value={form.start_date}
            onChange={hundleForm}
            className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">End Date</label>
          <input
            type="datetime-local"
                value={form.end_date}
            onChange={hundleForm}
            name="end_date"
            className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
          />
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-zinc-400">Category</label>

          <select 
            onChange={hundleForm}
            name="category_id"
           className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition">
            <option value="1">Music</option>
            <option value="1">Sports</option>
            <option value="1">Tech</option>
            <option value="1">Business</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-zinc-400">Status</label>
             
          <select 
          onChange={hundleForm} 
          name="status"
          className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="cancelled">Cancelled</option>
            <option value="finished">Finished</option>
          </select>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div>
          <label className="text-sm text-zinc-400">Total Seats</label>
          <input
            type="number"
            name="total_seats"
             value={form.total_seats}
            onChange={hundleForm}
            className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">Available Seats</label>
          <input
            type="number"
             value={form.available_seats}
            onChange={hundleForm}
            name="available_seats"
            className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">Price (MAD)</label>
          <input
            type="number"
             value={form.price}
            onChange={hundleForm}
            name="price"
            step="0.01"
            className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
          />
        </div>

      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-bold text-lg shadow-lg"
      >
        Save Event
      </button>

    </form>

  </div>

</section>
  )
}

export default CreateEvent