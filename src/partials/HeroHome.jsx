import React, { useState } from 'react';
import Modal from '../utils/Modal';

import BlackApe from '../images/1278.jpg';
import IphoneMockup from '../images/iphone-mockup.png';
import PlayBtn from '../images/play-button.svg';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 md:text-5xl text-3xl mb-4 text-yellow-400 font-extrabold" data-aos="fade-down">0xAZUKI APES</h1>
              <p className="md:text-xl text-sm text-white font-bold" data-aos="fade-down" data-aos-delay="150">We are a community of 3,333 Ape and Azuki lovers</p>
             <p className="text-xs md:pl-16"> 0xAZUKI APES IS NOT AFFILIATED WITH AZUKI OR AZUKI APES</p>
              {/* CTA form */}
              <div className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  <a className="btn text-black font-bold bg-yellow-400 hover:bg-yellow-300 shrink-0 uppercase" href="#0">Mint</a>
                </div>
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <svg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4" />
                  <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6" />
                  <defs>
                    <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                      <stop stopColor="#667EEA" />
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                      <stop stopColor="#9F7AEA" />
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img className="absolute rounded-md" src={BlackApe} width="290" height="624" style={{ maxWidth: '84.33%' }} alt="0xAzukiApe" />
                {/* iPhone mockup */}
                <img className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none rounded-md" src={BlackApe} width="344" height="674" alt="0xAzukiApe" aria-hidden="true" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;