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
              title="Kaunsa Music"
              link="https://github.com/uniyall/kaunsa-music"
              img_num={1}
            >
              A UI-focused web application that suggests music based on user
              input. The project emphasizes multiple API integrations, including
              Spotify, Genius, and OpenAI APIs.
            </ProjectCard>
          </div>
          <div className="h-[668px] sm:h-[340px]">
            <ProjectCard
              borderColor="border-pt-border--brown"
              title="PayKaro"
              link="https://github.com/uniyall/payment-app"
              img_num={2}
            >
              A full-stack payment application with a React frontend and Node.js
              backend. The server is hosted in an auto-scaling EC2 instance
              group within an AWS VPC, and it is exposed to the internet through
              an Application Load Balancer.
            </ProjectCard>
          </div>
          <div className="h-[668px] sm:h-[340px]">
            <ProjectCard
              borderColor="border-pt-border--blue"
              title="Smritify"
              link="https://www.npmjs.com/package/smritify"
              img_num={3}
            >
              Smritify is a CLI tool designed for taking and managing notes
              efficiently. It provides a simple yet effective way to create,
              view, search, and delete notes right from the terminal. Made using
              Node.js.
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
