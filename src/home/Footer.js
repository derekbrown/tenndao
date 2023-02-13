import React from "react";
import { LOGO_IMAGE_URL } from "../Constants";

function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center pb-8">
      <a className="" rel="noreferrer" target="_blank" href="https://www.tenndao.com/">
        <img src={LOGO_IMAGE_URL} alt="TennDAO Logo" className="h-20 w-20 animate-spin-slow hover:animate-reverse-spin-slow"/>
      </a>
    </div>
  );
}

export default Footer;
