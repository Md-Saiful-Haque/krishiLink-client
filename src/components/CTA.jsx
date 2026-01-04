import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="py-24 mb-10 bg-[#6d8c54] text-white">
  <div className="max-w-[1200px] mx-auto text-center px-4">

    <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
      Grow Better. Trade Smarter. <br />
      With <span className="text-[#f1cf69]">KrishiLink</span>
    </h2>

    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
      A trusted digital marketplace where farmers and buyers connect directly 
      for fair, transparent, and efficient crop trading.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">
      <Link to="/register">
        <button className="bg-[#f1cf69] hover:bg-[#e5be4f] transition px-10 py-3 rounded-md text-[#334b35] font-semibold text-lg shadow-md">
          Get Started
        </button>
      </Link>

      <Link to="/all-crops">
        <button className="border border-[#f1cf69] hover:bg-[#f1cf69] hover:text-[#334b35] transition px-10 py-3 rounded-md text-lg font-medium">
          Browse Crops
        </button>
      </Link>
    </div>

    <p className="mt-8 text-sm text-gray-300">
      Empowering farmers • Transparent pricing • Direct connections
    </p>

  </div>
</section>

    );
};

export default CTA;