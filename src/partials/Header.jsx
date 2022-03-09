import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import Logo from "../images/0xAzukiApes.jpeg";
import {
  useTransactionContext,
  useTransactionUpdate
} from "../context/TransactionContext";

function Header() {
  const connected = useTransactionContext();
  const connectWallet = useTransactionUpdate();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outsidex

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img
                className="w-14 h-14 md:w-16 md:h-16 rounded-md"
                src={Logo}
              ></img>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav>
            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <button
                  onClick={connectWallet}
                  className="btn-sm text-black font-bold uppercase bg-yellow-400 hover:bg-yellow-300 ml-6"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              ></nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
