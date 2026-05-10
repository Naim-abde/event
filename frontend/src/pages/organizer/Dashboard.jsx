import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
   <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col">

        {/* LOGO */}
        <div className="text-2xl font-black mb-10">
          Event<span className="text-blue-600">Pro</span>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-3">

          <Link
            to="/dashboard/events"
            className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            📅 Events
          </Link>

          <Link
            to="/dashboard/create"
            className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            ➕ Create Event
          </Link>

          <Link
            to="/dashboard/finance"
            className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            🏷 finance
          </Link>

          <Link
            to="/dashboard/organiser"
            className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            ⚙ Settings
          </Link>

        </nav>

        {/* FOOTER SIDEBAR */}
        <div className="mt-auto text-xs text-zinc-500">
          © 2026 EventPro
        </div>

      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-zinc-950/60 backdrop-blur">

          <h1 className="text-lg font-semibold text-zinc-200">
            Dashboard
          </h1>

          <div className="flex items-center gap-3">

            <div className="text-sm text-zinc-400">
              Organiser
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              A
            </div>

          </div>

        </header>

        {/* CONTENT */}
        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default Dashboard