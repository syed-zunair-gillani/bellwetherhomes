import { urlFor } from '@/sanity/lib/image';
import React from 'react';

function Logo({data}) {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
        {data?.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-shrink-0 max-w-[246px] max-h-[134px] w-full h-[134px] rounded"
          >
            <img
              src={urlFor(logo.asset).url()}
              alt={logo.alt}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Logo;
