import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

const links = [
  {
    href: "#about-me",
    label: "About me",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#featured-portfolio",
    label: "Featured portfolio",
  },
  {
    href: "#work-experience",
    label: "Work experience",
  },
  {
    href: "#achievement",
    label: "Achievement",
  },
  {
    href: "#education",
    label: "Education",
  },
  {
    href: "#contact-information",
    label: "Contact information",
  },
];

export function NavMargin() {
  return <div className="mt-[4rem]" />;
}

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-offwhite z-[999] drop-shadow-lg">
      <div className="nav-wrapper flex items-center">
        <div className="flex justify-between w-full">
          <Link href="/" className="heading font-bold">
            marchotridyo
          </Link>
          <button
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <IconMenu2 />
          </button>
        </div>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        direction="right"
        className="bg-offwhite p-[2rem]"
      >
        <h1 className="heading underline font-bold">Home</h1>
        <li className="flex flex-col items-start gap-[0.5rem] mt-[1rem]">
          {links.map((link) => {
            return (
              <ul key={link.href}>
                <a
                  href={link.href}
                  className="paragraph"
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  {link.label}
                </a>
              </ul>
            );
          })}
        </li>
      </Drawer>
    </nav>
  );
}
