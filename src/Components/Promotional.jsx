const Promotional = () => {
  return (
    <div className="bg-black text-white py-20 px-6 flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">
           Special Promotions!
        </h1>

        {/* Short Description */}
        <p className="text-gray-300 text-lg md:text-xl">
          Enjoy exclusive discounts, seasonal offers, and premium game bundles
          only at <span className="text-red-400 font-semibold">GameHub</span>.
        </p>

        {/* Promo Box */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-red-400">
            🎮 Up to 50% OFF on Top Games
          </h2>

          <p className="mt-3 text-gray-300">
            Limited-time offer! Upgrade your collection with trending and
            top-rated titles.
          </p>

          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition">
            Grab Offer →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotional;
