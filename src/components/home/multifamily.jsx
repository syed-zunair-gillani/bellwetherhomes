'use client';

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoPlayCircleOutline } from "react-icons/io5";

function Multifamily({data}) {
  const [showVideo, setShowVideo] = useState(false);
  const imageURL = urlFor(data.mediaImage.asset).url()
  return (
    <section className='bg-[#EF4F36] py-12 md:py-20 lg:py-24 relative px-4 text-white overflow-hidden'>
      {/* Background icon positioned to the right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-1/3 md:w-1/4 opacity-20"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className='container mx-auto px-4 md:px-6 lg:px-8 relative z-10'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-[#FFFAE3] mb-8 md:mb-12'>
          {data?.heading}
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div className='order-2 lg:order-1'>
            <p className='text-[#FFFAE3] text-base md:text-lg font-[400] leading-relaxed mb-6 md:mb-8'>
              While we excel in various exterior renovation services across Colorado, including window replacements and complete exterior overhauls, Bellwether's team also has a deep understanding of multifamily siding solutions. Given Colorado's unique climate, our experts advocate for durable siding options that can stand the test of time.
            </p>
            <div className='text-center lg:text-left'>
              <button>
                <Link
                href={data?.button?.href}
                className="bg-[#fffae3] gap-2 flex items-center justify-center hover:scale-105 transition-all duration-150 text-[#ef4f36] font-bold py-4 px-8 rounded"
              >
                {data?.button?.label}
                <FaLongArrowAltRight size={18} />
              </Link>
              </button>
            </div>
          </div>

          <div className='order-1 relative lg:order-2 border-3 border-[#FFFAE3] overflow-hidden aspect-video'>
            {!showVideo ? (
              <>
                <Image
                  src={imageURL}
                  width={800}
                  height={600}
                  alt="Multifamily siding replacement project"
                  className='w-full h-full object-cover'
                  priority
                />
                <button
                  className='absolute top-1/2 left-1/2 hover:opacity-80 cursor-pointer -translate-x-1/2 -translate-y-1/2'
                  onClick={() => setShowVideo(true)}
                  aria-label='Play video'
                >
                  <IoPlayCircleOutline className='text-8xl text-[#fffae3]' />
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src={data?.videoUrl || "#"}
                title="Multifamily Siding Replacement Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multifamily;
