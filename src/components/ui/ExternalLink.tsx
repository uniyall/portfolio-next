import * as React from "react";
import { SVGProps } from "react";

const ExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-current text-[#5B5959] dark:text-[#E8E8E8]"
    {...props}
  >
    <path
      d="M13.5 9.33333V14.3333C13.5 14.7754 13.3244 15.1993 13.0118 15.5118C12.6993 15.8244 12.2754 16 11.8333 16H2.66667C2.22464 16 1.80072 15.8244 1.48816 15.5118C1.17559 15.1993 1 14.7754 1 14.3333V5.16667C1 4.72464 1.17559 4.30072 1.48816 3.98816C1.80072 3.67559 2.22464 3.5 2.66667 3.5H7.66667M11 1H16M16 1V6M16 1L6.83333 10.1667"
      // stroke="#5B5959"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ExternalLink;
