import Link from "next/link";
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            Naveen
            <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
