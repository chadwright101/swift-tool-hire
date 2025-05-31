import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";
import { HeaderProps } from "@/_types/general-types";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div className="hidden h-[88px] pb-4 px-[52px] desktop:grid ease-in-out duration-300 overflow-hidden desktop:duration-300">
      <Link
        href="/"
        className={classNames(
          "fixed w-[150px] h-[138px] grid place-items-center rounded-full bg-white/90 hover:opacity-90 ease-in-out duration-300 delay-100",
          {
            "scale-40 -top-7.5 -ml-[52px]": isScrolled,
            "top-4": !isScrolled,
          }
        )}
      >
        <Image
          src="/logo/swift-tool-hire-logo.png"
          alt="Swift Tool Hire"
          width={110}
          height={118}
          priority
          className="ease-in-out duration-300 h-[118px] w-auto"
        />
      </Link>
      <nav
        className={classNames("ease-in-out duration-300 place-self-end", {
          "translate-y-1.5": isScrolled,
        })}
      >
        <ul className="flex gap-2.5 items-center">
          {navData.map(({ title, url }, id) => {
            return (
              <li key={id}>
                <Link
                  href={url}
                  className="text-paragraph hover:text-dark-green ease-in-out duration-300"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
