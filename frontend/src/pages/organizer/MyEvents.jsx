
const MyEvents = () => {
  return (
    <div>




    <div className="p-8 bg-black min-h-screen text-white">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

        <div>
          <h1 className="text-3xl font-black">My Events</h1>
          <p className="text-zinc-400 mt-2">Manage and track your events</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">

          <input
            type="text"
            placeholder="Search events..."
            className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none focus:border-blue-600 w-full md:w-72"
            
          />

          <select
            className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none focus:border-blue-600"
           
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="cancelled">Cancelled</option>
            <option value="finished">Finished</option>
          </select>

          <select
            className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl outline-none focus:border-blue-600"
           
          >
            <option value="all">All Categories</option>
            <option value="music">Music</option>
            <option value="sport">Sport</option>
            <option value="tech">Tech</option>
          </select>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-blue-600 transition">

          <div className="h-44 bg-zinc-800"></div>

          <div className="p-5 space-y-3">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold">Event Title</h2>

              <span className="text-xs px-3 py-1 rounded-full bg-blue-600">
                Published
              </span>

            </div>

            <p className="text-sm text-zinc-400">
              Casablanca · 20/05/2026
            </p>

            <div className="flex items-center justify-between text-sm text-zinc-300">

              <span>Seats: 120</span>
              <span>120 MAD</span>

            </div>

            <div className="flex gap-2 pt-3">

              <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 py-2 rounded-xl">
                View
              </button>

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-xl">
                Edit
              </button>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
</div>
  )
}

export default MyEvents