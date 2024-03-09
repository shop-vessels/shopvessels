"use client";

import React from "react";
// import image from "./image/istockphoto-652750800-612x612.jpg";

const Footer = () => {
  return (
    <div className="bg-[#f7f7f7] py-16 md:px-20 px-6 mt-5 lg:mt-10">
      <div>
        <p className="text-xl font-normal md:text-start text-center">
          Have questions or want to connect? Reach out to us at
          <span>info@wakefultravel.com.</span>
        </p>
        <p className="text-base md:text-lg font-normal text-center">
          2024 © Wakeful Travel.
        </p>
      </div>
      <div className="flex md:justify-around justify-center items-center md:flex-row flex-col pt-12">
        <select name="currency" id="" className="bg-[#f7f7f7] outline-none">
          <option value="india">CD $</option>
          <option value="pakistan">CD $</option>
          <option value="america">CD $</option>
        </select>
        <p className="text-lg font-semibold">Powered by Shopify</p>
      </div>
    </div>
  );
};

export default Footer;
