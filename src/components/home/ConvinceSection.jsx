'use client';

import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function ConvinceSection() {
  return (
    <section className="py-14 bg-[#FDF4DC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/images/Denver-Multifamily.jpg"
              alt="Modern Home"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 text-red-600"
                >
                  <path d="M6.79 5.093A.5.5 0 0 1 7.5 5.5v5a.5.5 0 0 1-.79.407L4.5 8.972V7.028l2.29-1.935z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#EF4F36] font-semibold mb-2 text-lg">
              Still Not Convinced?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight mb-6">
              More Reasons to Partner With Bellwether Exterior Designs & Renovation Experts
            </h2>
            <p className="text-[#333] text-base sm:text-lg leading-relaxed mb-8">
              Our team is proud to serve our homeowners on the Front range of Colorado. We know the unique needs of our clients and deeply care about the look and durability of your home’s exterior. Our team of experts are here to guide you through the process of repairing or replacing your home’s siding and windows.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[
                '30 - year Product Warranty | 15 ',
                'Personalized Exterior Design ',
                'Excellent Service & Support ',
                '3D & HD Renderings of Your Home',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 min-h-[60px] pr-2"
                >
                  <FaCheckCircle className="text-[#EF4F36] mt-1 shrink-0" />
                  <p className="text-[#1E1E1E] text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
