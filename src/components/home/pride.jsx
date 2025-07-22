import Link from 'next/link';
import React from 'react';


function Pride() {
  return (
    <div 
      className="hero-section relative py-16 px-4 text-center text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Pride.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">
          You Take Pride In Your Home,<br /> We Take Pride In Our Work.   
        </h2>
        
        <p className="text-2xl mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
         Let’s Do Something Amazing Together!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href='/' className="bg-[#EF4F36] hover:bg-[#d6452e] text-white font-bold py-3 px-8 rounded transition-colors">
           Schedule Consultation →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pride;
