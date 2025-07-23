"use client";
import Image from 'next/image';
import React, { useState } from 'react';

function Faq({data}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <section className='bg-[#EF4F36] relative py-20 px-4'>
            <Image src="/faq.bg.svg" alt="bg" className="absolute left-0 top-0" width={150} height={200}/>
            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#fffae3] mb-12">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-3 w-full">
                    {data?.map((item, index) => (
                        <div
                            key={index}
                            className="cursor-pointer transition-all duration-200"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="flex flex-col">
                                <div className="flex gap-4 w-full">
                                    <span className="text-2xl font-bold text-white flex-shrink-0">
                                        {activeIndex === index ? '−' : '+'}
                                    </span>
                                    <h3 className="md:text-xl font-semibold text-white text-center">
                                        {item.question}
                                    </h3>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        activeIndex === index ? 'max-h-40 opacity-100 mt-4 px-4 md:px-8' : 'max-h-0 mt-4 px-4 md:px-8'
                                    }`}
                                >
                                    <p className="text-white">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;