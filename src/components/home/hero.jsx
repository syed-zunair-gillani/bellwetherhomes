import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <div 
      className="hero-section  relative py-16 px-4 text-center text-white h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-pic.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <h2 className="text-xl font-semibold mb-4 tracking-wider">
          MULTIFAMILY SIDING REPLACEMENT EXPERTS IN COLORADO    
        </h2>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Multifamily Siding Replacement
        </h1>
        
        <p className="text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock transformative exteriors for your multifamily project with Bellwether - the
          trusted choice for multifamily siding replacement in Colorado.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href='/' className="bg-[#EF4F36] hover:bg-[#d6452e] text-white font-bold py-3 px-8 rounded transition-colors">
            Schedule a Free Project Consultation
          </Link>
          <Link href='/' className="bg-[#EF4F36] hover:bg-[#d6452e] text-white font-bold py-3 px-8 rounded transition-colors">
            Watch Video
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;