import React from "react";
import NextArrow from "./ui/NextArrow";

function ProjectCard({
  borderColor,
  children,
  title,
}: {
  borderColor: string;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row w-full h-full border-[6px] ${borderColor}`}
    >
      <div
        className={`sm:h-full basis-[50%] bg-[#F6F6F6] dark:bg-[#7B7B7B]`}
      ></div>
      <div className="flex flex-col gap-8 p-[20px] basis-[50%]">
        <div className="text-h6-putech">{title}</div>
        <div className="text-para-m-putech">{children}</div>
        <div className="flex gap-2 items-center">
          <div className="text-para-m-putech">Read More</div>
          <div>
            {" "}
            <NextArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
