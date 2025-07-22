"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SidingReplacement(props) {
  const { imageSrc, heading, body, ctaHref, ctaLabel, reverse } = props;

  return (
    <section className={`py-10 lg:py-20 ${reverse && "bg-[#EF4F36] text-white"}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-stretch gap-10 md:gap-12 min-h-[500px]`}
        >
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-64 md:h-auto">
            <div className="absolute inset-0">
              <Image
                src={imageSrc}
                alt="Multifamily Siding"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl">
              {heading}
            </h2>

            <p className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed">
              {body}
            </p>

            <div>
              <Link
                href={ctaHref}
                className={`mt-6 inline-flex items-center gap-2 font-bold py-4 px-8 rounded transition-colors duration-300 ${reverse
                    ? "bg-[#fffae3] text-[#EF4F36] hover:bg-white"
                    : "text-[#fffae3] bg-[#EF4F36] hover:bg-[#c93f2b]"
                  }`}
              >
                {ctaLabel}
                <FaLongArrowAltRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
