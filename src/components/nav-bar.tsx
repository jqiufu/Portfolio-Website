"use client";

import useMediaQuery from "@/hooks/use-media-query";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRef, useState } from "react";
import MenuOverlay from "./menu-overlay";
import NavLink from "./nav-link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const isAtLeastMediumDevice = useMediaQuery("(min-width: 768px)");
  const isNavMenuOpenAndIsSmallerThanMediumDevice =
    isNavMenuOpen && !isAtLeastMediumDevice;

  useOnClickOutside(navRef, () => setIsNavMenuOpen(false));

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-10 border-b border-border"
    >
      <div className="bg-background bg-opacity-[.99]">
        <div className="mx-auto flex flex-wrap items-center justify-between px-8 py-2">
          <Link href="/" className="text-3xl font-semibold">
            JQ
          </Link>

          <div className="flex gap-1 md:hidden">
            <ThemeToggle />
            {isNavMenuOpen ? (
              <Button
                onClick={() => setIsNavMenuOpen(false)}
                variant="outline"
                size="icon"
              >
                <XMarkIcon className="h-5 w-5" />
              </Button>
            ) : (
              <Button
                onClick={() => setIsNavMenuOpen(true)}
                variant="outline"
                size="icon"
              >
                <Bars3Icon className="h-5 w-5" />
              </Button>
            )}
          </div>

          <div className="hidden md:flex md:w-auto" id="navbar">
            <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
              {navLinks.map(({ title, path }) => (
                <li key={path}>
                  <NavLink
                    onClick={() => setIsNavMenuOpen(false)}
                    href={path}
                    title={title}
                  />
                </li>
              ))}
              <li key="nav-separator">
                <Separator orientation="vertical" className="w-[2px]" />
              </li>
              <li key="nav-theme-toggle">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MenuOverlay
        closeMenu={() => setIsNavMenuOpen(false)}
        links={navLinks}
        isNavMenuOpen={isNavMenuOpenAndIsSmallerThanMediumDevice}
      />
    </nav>
  );
};

export default Navbar;
