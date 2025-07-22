'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Sidingreplacement(props) {
  const {
    imageSrc = '/images/Denver-Multifamily.jpg',
    heading = 'What Does Multifamily Siding Replacement Entail?',
    body = `Multifamily siding replacement is a comprehensive process focused on revamping the exterior of large-scale housing units. Initially, it involves assessing the current siding for damage, wear, or outdated designs. Following the evaluation, the old material is meticulously removed. Once the original facade is cleared, a new layer of protection, often in the form of a weather-resistant barrier, is applied. Subsequently, the new siding material is installed, ensuring uniformity and modern aesthetics across all units.`,
    ctaHref = '/',
    ctaLabel = 'Schedule Consultation →',
    bgColor = '#fff',
    reverse = false,
    textColor = 'black', // 'white' or 'black'
  } = props;

  const textClass = textColor === 'black' ? 'text-black' : 'text-white';

  return (
    <section className="py-14" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-16 ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src={imageSrc}
              alt="Multifamily Siding"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className={`${textClass} font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl`}>
              {heading}
            </h2>

            <p className={`mt-6 md:mt-10 text-base sm:text-lg md:text-xl leading-relaxed ${textClass}`}>
              {body}
            </p>

            <Link
              href={ctaHref}
              className="inline-block mt-8 md:mt-12 bg-black text-white hover:bg-neutral-800 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
