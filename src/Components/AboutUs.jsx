const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex items-center justify-center">
      <div className="w-11/12 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-red-500 drop-shadow-lg">
          About Us ⚡
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Welcome to <span className="text-red-400 font-semibold">GameHub</span>{" "}
          — where gaming meets passion. We’re not just a store; we’re a universe
          built for gamers who love every pixel, every adventure, and every
          victory.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Our mission is simple:
          <span className="text-red-400 font-semibold">
            {" "}
            bring you the games you love
          </span>
          , faster, cleaner, and cooler than ever before. Explore trending
          titles, uncover hidden gems, and dive deeper into worlds waiting to be
          conquered.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Whether you’re a casual explorer or a hardcore warrior, GameHub is
          your portal into the gaming multiverse.
          <span className="block mt-3 text-red-400 font-semibold">
            Stay sharp. Stay curious. Welcome to the Hub.
          </span>
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
