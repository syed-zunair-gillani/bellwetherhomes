import React from 'react';

const logos = [
  {
    src: '/images/James-logo.png',
    alt: 'James Hardie logo',
  },
  {
    src: '/images/wootone-logo.png',
    alt: 'Woodtone logo',
  },
  {
    src: '/images/Pella-Platinum-logo.png',
    alt: 'Pella Platinum logo',
  },
];

function Logo() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-shrink-0 max-w-[246px] max-h-[134px] w-full h-[134px] rounded"
          >
            <img
              src={logo.src}
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
