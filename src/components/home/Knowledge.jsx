import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Knowledge() {
  const cards = [
    {
      heading: "Window Replacement Costs: 5 Key Factors That Can Impact Your Budget",
      content: "Budget planning is often one of the toughest parts of a window replacement project. Several factors can significantly influence your budget, from the materials you...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Window replacement cost analysis"
    },
    {
      heading: "Comparing Window Materials: Vinyl, Composite, Fiberglass, and Wood-Clad",
      content: "The materials used in your window have a direct impact on energy efficiency, durability, and long-term maintenance. Vinyl, composite, fiberglass, and wood-clad windows each offer...",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Different window materials comparison"
    },
    {
      heading: "When to Replace Your Windows: 7 Key Signs You Shouldn't Ignore",
      content: "Window problems aren't always obvious, which can make it difficult to know when to replace your windows. Signs like drafts, fogged glass, or warped frames...",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      alt: "Signs you need window replacement"
    }
  ];

  return (
    <section className='bg-[#fffae3]'>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-[#EF4F36] mb-4">Knowledge & Education Center</h1>
      <p className="text-2xl text-black font-[600] mb-12">
        Make the best decision and get the most value for your remodeling dollar by reading our blog and becoming an educated buyer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="rounded-lg overflow-hidden  "
          >
            {/* Image Section */}
            <div className="h-48 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="py-6">
              <p className="text-xl font-semibold text-[#EF4F36] mb-3">{card.heading}</p>
              <p className="text-black font-[300] mb-4">{card.content}</p>
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