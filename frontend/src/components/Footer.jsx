
const Footer = () => {
  return (
    <div>
        <footer className="bg-zinc-950 text-white border-t border-zinc-900">
  
  {/* TOP */}
  <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-14">

    {/* Logo */}
    <div>
      <h1 className="text-4xl font-black mb-6">
        Event<span className="text-blue-500">Ease</span>
      </h1>

      <p className="text-gray-400 leading-relaxed mb-6">
        Modern platform for booking tickets for concerts,
        festivals, football matches and conferences.
      </p>

      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
          F
        </div>

        <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
          I
        </div>

        <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
          X
        </div>

        <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
          Y
        </div>
      </div>
    </div>

    {/* Company */}
    <div>
      <h2 className="text-2xl font-bold mb-8">
        Company
      </h2>

      <ul className="space-y-5 text-gray-400">
        <li className="hover:text-white transition cursor-pointer">
          About Us
        </li>

        <li className="hover:text-white transition cursor-pointer">
          Careers
        </li>

        <li className="hover:text-white transition cursor-pointer">
          Blog
        </li>

        <li className="hover:text-white transition cursor-pointer">
          Contact
        </li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h2 className="text-2xl font-bold mb-8">
        Support
      </h2>

      <ul className="space-y-5 text-gray-400">
        <li className="hover:text-white transition cursor-pointer">
          Help Center
        </li>

        <li className="hover:text-white transition cursor-pointer">
          Terms Of Service
        </li>

        <li className="hover:text-white transition cursor-pointer">
          Privacy Policy
        </li>

        <li className="hover:text-white transition cursor-pointer">
          FAQs
        </li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h2 className="text-2xl font-bold mb-8">
        Newsletter
      </h2>

      <p className="text-gray-400 mb-6">
        Subscribe to get latest events and offers.
      </p>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-600"
        />

        <button className="bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl font-bold">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

      <p className="text-gray-500 text-center md:text-left">
        © 2026 Events. All rights reserved.
      </p>

      <div className="flex items-center gap-6 text-gray-500">
        <p className="hover:text-white transition cursor-pointer">
          Security
        </p>

        <p className="hover:text-white transition cursor-pointer">
          Cookies
        </p>

        <p className="hover:text-white transition cursor-pointer">
          Sitemap
        </p>
      </div>

    </div>
  </div>

</footer>
    </div>
  )
}

export default Footer