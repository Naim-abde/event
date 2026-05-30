

const Hero = () => {
    
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <p className="text-blue-500 font-semibold mb-4 uppercase tracking-widest">
            Event Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover <span className="text-blue-500">Amazing</span> Events
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Book tickets for concerts, conferences, football matches,
            festivals and more with a modern experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
              Explore Events
            </button>

            <button className="border border-gray-700 hover:border-white transition px-6 py-3 rounded-xl font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
            
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
              alt="event"
              className="rounded-2xl h-[400px] w-full object-cover"
            />

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  Summer Music Festival
                </h3>

                <p className="text-gray-400">
                  Casablanca, Morocco
                </p>
              </div>

              <div className="bg-blue-600 px-4 py-2 rounded-xl font-bold">
                299 DH
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-blue-600/30 blur-3xl rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;