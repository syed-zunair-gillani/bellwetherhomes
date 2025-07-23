import Link from 'next/link';
import React from 'react';
import Header from '../header';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosPlayCircle } from "react-icons/io";
import { urlFor } from '@/sanity/lib/image';

function Hero({ data }) {
  console.log("🚀 ~ Hero ~ data:", data)
  return (
    <>
      <Header />
      <main
        className="hero-section  relative py-16 px-4 text-center text-white h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${urlFor(data.backgroundImage).url()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="max-w-5xl mx-auto relative z-10 px-4 md:mt-32">
          <h2 className="text-xl font-semibold mb-4 tracking-wider">
            {data?.subtitle}
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {data?.title}
          </h1>

          <p className="text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            {data?.info}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={data?.buttons[0].href} className="bg-[#EF4F36] gap-2 flex items-center justify-center hover:scale-105 transition-all duration-150 text-white font-bold py-4 px-8 rounded">
              {data?.buttons[0].label}
              <FaLongArrowAltRight size={18} />
            </Link>
            <Link href={data?.buttons[1].href} className="bg-[#EF4F36] gap-2 flex items-center justify-center hover:scale-105 transition-all duration-150 text-white font-bold py-4 px-8 rounded">
              {data?.buttons[1].label}
              <IoIosPlayCircle size={18} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;