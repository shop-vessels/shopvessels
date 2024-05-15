"use client";
import { Youtube, Twitter, Instagram, Music2 } from "lucide-react";
import footerDta from "../../data/footer.json";
import Logo from "../../../public/images/about/HummingPuppy.png";

import Link from "next/link";
import React from "react";
import Image from "next/image";
// import image from "./image/istockphoto-652750800-612x612.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7]  ">
      <div className="py-16 md:px-20 px-6 mt-5 lg:mt-10 h-max flex md:flex-row flex-col justify-between max-w-7xl mx-auto">
        {/* <div className="flex gap-7 justify-center items-center text-foreground/60">
        <Link href="https://www.tiktok.com/@QPP_academy">
          <Music2 className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
        </Link>
        <Link href="https://www.youtube.com/channel/UC45p42NFc5qB9ZUmr2ZJewg">
          <Youtube className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
        </Link>
        <Link href="https://twitter.com/@QPPacademy">
          <Twitter className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
        </Link>
        <Link href="https://www.instagram.com/qppacademy">
          <Instagram className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
        </Link>
      </div>
      <div className="mt-10">
        <ul className="flex justify-center items-center text-foreground/60">
          <li className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:text-center text-foreground/40 gap-4">
            {footerDta.map((link, index) => (
              <FooterLink title={link.title} path={link.path} key={index} />
            ))}
          </li>
        </ul>
      </div>

      <div className="mt-10 text-center text-foreground/60">
        <p className="text-base font-light">
          <span className="font-medium">
            Have questions or want to connect?
          </span>
          <br /> Reach out to us at{" "}
          <a
            href="mailto:qppacademy@gmail.com"
            className="hover:text-primary text-lg font-bold transition-colors"
          >
            info@shopvessels.com
          </a>
        </p>
        <p className="text-sm md:text-base font-normal text-center mt-3">
          Copyright © 2024, Vessels.
        </p>
      </div> */}

        <div>
          <Link href="/">
            <Image
              src={Logo}
              width={150}
              height={150}
              className="md:m-0 m-auto"
              alt=""
            />
          </Link>
          <ul className="flex md:justify-start justify-center  text-foreground/80 mt-10">
            <li className="flex flex-wrap lg:text-center text-foreground/80 gap-4 text-sm">
              {footerDta.map((link, index) => (
                <FooterLink title={link.title} path={link.path} key={index} />
              ))}
            </li>
          </ul>
        </div>
        <div className="mt-12 text-muted-foreground">
          <div className="flex md:justify-start justify-center gap-3 ">
            <Link href="https://www.tiktok.com/@QPP_academy">
              <Music2 className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
            </Link>
            <Link href="https://www.youtube.com/channel/UC45p42NFc5qB9ZUmr2ZJewg">
              <Youtube className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
            </Link>
            <Link href="https://twitter.com/@QPPacademy">
              <Twitter className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
            </Link>
            <Link href="https://www.instagram.com/qppacademy">
              <Instagram className="hover:scale-110 transition-all duration-400 w-7 h-7 hover:text-foreground " />
            </Link>
          </div>
          <p className="mt-10 md:text-start text-center">
            © 2024 Vessels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ title, path }) => {
  return (
    <div className=" hover:text-primary  transition-all duration-400">
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default Footer;
