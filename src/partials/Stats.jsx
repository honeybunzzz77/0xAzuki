import React from "react";
import Opensea from "../images/opensea-icon.png"

function Stats() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
        aria-hidden="true"
      ></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div
            className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-3 text-center"
            data-aos-id-stats
          >
            {/* 1st item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl rounded-md"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">
                250
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                OG COLLECTION (SOLD OUT)
              </div>
              <a
                href="https://opensea.io/collection/0xazukiapes"
                target="_blank"
              >
                <img
                  className="w-[90px] h-[90px] lg:ml-[120px] md:ml-[70px] ml-[38%] mt-5 hover:text-yellow-400 cursor-pointer"
                  src={Opensea}
                  alt="0x Azuki Apes Opensea"
                />
              </a>
            </div>
            {/* 2nd item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl rounded-md"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="100"
            >
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">
                3.3K
              </div>
              <div className="text-gray-600 dark:text-gray-400 uppercase">
                Expanded Collection
              </div>
            </div>
            {/* 3rd item */}
            <div
              className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl rounded-md"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="200"
            >
              <div className="font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1">
                0.01 ETH
              </div>
              <div className="text-gray-600 dark:text-gray-400">MINT PRICE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
