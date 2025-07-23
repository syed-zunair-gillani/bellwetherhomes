import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaRss,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 text-sm">
      {/* Top content: 3 columns (stack on mobile) */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
        {/* Left: Logo */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Link href="/">
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              width={300}
              height={57}
              className="transition-all duration-300"
            />
          </Link>
        </div>

        {/* Center: Denver Location */}
        <div className="flex flex-col items-center md:items-center gap-2 text-[#FFFAE3]">
          <p className="font-bold text-2xl">Monday–Friday</p>
          <p className="font-bold text-2xl">8:30AM–5:30PM</p>
          <p className="text-lg">3839 Newport St.,</p>
          <p className="text-lg">Denver, CO 80207</p>
          <p className="text-lg">
            Phone:{' '}
            <a href="tel:3038163212" className="text-blue-400">
              (303) 816–3212
            </a>
          </p>
        </div>

        {/* Right: Social & Fort Collins */}
        <div className="flex flex-col gap-6 items-center md:items-end">
          <div className="flex gap-4 text-white text-2xl">
            <FaFacebookF className="hover:text-blue-500 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaLinkedinIn className="hover:text-blue-400 transition" />
            <FaYoutube className="hover:text-red-600 transition" />
            <FaPinterestP className="hover:text-red-500 transition" />
            <FaRss className="hover:text-orange-400 transition" />
          </div>
          <div>
            <p className="text-lg font-[400]">4030 Capstone Court</p>
            <p className="text-lg font-[400]">Fort Collins, CO 80525</p>
            <p className="text-lg font-[400]">
              Phone:{' '}
              <a href="tel:9704648077" className="text-blue-400">
                (970) 464–8077
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 text-xs text-neutral-400 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <span>
          &copy; 2025 Bellwether Windows, Siding, & Doors. All Rights Reserved.
        </span>
        <span>
          contractor seo by:{' '}
          <a href="https://kcwebdesigner.com" className="underline">
            kcwebdesigner.com
          </a>{' '}
          |{' '}
          <a href="https://kcseopro.com" className="underline">
            kcseopro.com
          </a>
        </span>
      </div>
    </footer>
  );
}
