import React, { useState, useContext } from "react";
import BlackApe from "../images/1278.jpg";
import { TransactionContext } from "../context/TransactionContext";
import { SiTwitter } from "react-icons/si";
import Opensea from "../images/opensea-icon.png";
import { ethers } from "ethers";

function HeroHome() {
  const {
    handleIncrementClick,
    handleDecrementClick,
    handleInputChange,
    publicTransaction,
    freeMintTransaction,
    amount,
    walletQuanity,
    freeMintActive,
  } = useContext(TransactionContext);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h1 md:text-4xl text-3xl mb-4 text-yellow-400 font-extrabold uppercase"
                data-aos="fade-down"
              >
                Welcome to the
              </h1>
              <h1
                className="h1 md:text-4xl text-3xl mb-4 text-yellow-400 font-extrabold lg:pl-[40px]"
                data-aos="fade-down"
              >
                0xSOCIAL CLUB
              </h1>
              <p
                className="md:text-lg text-xs text-white font-bold lg:pl-[90px]"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Your NFT is your membership pass
              </p>
              <p className="text-xs lg:pl-14">
                {" "}
                WE ARE NOT AFFILIATED WITH AZUKI OR AZUKI APE SOCIAL CLUB
              </p>
              <a
                href="https://twitter.com/0xAASC"
                className="text-4xl"
                target="_blank"
              >
                <SiTwitter
                  className="cursor-pointer lg:ml-52 mt-5 ml-[43%] md:ml-1 text-yellow-500 hover:text-yellow-400"
                  alt="0x Azuki Apes Twitter"
                />
              </a>
              {/* <a href="https://opensea.io/collection/0xazukiapes" target="_blank">
                  <img
                    className="w-[90px] h-[90px] mt-5 lg:ml-8 ml-[180%] hover:text-yellow-400 cursor-pointer"
                    src={Opensea}
                    alt="0x Azuki Apes Opensea"
                  /> */}
              {/* </a> */}
              <div
                className="lg:mt-4 lg:pl-[160px]"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <div className="md:pr-40">
                  {/* <input
                    type="number"
                    min="1"
                    max="25"
                    name="amount"
                    value={amount}
                    onChange={handleInputChange}
                    className="w-14 h-14 text-black rounded-md active:border-yellow-500
                  hover:border-yellow-500 border-2 border-yellow-400 out-of-range:border-red-500 autofill:bg-yellow-200"
                  /> */}
                  {/* <div className="text-2xl text-white pl-16">
                  {amount}
                  </div> */}
                </div>
                <p className="text-xs uppercase font-bold text-yellow-500 mt-5 lg:pl-[4px] md:mb-5">
                  Mint up to 25 at a time
                </p>

                <div className=" max-w-sm mx-auto sm:max-w-md lg:-mx-24 md:mx-0">
                  <button
                    onClick={handleDecrementClick}
                    className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 mr-4 h-14 w-10"
                  >
                    -
                  </button>
                  <button
                    className="btn text-black font-bold bg-yellow-400 hover:bg-yellow-300 shrink-0 uppercase h-14 md:w-[235px] w-[50%] mt-5 md:mt-0"
                    onClick={publicTransaction}
                  >
                    Mint {amount}
                  </button>
                  <button
                    onClick={handleIncrementClick}
                    className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 ml-4 
                    h-14 w-10"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile mockup */}
            <div
              className="md:col-span-5 lg:col-span-5 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <svg
                  className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40"
                  aria-hidden="true"
                  width="678"
                  height="634"
                  viewBox="0 0 678 634"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="240"
                    cy="394"
                    r="240"
                    fill="url(#piphoneill_paint0_radial)"
                    fillOpacity=".4"
                  />
                  <circle
                    cx="438"
                    cy="240"
                    r="240"
                    fill="url(#piphoneill_paint1_radial)"
                    fillOpacity=".6"
                  />
                  <defs>
                    <radialGradient
                      id="piphoneill_paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 -77 317) scale(189.054)"
                    >
                      <stop stopColor="#667EEA" />
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient
                      id="piphoneill_paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(90 99 339) scale(189.054)"
                    >
                      <stop stopColor="#9F7AEA" />
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                <img
                  className="absolute rounded-md"
                  src={BlackApe}
                  width="290"
                  height="624"
                  style={{ maxWidth: "84.33%" }}
                  alt="0xAzukiApe"
                />
                {/* iPhone mockup */}
                <img
                  className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none rounded-md"
                  src={BlackApe}
                  width="344"
                  height="674"
                  alt="0xAzukiApe"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
