"use client";

import React from "react";
// import image from "./image/istockphoto-652750800-612x612.jpg";

const Footer = () => {
  return (
    <div className="bg-[#f7f7f7] py-16 px-20">
      <div>
        <p className="text-xl font-semibold">
          Have questions or want to connect? Reach out to us at
          info@wakefultravel.com.
        </p>
        <p className="text-lg font-semibold">2024 © Wakeful Travel.</p>
      </div>
      <div className="flex justify-around pt-12">
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
