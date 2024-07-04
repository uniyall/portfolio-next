import * as React from "react";
import { SVGProps } from "react";
const DarkIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    {...props}
    className="hover:cursor-pointer"
  >
    <circle
      cx={15.756}
      cy={15.756}
      r={15.756}
      fill="#D9D9D9"
      fillOpacity={0.5}
    />
    <path
      fill="#D9D9D9"
      fillOpacity={0.5}
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24.367 16.01a8.359 8.359 0 1 1-9.092-9.093 6.501 6.501 0 0 0 9.092 9.092Z"
    />
  </svg>
);
export default DarkIconSvg;
