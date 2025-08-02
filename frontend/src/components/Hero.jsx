import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="w-full h-[100vh] bg-[#fdfdfd] flex items-center justify-center px-6 sm:px-12 relative overflow-hidden">

      {/* Left Side Text */}
      <div className="w-full sm:w-1/2 z-10">
        <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">
          Trending Now
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a]">
          Redefine<br />Your <span className="text-[#ff3c3c]">Look</span>
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mt-6 max-w-md">
          Step into the new season with modern essentials and curated designs, crafted for confidence.
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-[#333] transition-all">
          Explore Collection
        </button>
      </div>

      {/* Right Floating Product Card */}
      <div className="absolute bottom-10 right-6 sm:right-20 w-[300px] sm:w-[350px] bg-white rounded-2xl shadow-xl overflow-hidden z-20 hover:scale-105 transition-transform duration-500">
        <img
          src={assets.hero_img}
          alt="Product"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-1">Classic Black Hoodie</h2>
          <p className="text-sm text-gray-600 mb-2">Comfort fit · Cotton rich</p>

          {/* Ratings */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500">(120)</span>
          </div>

          {/* Price + Action */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">₹1,999</span>
            <button className="text-[#ff3c3c] text-sm font-medium hover:underline">
              View Details
            </button>
          </div>

          {/* Optional Add to Cart */}
          <button className="mt-4 w-full bg-[#ff3c3c] text-white py-2 rounded-full font-semibold hover:bg-[#e03232] transition-all">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Decorative Circle Background */}
      <div className="absolute w-[500px] h-[500px] bg-[#ffeaea] rounded-full -top-32 -right-32 z-0"></div>
    </section>
  );
};

export default Hero;
