import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { Menu } from "@mantine/core";

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
    href: "#achievements",
    label: "Achievements",
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
            className="lg:hidden"
          >
            <IconMenu2 />
          </button>
          <div className="hidden lg:flex lg:items-center">
            <Menu
              shadow="md"
              width={300}
              styles={{
                item: {
                  padding: 0,
                },
              }}
            >
              <Menu.Target>
                <button className="button-primary">Quick navigation</button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>
                  <span className="paragraph">Home</span>
                </Menu.Label>
                <li className="flex flex-col items-start gap-[0.5rem] mt-[1rem]">
                  {links.map((link) => {
                    return (
                      <Menu.Item key={link.href}>
                        <ul>
                          <a
                            href={link.href}
                            className="date block h-full w-full px-[1rem] py-[0.5rem]"
                            onClick={() => {
                              setIsDrawerOpen(false);
                            }}
                          >
                            {link.label}
                          </a>
                        </ul>
                      </Menu.Item>
                    );
                  })}
                </li>
              </Menu.Dropdown>
            </Menu>
          </div>
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
