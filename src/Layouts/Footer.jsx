import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-20 py-24 text-[#eb4747] bg-white">
          <div className="container">
            <div className="flex lg:justify-between justify-center flex-wrap items-center">
            <div>
              <Link to='/'>
                <img src="assets/images/footer-logo.png" alt="" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center lg:space-x-12 ">
              <div>
                <ul>
                  <li><Link to="/about" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">ABOUT HAM</Link></li>
                  <li><Link to="#" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">AIRDROPS</Link></li>
                  <li><Link to="#" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">LIQUIDITY MINING</Link></li>
                  <li><Link to="/dashboard" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">DASHBOARD</Link></li>
                  <li><Link to="#" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">DEVELOPERS</Link></li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center">
                <ul>
                  <li><Link to="#" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">$TN100X</Link></li>
                  <li><Link to="#" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">THE BASED LP</Link></li>
                  <li><Link to="#" className="no-underline text-[#eb4747] font-instrument font-normal hover:text-[#eb4747]">FLOATIES</Link></li>
                </ul>
              </div>
              <div className="flex space-x-3 items-center justify-center flex-grow">
                <Link to='#'><FaTelegram color="#eb4747" size={28} /></Link>
                <Link to='#'><FaTwitter color="#eb4747" size={28} /></Link>
                <Link to='#'> <img src="assets/images/w.svg" className="w-7" alt="" /></Link>
              </div>
            </div>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
