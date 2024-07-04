"use client";

import React, { useEffect, useState } from "react";
import DarkIconSvg from "./ui/DarkIconSvg";
import LightIconSvg from "./ui/LightIconSvg";
import { useTheme } from "next-themes";

function ThemeModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [ isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if(!isMounted)
    {
        return <div className="bg-slate-100 rounded-full w-[32px] h-[32px] opacity-30"></div>
    }
  if (resolvedTheme === "dark") {
    return <LightIconSvg onClick={() => setTheme("light")}/>;
  } else {
    return <DarkIconSvg onClick={() => setTheme("dark")} />;
  }
}

export default ThemeModeToggle;
