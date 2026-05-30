
const Stats = () => {
  return (
    <div>
        <section className="py-20 bg-black text-white border-y border-zinc-900">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

    <div className="bg-zinc-900 rounded-3xl p-8 text-center">
      <h1 className="text-5xl font-black text-blue-500">500+</h1>
      <p className="text-gray-400 mt-3">Events</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-8 text-center">
      <h1 className="text-5xl font-black text-blue-500">20K+</h1>
      <p className="text-gray-400 mt-3">Users</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-8 text-center">
      <h1 className="text-5xl font-black text-blue-500">50+</h1>
      <p className="text-gray-400 mt-3">Cities</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-8 text-center">
      <h1 className="text-5xl font-black text-blue-500">99%</h1>
      <p className="text-gray-400 mt-3">Happy Clients</p>
    </div>

  </div>
</section>

    <section className="py-24 bg-zinc-950 text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-blue-500 uppercase tracking-[4px] font-semibold mb-4">
        Why Choose Us
      </p>

      <h1 className="text-5xl font-black">
        Modern Ticket Experience
      </h1>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
        <div className="text-5xl mb-6">🎫</div>

        <h2 className="text-2xl font-bold mb-4">
          Fast Booking
        </h2>

        <p className="text-gray-400">
          Reserve tickets instantly.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
        <div className="text-5xl mb-6">⚡</div>

        <h2 className="text-2xl font-bold mb-4">
          Instant Access
        </h2>

        <p className="text-gray-400">
          Get tickets immediately.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
        <div className="text-5xl mb-6">🔒</div>

        <h2 className="text-2xl font-bold mb-4">
          Secure Payment
        </h2>

        <p className="text-gray-400">
          Safe and protected transactions.
        </p>
      </div>

    </div>
  </div>
  <section className="py-24 px-6 bg-black text-white">
  <div className="max-w-5xl mx-auto bg-blue-600 rounded-[40px] p-12 md:p-20 text-center">

    <h1 className="text-4xl md:text-6xl font-black mb-6">
      Ready To Join The Next Event?
    </h1>

    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
      Discover thousands of events today.
    </p>

    <button className="bg-white text-black px-8 py-4 rounded-2xl font-black">
      Get Started
    </button>

  </div>
</section>
</section>
    </div>
  )
}

export default Stats