"use client";
import React, { useState } from 'react';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Why does Bellwether stand out in multifamily siding replacement?",
            answer: "Bellwether specializes in high-quality materials and precision installation for multifamily properties, ensuring durability and aesthetic appeal that lasts for decades."
        },
        {
            question: "How does Bellwether ensure the durability of its sidings?",
            answer: "We use premium, weather-resistant materials and industry-leading installation techniques, backed by comprehensive warranties and regular quality inspections."
        },
        {
            question: "Can we customize the siding design with Bellwether?",
            answer: "Absolutely! We offer a wide range of colors, textures, and material options to match your property's architectural style and your personal preferences."
        }
    ];

    return (
        <section className='bg-[#EF4F36] py-14 px-4'>
            <div className="max-w-4xl mx-auto ">
                <h1 className="text-3xl md:text-5xl font-semibold text-white mb-12">Frequently Asked Questions</h1>

                <div className="space-y-6 w-full">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="cursor-pointer transition-all duration-200"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="flex flex-col ">
                                <div className="flex  gap-4 w-full">
                                    <span className="text-2xl font-bold text-white flex-shrink-0">
                                        {activeIndex === index ? '−' : '+'}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
                                        {item.question}
                                    </h3>
                                </div>
                                {activeIndex === index && (
                                    <p className="text-white mt-4 px-4 md:px-8 max-w-2xl mx-auto animate-fadeIn">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;