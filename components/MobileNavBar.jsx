"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "Services",
    path: "/Services",
  },
  {
    name: "Resume",
    path: "/Resume",
  },
  {
    name: "Work",
    path: "/Work",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

const MobileNavBar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" className="flex flex-row items-center justify-center">
            <h1 className="text-4xl font-semibold">Naveen </h1>
            <span className="text-accent">.</span>
          </Link>
        </div>
        <nav className="flex flex-col items-center space-y-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
