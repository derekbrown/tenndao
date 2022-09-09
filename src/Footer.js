import React, { useMemo } from "react";
import { LOGO_IMAGE_URL } from "./Constants";

function Footer() {
  useMemo(() => {
    console.log("Yeah. We built our own career page on top of Lever. It's written in React. It's not perfect. Nothing fancy. But you should see the other stuff we're working on. If you're the kind of person to check out console logs on a Careers site...we should chat!")
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center pb-8">
      <a className="" target="_blank" href="https://www.bunches.xyz/">
        <img src={LOGO_IMAGE_URL} alt="Bunches Logo" className="h-20 w-20 animate-spin-slow"/>
      </a>
    </div>
  );
}

export default Footer;
