const Events = () => {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 relative overflow-hidden">
      
      {/* Background Subtle Glow bach n-gardiw l-vibe dyal l-hero */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Discover <span className="text-blue-500">Events</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">Explore what's happening around you</p>
          </div>

          {/* */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full md:w-64 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm"
            />

            <select className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-gray-300 focus:outline-none focus:border-blue-500 transition text-sm cursor-pointer">
              <option className="bg-zinc-900">All categories</option>
              <option className="bg-zinc-900">Music</option>
              <option className="bg-zinc-900">Sport</option>
              <option className="bg-zinc-900">Tech</option>
            </select>

            <select className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-gray-300 focus:outline-none focus:border-blue-500 transition text-sm cursor-pointer">
              <option className="bg-zinc-900">Any date</option>
              <option className="bg-zinc-900">Today</option>
              <option className="bg-zinc-900">This week</option>
            </select>
          </div>
        </div>

        {/* */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* */}
          <div className="group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-700 hover:-translate-y-1 transition duration-300">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                alt="Jazz Night"
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
                Music
              </span>
            </div>

            <div className="p-5 space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition">
                Jazz Night Casablanca
              </h3>

              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <span>📍</span> Casablanca, Morocco
                </p>
                <p className="flex items-center gap-2">
                  <span>📅</span> 10 June 2026
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                <span className="text-base font-bold text-white">
                  Free / 50 MAD
                </span>
                <button className="px-4 py-2 bg-zinc-900 hover:bg-blue-600 border border-zinc-800 hover:border-blue-600 text-white text-sm font-semibold rounded-xl active:scale-95 transition duration-200">
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

          {/* */}
          <div className="group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-700 hover:-translate-y-1 transition duration-300">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
                alt="Football Tournament"
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
                Sport
              </span>
            </div>

            <div className="p-5 space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition">
                Football Tournament
              </h3>

              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <span>📍</span> Rabat, Morocco
                </p>
                <p className="flex items-center gap-2">
                  <span>📅</span> 12 June 2026
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                <span className="text-base font-bold text-white">
                  100 MAD
                </span>
                <button className="px-4 py-2 bg-zinc-900 hover:bg-blue-600 border border-zinc-800 hover:border-blue-600 text-white text-sm font-semibold rounded-xl active:scale-95 transition duration-200">
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;