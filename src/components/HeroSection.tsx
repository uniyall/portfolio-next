import React from "react";
import Image from "next/image";
import Link from "next/link";
function HeroSection() {
  return (
    <div
      id="about-section"
      className="grid sm:grid-cols-[60%_40%] grid-rows-[1fr] sm:grid-rows-0"
    >
      <div className="flex flex-col sm:gap-8 gap-4 my-8">
        <h1 className="sm:text-h3-putech text-h5-putech text-center">
          Hi, I am Prateek, a developer based in India.{" "}
        </h1>
        <p className="text-justify sm:text-para-l-putech text-para-m-putech sm:font-thin">
          {`I love building tools and experiences that are user-friendly, simple
          yet impactful. `}
        </p>
        <p className="text-justify sm:text-para-l-putech sm:font-thin text-para-m-putech">
          {`I am an Engineering graduate from SRM University, where
          I majored in Artificial Intelligence. I also worked at multiple
          non-profits and an NBFC as a full-stack developer intern. `}
        </p>
        <p className="text-justify text-para-m-putech sm:text-para-l-putech sm:font-thin">
          {`Through
          these experiences, I had the opportunity to work with both small and
          large specialized and cross-functional teams and developed a working
          style that leans towards flexibility, clarity and collaboration. `}
        </p>
        <p className="text-justify sm:text-para-l-putech text-para-m-putech sm:font-thin">
          {`I'm currently looking for a new role as a developer.`}{" "}
          <span className="text-lightMode-green dark:text-darkMode-green font-medium">
            Hire me?
          </span>
        </p>
        <div className="flex">
          <Link
            href="https://www.linkedin.com/in/prateekuniyal/"
            target="_blank"
          >
            <button className="p-[12px] bg-black dark:bg-white text-white dark:text-black text-para-l-putech sm:text-h6-putech rounded-[8px] mr-8">
              View Linkedin
            </button>
          </Link>
          <Link href="https://github.com/uniyall" target="_blank">
            <button className="p-[12px] bg-white border border-black dark:border-white dark:bg-black text-black dark:text-white sm:text-h6-putech text-para-l-putech rounded-[8px] ml-8">
              View Github
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[url('/prateek.jpg')] sm:bg-[length:150%] bg-cover bg-center sm:w-3/4 sm:h-full w-[219px] h-[288px] justify-self-center rounded-3xl shadow-xl shadow-[#7575759d] row-start-1 sm:row-start-auto" />
    </div>
  );
}

export default HeroSection;
