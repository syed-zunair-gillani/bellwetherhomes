import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Multifamily() {
  return (
    <section className='bg-[#EF4F36] py-12 md:py-20 lg:py-24 relative px-4 text-white overflow-hidden'>
      {/* Background icon positioned to the right */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/3 md:w-1/4 opacity-20"
        style={{
          backgroundImage: "url('/images/bellwether-icon.svg')",
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className='container mx-auto px-4 md:px-6 lg:px-8 relative z-10'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#FFFAE3] mb-8 md:mb-12'>
          Multifamily Siding Replacement
        </h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='order-2 lg:order-1'>
            <p className='text-[#FFFAE3] text-base md:text-lg  font-[400] leading-relaxed mb-6 md:mb-8'>
              While we excel in various exterior renovation services across Colorado, including window replacements and complete exterior overhauls, Bellwether's team also has a deep understanding of multifamily siding solutions. Given Colorado's unique climate, our experts advocate for durable siding options that can stand the test of time.
            </p>
            <div className='text-center lg:text-left'>
              <Link 
                href='/' 
                className="inline-block text-[#EF4F36] bg-white hover:bg-[#FFFAE3] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Schedule Consultation →
              </Link>
            </div>
          </div>
          
          <div className='order-1 lg:order-2 border-3 border-[#FFFAE3]  overflow-hidden'>
            <Image
              src="/images/Multifamily-siding.jpg"
              width={800}
              height={600}
              alt="Multifamily siding replacement project"
              className='w-full h-auto object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multifamily;