import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            

            <div>
              <h1 className="text-2xl font-black">Events</h1>
             
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-medium">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>

            <Link to="/events" className="hover:text-gray-300 transition">
              Events
            </Link>

            <Link to="/" className="hover:text-gray-300 transition">
              Categories
            </Link>

            <Link to="/" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="px-5 py-2.5 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              Login
            </Link>

            <Link to="/register" className="px-5 py-2.5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span
              className={`w-6 h-0.5 bg-white transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-white transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>

            <a href="#" className="hover:text-gray-300">
              Events
            </a>

            <a href="#" className="hover:text-gray-300">
              Categories
            </a>

            <a href="#" className="hover:text-gray-300">
              Contact
            </a>

            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                Login
              </button>

              <button className="w-full px-5 py-3 rounded-2xl bg-white text-black font-semibold">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}