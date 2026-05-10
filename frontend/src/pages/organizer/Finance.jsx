
const Finance = () => {
  return (
    <div>
        <div className="p-8 bg-black min-h-screen text-white">

      <div className="mb-10">
        <h1 className="text-3xl font-black">Finance Overview</h1>
        <p className="text-zinc-400 mt-2">Track your earnings and transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-blue-600 transition">
          <p className="text-zinc-400 text-sm">Total Earnings</p>
          <h2 className="text-3xl font-black mt-2">12,450 MAD</h2>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-blue-600 transition">
          <p className="text-zinc-400 text-sm">This Month</p>
          <h2 className="text-3xl font-black mt-2">3,200 MAD</h2>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-blue-600 transition">
          <p className="text-zinc-400 text-sm">Pending Balance</p>
          <h2 className="text-3xl font-black mt-2">1,150 MAD</h2>
        </div>

      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold">Recent Transactions</h2>
        </div>

        <div className="divide-y divide-zinc-800">

          <div className="flex items-center justify-between p-5">
            <div>
              <p className="font-semibold">Ticket Sale</p>
              <p className="text-sm text-zinc-400">Event: Music Night</p>
            </div>
            <span className="text-green-500 font-bold">+250 MAD</span>
          </div>

          <div className="flex items-center justify-between p-5">
            <div>
              <p className="font-semibold">Ticket Sale</p>
              <p className="text-sm text-zinc-400">Event: Tech Meetup</p>
            </div>
            <span className="text-green-500 font-bold">+180 MAD</span>
          </div>

          <div className="flex items-center justify-between p-5">
            <div>
              <p className="font-semibold">Withdrawal</p>
              <p className="text-sm text-zinc-400">Bank Transfer</p>
            </div>
            <span className="text-red-500 font-bold">-500 MAD</span>
          </div>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Finance