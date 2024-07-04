import * as React from "react";
import { SVGProps } from "react";
const LightIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
    className="hover:cursor-pointer"
  >
    <circle cx={15.755} cy={15.755} r={15.755} fill="#fff" />
    <g clipPath="url(#a)">
      <path
        stroke="#000002"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.537}
        d="M16.14 4.803v1.922m0 17.292v1.921M8.664 7.897 10.03 9.26m12.22 12.22 1.363 1.364M5.572 15.37h1.921m17.292 0h1.922M8.665 22.845l1.365-1.364M22.25 9.26l1.363-1.364m-2.67 7.474a4.803 4.803 0 1 1-9.607 0 4.803 4.803 0 0 1 9.607 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M4.611 3.843h23.056v23.056H4.611z" />
      </clipPath>
    </defs>
  </svg>
);
export default LightIconSvg;
