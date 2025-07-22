import React from 'react';
import Image from 'next/image';

function Logo() {
    return (
        <section className='container mx-auto px-4 py-8 md:py-16'>
            <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20'>
                <div className='flex-shrink-0 w-40 md:w-48 lg:w-52'>
                    <Image
                        src="/images/James-logo.png"
                        width={184}
                        height={142}
                        alt="James Hardie logo"
                        className='w-full h-auto object-contain'
                    />
                </div>
                <div className='flex-shrink-0 w-40 md:w-48 lg:w-52'>
                    <Image
                        src="/images/wootone-logo.png"
                        width={184}
                        height={142}
                        alt="Woodtone logo"
                        className='w-full h-auto object-contain'
                    />
                </div>
                <div className='flex-shrink-0 w-40 md:w-48 lg:w-52'>
                    <Image
                        src="/images/Pella-Platinum-logo.png"
                        width={184}
                        height={142}
                        alt="Pella Platinum logo"
                        className='w-full h-auto object-contain'
                    />
                </div>
            </div>
        </section>
    );
}

export default Logo;