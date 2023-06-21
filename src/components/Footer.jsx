import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <div className="flex justify-center">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center sm:items-end sm:pr-20">
          <a href="#" className="hover:underline">
            Styles
          </a>
          <a href="#" className="hover:underline">
            Design
          </a>
          <a href="#" className="hover:underline">
            ReactFiber
          </a>
          <a href="#" className="hover:underline">
            Assignment
          </a>
        </div>
        <div className="flex flex-col items-center sm:items-end sm:pr-7">
          <a href="#" className="hover:underline">
            244-5333-7783
          </a>
          <a href="#" className="hover:underline">
            hello@us.com
          </a>
          <a href="#" className="hover:underline">
            press@us.com
          </a>
          <a href="#" className="hover:underline">
            contact@us.com
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span className="link hover:underline cursor-pointer">
          © 2023 Appy. All rights reserved.
        </span>
        <span className="pl-20 link hover:underline cursor-pointer">
          Terms · Privacy Policy
        </span>
        <div className="flex justify-center sm:justify-end sm:pr-5">
          <SiLinkedin className="mr-4 cursor-pointer hover:bg-blue-500" />
          <BsYoutube className="mr-4 cursor-pointer hover:bg-red-500" />
          <FaFacebookF className="mr-4 cursor-pointer hover:bg-blue-500" />
          <BsTwitter className="mr-4 cursor-pointer hover:bg-blue-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
