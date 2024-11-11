"use client";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Full Stack Developer/ MERN Stack Developer
            </span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold">
              Hello I&apos;m <br />
              <span className="text-accent">
                <Typewriter
                  words={[
                    "Naveen Ekanayake",
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "UI/UX Designer",
                  ]}
                  loop={0}
                  typeSpeed={50}
                  backSpeed={50}
                  backDelay={50}
                  startDelay={50}
                />
              </span>
              <Cursor />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant and Innovative Modern Web designs.
              Also, I am proficient in various Programming Languages and
              technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/PDF/CV.pdf"
                target="_blank"
                onClick={handleDownloadClick}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{isLoading ? "Preparing CV..." : "Download CV"}</span>
                  {isLoading ? (
                    <AiOutlineLoading className="animate-spin text-xl" />
                  ) : (
                    <FiDownload className="text-xl" />
                  )}
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
