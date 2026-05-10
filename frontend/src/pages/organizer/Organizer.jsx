
const Organizer = () => {
  return (
     <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">

      <div className="w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">

        <div className="p-8 border-b border-zinc-800 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-black">Profile Settings</h1>
            <p className="text-zinc-400 mt-1">Manage your organizer account</p>
          </div>

          <span className="px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold">
            Organizer
          </span>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">

          <div className="flex flex-col items-center gap-5">

            <div className="relative">

              <div className="w-36 h-36 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-4xl font-black text-zinc-500 overflow-hidden">
                A
              </div>

              <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-xs px-3 py-2 rounded-full cursor-pointer transition">
                Change
                <input type="file" className="hidden" />
              </label>

            </div>

            <p className="text-zinc-500 text-sm text-center">
              JPG, PNG up to 2MB
            </p>

          </div>

          <div className="md:col-span-2 space-y-6">

            <div>
              <label className="text-sm text-zinc-400">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Email Address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 transition"
              />
            </div>

            <div className="flex gap-4 pt-2">

              <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 py-4 rounded-2xl transition">
                Cancel
              </button>

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold transition">
                Save Changes
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Organizer