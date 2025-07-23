'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoPlayCircleOutline } from 'react-icons/io5';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { urlFor } from '@/sanity/lib/image';

export default function ConvinceSection({data}) {
  const [showVideo, setShowVideo] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640, // sm screen
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="py-14 bg-[#FDF4DC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-20">

          {/* Image or Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-full min-h-[350px] rounded-lg overflow-hidden shadow-xl">
              {showVideo ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={data?.videoURL || "#"}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <Image
                    src={urlFor(data?.videoImage.asset).url()}
                    alt="Modern Home"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="absolute top-1/2 left-1/2 hover:opacity-80 cursor-pointer -translate-x-1/2 -translate-y-1/2"
                      onClick={() => setShowVideo(true)}
                      aria-label="Play video"
                    >
                      <IoPlayCircleOutline className="text-8xl text-[#fffae3]" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-[#EF4F36] font-semibold mb-2 text-lg">
              {data?.headingHighlight}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] leading-tight mb-4">
              {data?.heading}
            </h2>
            <p className="text-[#333] text-base sm:text-lg leading-relaxed mb-5">
              {data?.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {data?.features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 min-h-[52px] pr-2">
                  <FaCheckCircle className="text-[#EF4F36] mt-1 text-3xl shrink-0" />
                  <p className="text-[#1E1E1E] text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo Grid for Desktop */}
      <div className="hidden sm:grid container mx-auto grid-cols-6 gap-6 mt-14 px-4 md:px-6 lg:px-8">
        {data?.logos?.map((_item, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center flex-shrink-0 max-w-[246px] max-h-[134px] w-full h-[134px] rounded"
          >
            <img
              src={urlFor(_item.asset).url()}
              alt=""
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden mt-14 px-4">
        <Slider {...sliderSettings}>
          {data?.logos?.map((_item, idx) => (
            <div key={idx} className="px-2">
              <div className="flex justify-center items-center h-[134px]">
                <img
                  src={urlFor(_item.asset).url()}
                  alt=""
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
