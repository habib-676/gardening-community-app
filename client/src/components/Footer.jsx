import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-20">
      <aside>
        <img src={logo} className="w-20 rounded-full" />
        <p>
          GreenCircle
          <br />A Gardening Community & Resource Hub
        </p>
      </aside>
      <nav className="space-y-5">
        <div>
          <h6 className="footer-title">Contact Info</h6>
          <div className="grid grid-flow-row gap-4">
            <p>📍 Address: 123 Garden Lane, Green City, Earth</p>
            <p>📞 Phone: +1 (234) 567-890</p>
          </div>
        </div>

        <div>
          <h6 className="footer-title">Terms and conditions</h6>
          <div className="grid grid-flow-row gap-4">
            <p>
              By registering or using our platform, you agree to follow these
              terms.
            </p>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/" target="#">
              <SiFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/" target="#">
              <RiInstagramFill size={30} />
            </a>
            <a href="https://twitter.com/" target="#">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
