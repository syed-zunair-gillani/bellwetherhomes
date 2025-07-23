'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-black py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-[1560px] w-full mx-auto flex justify-between items-center px-3 transition-all duration-300'>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={scrolled ? 260 : 320}
            height={57}
            className="transition-all duration-300"
          />
        </Link>
        <div className='flex items-center gap-5'>
          <button className='hidden lg:block'>
            <Link
              href='tel:303-219-2161'
              className="bg-[#EF4F36] gap-2 flex items-center hover:scale-105 transition-all duration-150 text-white font-bold py-3 px-8 rounded"
            >
              <AiOutlineWhatsApp size={25} />
              (303) 219-2161
            </Link>
          </button>
          <button className='hidden md:block'>
            <Link
              href='tel:303-219-2161'
              className="bg-transparent gap-2 flex items-center hover:scale-105 border-[2px] border-white transition-all duration-150 text-white font-bold py-2.5 px-4 rounded-full"
            >
              Schedule a Free Project Consultation
              <FaLongArrowAltRight size={18} />
            </Link>
          </button>
          <button className='cursor-pointer'>
            <TfiMenu size={32} color='#fff' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
