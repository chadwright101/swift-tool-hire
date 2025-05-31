"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import useScrollPosition from "@/_lib/hooks/scroll-position";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <header
      className={classNames(
        "sticky left-0 max-w-[1280px] mx-auto border-b-8 bg-white z-50 ease-in-out duration-500 overflow-y-hidden desktop:duration-500",
        {
          "-top-3 phone:-top-[18px] min-[540px]:-top-6 tablet:-top-[40px] min-[1000px]:-top-[48px] desktop:-top-[68px] border-blue":
            isScrolled,
          "border-white top-0": !isScrolled,
        }
      )}
    >
      <div className="max-w-[1280px] mx-auto relative">
        <MobileHeader isScrolled={isScrolled} />
        <DesktopHeader isScrolled={isScrolled} />
      </div>
    </header>
  );
}
