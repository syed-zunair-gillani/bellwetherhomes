import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Pride({data}) {
  return (
    <div 
      className="hero-section relative py-16 px-4 text-center text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${urlFor(data.backgroundImage.asset).url()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">
          {data?.Title}
        </h2>
        
        <p className="text-2xl mb-10 max-w-2xl mx-auto font-bold text-[#fffae3] leading-relaxed">
         {data?.sub_title}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={data?.buttonURL} className="bg-[#EF4F36] flex hover:scale-105 transition-all duration-150 gap-2 items-center text-white font-bold py-3 px-8 rounded">
           {data?.buttonText}  <FaLongArrowAltRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pride;
