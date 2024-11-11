"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import FurrypetClinic from "../../public/images/work/thumb1.png";
import LeaveManagement from "../../public/images/work/thumb2.png";
import TodoApplication from "../../public/images/work/thumb3.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "../WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Furry Pet Clinic Management",
    description:
      "For this project, I took on the responsibility of creating a modern UI/UX design along with building the homepage, and admin, customer, and consultant dashboards. I also handled the integration of the frontend and backend.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
    ],
    image: FurrypetClinic,
    live: "",
    github: "https://github.com/NaveenEkanayake/F2Clinic.git",
  },
  {
    num: "02",
    title: "Leave Management System",
    description:
      "For this project, I created a modern UI/UX design and developed seamless dashboards for the admin and servants.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Spring Boot" },
    ],
    image: LeaveManagement,
    live: "",
    github: "https://github.com/NaveenEkanayake/Leave_Management.git",
  },
  {
    num: "03",
    title: "To-Do Application",
    description:
      "In this project, I was responsible for creating the UI/UX design and for implementing both the frontend and backend.",
    stack: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
    ],
    image: TodoApplication,
    live: "",
    github: "https://github.com/NaveenEkanayake/TODO.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (Swiper) => {
    const CurrentIndex = Swiper.activeIndex;
    setProject(projects[CurrentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div
                className="text-8xl leading-none font-extrabold text-transparent cursor-pointer"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  transition: "WebkitTextStroke 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.WebkitTextStroke = "1px #00ff99";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.WebkitTextStroke = "1px #ffffff";
                }}
              >
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="text-center  flex flex-row">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl text-accent cursor-pointer"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent  hover:rotate-45 transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] xl:h-[520px]  xl:mt-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <div className="relative h-full w-full flex items-center justify-center z-20">
                      <Image
                        className="object-cover w-full h-full"
                        src={project.image}
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
