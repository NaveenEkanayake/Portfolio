"use client";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import Capicon from "../../public/images/resume/cap.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const experience = {
  title: "My experience",
  description:
    "I have experience in React, JavaScript, Spring Boot, Bootstrap, and CSS. Additionally, I excel in backend technologies such as PostgreSQL, MongoDB, and API integration. ",
  items: [
    {
      name: "Furry Pet Clinic management",
      duration: "June 2024 - July-2024",
      description: " UI/UX designer/Both Frontend and Backend Developer",
      technologies: ["React", "MongoDB", "Tailwind", "JavaScript"],
    },
    {
      name: "Leave  management System",
      duration: "July 2024 ",
      description: " UI/UX designer/Both Frontend and Backend Developer",
      technologies: ["React", "SpringBoot", "Tailwind", "JavaScript"],
    },

    {
      name: "Class Management System",
      duration: "Augest 2024 ",
      description: " Both Frontend and Backend Developer",
      technologies: ["Django"],
    },

    {
      name: "Inventory Dashboard",
      duration: "Augest 2024 ",
      description: " Both Frontend and Backend Developer",
      technologies: ["NextJs", "PostgreSQL"],
    },
    {
      name: "To do Application",
      duration: "September 2024 ",
      description: " Both Frontend and Backend Developer",
      technologies: ["React", "MongoDB", "Javascript"],
    },
  ],
};

const about = {
  title: "About Me",
  Description:
    "My name is Naveen Ekanayake, and I am an undergraduate student at SLIIT with a passion for web development. I enjoy transforming ideas into digital experiences and have a solid foundation in both front-end and back-end development. I am enthusiastic about creating efficient, responsive, and user-friendly web applications, and I am committed to continuously improving my skills through hands-on experience and self-learning.",
  info: [
    {
      feildName: "Name",
      feildValue: "Naveen Ekanayake",
    },
    {
      feildName: "Phone Number",
      feildValue: "072-6752958",
    },
    {
      feildName: "Experience",
      feildValue: "1 Year",
    },
    {
      feildName: "Nationality",
      feildValue: "Srilankan",
    },
    {
      feildName: "Email",
      feildValue: "nekanayake789@gmail.com",
    },
    {
      feildName: "Language",
      feildValue: "English,Sinhala",
    },
  ],
};

const education = {
  icon: Capicon,
  title: "Education & Skills",
  description:
    "I have successfully completed a Certificate in Python for Beginners through the Alison Online Learning Platform, demonstrating foundational knowledge in Python programming. In addition, I have gained hands-on experience with Docker, working on containerization and deployment of applications for various projects.",
  items: [
    {
      institution: "Alison Online Learning Platform",
      duration: "2024",
      description: "Learned the Basics of Python",
    },
    {
      institution: "Docker (Self-Learning)",
      duration: "2024",
      description:
        "Learned the basics of Docker, including containerization, creating Docker images, and running containers for development purposes.",
    },
  ],
};

const skills = {
  title: "Expertised Languages",
  description:
    "Throughout my academic journey, I have gained expertise in the latest technologies, including React and Next.js for front-end development, as well as back-end technologies. I have a strong command of programming languages such as Java, JavaScript, and PHP.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },

    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0  gap-6">
            <TabsTrigger value="experience">Experince</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Languages</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1  ">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[500px] md:h-[350px]  gap-1 py-6 px-10 rounded-xl  lg:items-start  mb-5"
                      >
                        <h3 className="text-center font-bold tracking-wider text-[23px] text-accent">
                          {item.name}
                        </h3>
                        <p>
                          <strong>Duration:</strong> {item.duration}
                        </p>
                        <span className="w-[50px]">
                          <strong>My Work:</strong>
                          {item.description}
                        </span>
                        <div>
                          <strong>Technologies:</strong>
                          <ul>
                            {item.technologies.map((tech, techIndex) => (
                              <li key={techIndex}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] md:h-[250px] gap-1 py-6 px-10 rounded-xl lg:items-start mb-5"
                      >
                        <h3 className="text-center font-bold tracking-wider text-[23px] text-accent">
                          {item.institution}
                        </h3>
                        <p>
                          <strong>Year:</strong> {item.duration}
                        </p>
                        {item.description && (
                          <span className="w-[50px]">
                            <strong>Description:</strong> {item.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0 gap-40">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start"
                      >
                        <span className="text-white/60  text-nowrap ">
                          {item.feildName}:
                        </span>
                        <span className="text-xl">{item.feildValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
