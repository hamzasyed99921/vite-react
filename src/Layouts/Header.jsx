import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="  py-4">
        <div className="container   bg-[#fff]  mx-auto flex justify-between items-center">
          <Link to="/">
            <img src="assets/images/logo.svg" alt="" />
          </Link>
          <div className="hidden md:flex flex-wrap items-center justify-center md:justify-end space-x-6 ">
            <Link
              to="/about"
              className="text-[#eb4747] cursor-pointer hover:text-[#eb4747]  font-medium font-instrument  text-lg no-underline uppercase"
            >
              About
            </Link>
            <Link
              to="/floaties"
              className="text-[#eb4747] cursor-pointer hover:text-[#eb4747] font-instrument  font-medium  text-lg no-underline uppercase"
            >
             Buy Floaties
            </Link>
          
            <Link
              to="#"
              className="text-[#eb4747] cursor-pointer hover:text-[#eb4747] font-instrument  font-medium text-lg no-underline uppercase"
            >
              <div className="flex space-x-2">
              liquidity mining 
              <img src="https://ham.fun/arrow-out-red.svg" className="mx-1" alt="" />
              </div>
            </Link>
            <Link
              to="/dashboard"
              className="text-[#eb4747] cursor-pointer hover:text-[#eb4747] font-instrument  font-medium text-lg no-underline uppercase"
            >
              dashboard
            </Link>
            <button className="text-[#eb4747] rounded-full border-[#eb4747]  border-[2px] px-3 py-3 cursor-pointer hover:text-[#eb4747] font-instrument  font-medium text-lg no-underline uppercase">
              connect wallet
            </button>
          </div>
          <div className="md:hidden ">
            {/* Mobile menu button (Hamburger icon) */}
            <button className="text-[#eb4747]" onClick={toggleMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col text-center space-y-2 py-3 rounded-md bg-white">
              <div className="flex justify-end mx-2 my-1"><IoIosClose size={36} color="gray" className="cursor-pointer" onClick={toggleMenu} /></div>
              <Link
                to="about"
                className="text-[#eb4747] hover:text-[#eb4747] font-instrument font-medium no-underline uppercase"
              >
                About
              </Link>
              <Link
                to="/floaties"
                className="text-[#eb4747] hover:text-[#eb4747] font-instrument font-medium no-underline uppercase"
              >
                Buy Floaties
              </Link>
              <Link
                to="#"
                className="text-[#eb4747] hover:text-[#eb4747] font-instrument font-medium no-underline uppercase"
              >
                airdrops
              </Link>
              <Link
                to="#"
                className="text-[#eb4747] hover:text-[#eb4747] font-instrument font-medium no-underline uppercase"
              >
                 liquidity mining 
              </Link>
              <Link
                to="/dashboard"
                className="text-[#eb4747] hover:text-[#eb4747] font-instrument font-medium no-underline uppercase"
              >
                dashboard
              </Link>
              <button className="text-[#eb4747] mx-12 rounded-full border-[#eb4747]  border-[2px] px-3 py-3 cursor-pointer hover:text-[#eb4747] font-instrument  font-medium text-lg no-underline uppercase">
              connect wallet
            </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;