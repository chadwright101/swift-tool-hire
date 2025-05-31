"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { X, AlignJustify } from "lucide-react";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function MobileHeader({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative px-7 pt-3.5 pb-[15px] desktop:hidden">
      <div
        className={classNames(
          "flex w-full items-center justify-between ease-in-out duration-300",
          {
            "translate-y-3 phone:translate-y-[18px] min-[540px]:translate-y-6 tablet:translate-y-[42px] min-[1000px]:translate-y-[50px]":
              isScrolled,
          }
        )}
      >
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/logo/swift-tool-hire-logo.png"
            alt="Swift Tool Hire"
            width={60}
            height={64}
            priority
            className={classNames("h-16 w-auto ease-in-out duration-300", {
              "scale-80 -translate-y-2": isScrolled,
            })}
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className={classNames("ease-in-out duration-300 -m-3 p-3", {
            "-translate-y-1.5": isScrolled,
            "translate-y-1 ": !isScrolled,
          })}
          aria-label="Open menu"
        >
          <AlignJustify
            color="#231f20"
            className="h-12 w-12 p-2"
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-white transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex py-5 items-center justify-end px-7">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className={classNames({
              "mt-0.5": isScrolled,
              "mt-1.5": !isScrolled,
            })}
          >
            <X color="#231f20" className="h-12 w-12 p-2" strokeWidth={2} />
          </button>
        </div>
        <nav className="px-7">
          <ul className="grid gap-5">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] text-white font-normal p-3 -m-3"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
