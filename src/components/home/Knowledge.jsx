import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Knowledge({data}) {

  return (
    <section className='bg-[#fffae3]'>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-[#EF4F36] mb-4">Knowledge & Education Center</h1>
      <p className="text-2xl text-black font-[600] mb-12">
        Make the best decision and get the most value for your remodeling dollar by reading our blog and becoming an educated buyer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {data?.map((card, index) => (
          <div 
            key={index}
            className="rounded-lg overflow-hidden  "
          >
            {/* Image Section */}
            <div className="h-52 overflow-hidden">
              <img 
                src={urlFor(card.coverImage.asset).url()} 
                alt={card.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="py-6">
              <p className="text-xl font-semibold text-[#EF4F36] mb-3">{card.title}</p>
              <p className="text-black font-[300] mb-4">{card.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link 
          href='/' 
          className="bg-[#EF4F36] hover:scale-105 transition-all duration-150 text-white text-lg gap-2 font-bold py-4 px-8 rounded-lg inline-flex items-center"
        >
             Schedule Consultation 
             <FaLongArrowAltRight size={18} />
        </Link>
      </div>
    </div>
    </section>
  );
}

export default Knowledge;