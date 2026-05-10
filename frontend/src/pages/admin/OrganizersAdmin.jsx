
const OrganizersAdmin = () => {
  return (
    <div className="p-8 bg-black min-h-screen text-white">

      <div className="mb-8">
        <h1 className="text-3xl font-black">Organizers</h1>
        <p className="text-zinc-400 mt-2">Manage platform organizers</p>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-semibold">All Organizers</h2>

          <input
            type="text"
            placeholder="Search..."
            className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl outline-none focus:border-blue-600"
          />
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="text-zinc-400 border-b border-zinc-800 bg-zinc-900/40">

              <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Created</th>
                <th className="text-right p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-b border-zinc-900 hover:bg-zinc-900/40 transition">

                <td className="p-4 text-zinc-400">1</td>

                <td className="p-4 font-semibold">John Doe</td>

                <td className="p-4 text-zinc-400">john@example.com</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-600">
                    organizer
                  </span>
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-600">
                    active
                  </span>
                </td>

                <td className="p-4 text-zinc-400">2026-05-09</td>

                <td className="p-4 text-right space-x-2">

                  <button className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition">
                    View
                  </button>

                  <button className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                    Edit
                  </button>

                  <button className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 transition">
                    Delete
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default OrganizersAdmin