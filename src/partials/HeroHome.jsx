import React, { useState, useContext } from "react";
import BlackApe from "../images/141.png";
import { TransactionContext } from "../context/TransactionContext";
import { SiTwitter } from "react-icons/si";
import redListAddresses from "../web3utils/whitelist";
import Icon from "../images/icon.png";

function HeroHome() {
  const {
    handleIncrementClick,
    handleDecrementClick,
    handleInputChange,
    publicTransaction,
    freeMintTransaction,
    amount,
    walletQuanity,
    isOgMintActive,
    isPublicMintActive,
    handleFreeIncrementClick,
    handleFreeDecrementClick,
    address,
    transaction,
    connected,
    redList,
    freeAmount,
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
                href="https://twitter.com/0xSocialClub"
                className="text-4xl"
                target="_blank"
              >
                <SiTwitter
                  className="cursor-pointer lg:ml-52 mt-5 ml-[43%] md:ml-1 text-yellow-500 hover:text-yellow-400"
                  alt="0x Azuki Apes Twitter"
                />
              </a>

              <div
                className="lg:mt-4 lg:pl-[160px]"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                {isOgMintActive ? (
                  <div className=" max-w-sm mx-auto sm:max-w-md lg:-mx-24 md:mx-0">
                    <p className="text-xs uppercase font-bold text-yellow-500 mt-5 lg:pl-[44px] md:mb-5 ">
                      MAX 2 Free Mints Per Whitelisted Wallet
                    </p>
                    <div className="flex justify-center mt-4 md:pr-[110px]">
                      <button
                        onClick={handleFreeDecrementClick}
                        className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 mr-4 h-14 w-10 md:text-xs "
                      >
                        -
                      </button>

                      <button
                        className="btn text-black font-bold bg-yellow-400 hover:bg-yellow-300 shrink-0 uppercase h-14 w-[135px] md:w-[235px] md:mt-0 text-xs md:text-sm"
                        onClick={freeMintTransaction}
                      >
                        {freeAmount} Free 0xRed Mint
                      </button>

                      <button
                        onClick={handleFreeIncrementClick}
                        className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 ml-4 text-xs 
                    h-14 w-10"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {isPublicMintActive ? (
                  <div className=" max-w-sm mx-auto sm:max-w-md lg:-mx-24 md:mx-0 lg:pl-4 ">
                    {/* <p className="text-xs uppercase font-bold text-yellow-500 mt-5 lg:pl-[84px] md:mb-5">
                      Mint up to 10 at a time
                    </p>
                    <div className="flex justify-center mt-4 md:pr-[110px]">
                      <button
                        onClick={handleDecrementClick}
                        className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 mr-4 h-14 w-10 md:text-xs "
                      >
                        -
                      </button> */}
                      {/* <button
                        className="btn-sm text-black font-bold bg-yellow-400 hover:bg-yellow-300 shrink-0 uppercase h-14 w-[120px] md:w-[235px] md:mt-0 md:text-sm text-[10px]"
                        onClick={publicTransaction}
                      >
                        Mint {amount} 0xRed @ {amount * 0.02} ETH
                      </button> */}
                      {/* <button
                        onClick={handleIncrementClick}
                        className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 ml-4 text-xs 
                        h-14 w-10"
                      >
                        +
                      </button> */}
                    {/* </div> */}
                  </div>
                ) : (
                  ""
                )}
              </div>
              {!connected ? (
                <p className="text-lg uppercase font-bold text-yellow-500 mt-5 lg:pl-[50px] text-xs md:mb-5">
                  Please Connect Your Wallet To The Ethereum Network
                </p>
              ) : (
                ""
              )}
              {connected &&
              typeof redList[address.toUpperCase()] == "undefined" &&
              isOgMintActive ? (
                <p className="text-lg uppercase font-bold text-yellow-500 mt-5 lg:pl-[110px] text-xs md:mb-5">
                  SORRY YOU ARE NOT ON THE 0XRED LIST. <br /> PLEASE COME BACK
                  DURING PUBLIC MINT.
                </p>
              ) : (
                ""
              )}
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
