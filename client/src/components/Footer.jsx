import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
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
          <h6 className="footer-title">Go to :</h6>
          <div className="grid grid-flow-col gap-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/explore"}>Explore gardeners</NavLink>
            <NavLink to={"/browse-tips"}>Browse tips</NavLink>
          </div>
        </div>

        <div>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/habib676" target="#">
              <SiFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/ha_bib_676" target="#">
              <RiInstagramFill size={30} />
            </a>
            <a href="https://linkedin.com/in/wdhabib" target="#">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
