import React from "react";
import NextArrow from "./ui/NextArrow";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({
  borderColor,
  children,
  title,
  link,
  img_num,
}: {
  borderColor: string;
  children: React.ReactNode;
  title: string;
  link: string;
  img_num: number;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row w-full h-full border-[6px] ${borderColor}`}
    >
      <div
        className={`sm:h-full basis-[50%] bg-cover bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url('/${img_num}.png')`,
        }}
      ></div>

      <div className="flex flex-col gap-8 p-[20px] basis-[50%]">
        <div className="text-h6-putech">{title}</div>
        <div className="text-para-m-putech">{children}</div>
        <div className="flex gap-2 items-center">
          <Link href={link} target="_blank">
            <div className="text-para-m-putech hover:underline">See More</div>
          </Link>
          <div>
            <NextArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
