import React from "react";
import ThemeModeToggle from "./ThemeModeToggle";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex sm:flex-row flex-col gap-4 justify-center items-center sm:justify-between sm:px-16 my-8">
      <h1 className="font-fancyHeading text-[72px] sm:text-left text-center text-slate-400">
        Prateek Uniyal
      </h1>
      <div className="flex gap-[24px] justify-center items-center">
        <ThemeModeToggle />
        <Link href="#about-section">
          <h1 className="text-h6-putech text-lightMode-brown dark:text-darkMode-brown">
            About
          </h1>
        </Link>
        <Link href="#projects-section">
          <h1 className="text-h6-putech text-lightMode-orange dark:text-darkMode-orange">
            Projects
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
