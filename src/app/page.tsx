import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import Footer from "@/components/Footer";
import ExternalLink from "@/components/ui/ExternalLink";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-[35px] sm:mx-[70px] dark:text-white">
        <Navbar />
        <HeroSection />
        <div
          id="projects-section"
          className="flex flex-col gap-8 sm:w-2/3 sm:mx-auto my-8"
        >
          <h1 className="text-h5-putech underline underline-offset-4 decoration-[#CF4B2E] dark:decoration-[#FFB8A8] ">
            Selected Works
          </h1>
          <div className="h-[668px] sm:h-[340px]">
            <ProjectCard
              borderColor="border-pt-border--green"
              title="Project 1"
            >
              Project description - My project is the greatest investion ever in
              this whole wide world and I am so proud that I made this happen
            </ProjectCard>
          </div>
          <div className="h-[668px] sm:h-[340px]">
            <ProjectCard
              borderColor="border-pt-border--brown"
              title="Project 2"
            >
              Project description - My project is the greatest investion ever in
              this whole wide world and I am so proud that I made this happen
            </ProjectCard>
          </div>
          <div className="h-[668px] sm:h-[340px]">
            <ProjectCard borderColor="border-pt-border--blue" title="Project 3">
              Project description - My project is the greatest investion ever in
              this whole wide world and I am so proud that I made this happen
            </ProjectCard>
          </div>
          <Link href="https://github.com/uniyall" target="_blank">
            <div className="flex gap-1 hover:underline">
              <h1 className="sm:text-h6-putech dark:text-[#E8E8E8] text-[#5B5959] text-para-l-putech text-center sm:text-left">
                See more of my work on github
              </h1>
              <ExternalLink mode="" />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
