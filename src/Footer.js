import React, { useMemo } from "react";
import logo from "./assets/images/logo.png";

function Footer() {
  const logConsoleMessage = useMemo(() => {
    console.log("Yeah. We built our own career page on top of Lever. It's written in React. It's not perfect. Nothing fancy. But you should see the other stuff we're working on. If you're the kind of person to check out console logs on a Careers site...we should chat!")
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center pb-8">
      <img src={logo} alt="Bunches Logo" className="h-16 w-16 animate-spin-slow"/>
    </div>
  );
}

export default Footer;
