import React from 'react';
import Image from 'next/image'; 


const PROFILE_IMAGE_PATH = "/images/me2.jpg"; 

export default function Hero() {

  const ctaClasses = "px-8 py-3 text-lg font-bold rounded-lg transition duration-300 transform hover:scale-[1.02] shadow-md";

  return (
    <section className="container mx-auto max-w-6xl px-8 pt-24 py-16">
      
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-16">
        
        <div className="mb-10 md:mb-0"> 
          <div 
            className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 mx-auto md:mx-0 relative" 
            style={{ borderColor: 'var(--neon-blue)' }}
          >
            <Image 
              src={PROFILE_IMAGE_PATH} 
              alt="Josh's professional headshot" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-full" 
            />
          </div>
        </div>

        <div className="text-center md:text-left max-w-xl">
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-4">
            HI, I&apos;M <span className="gradient-text">JOSH</span>.
          </h1>
          <h2 className="text-xl md:text-3xl text-white/90 mb-12">
            I build beautiful digital experiences.
          </h2>

          <div className="flex flex-col sm:flex-row md:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-6">         
           
            <a 
              href="/documents/Joshua-Allan-CV_2026.pdf" 
              download 
              className={`${ctaClasses} border-2`}
              style={{ borderColor: 'var(--neon-blue)', color: 'var(--neon-blue)' }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}