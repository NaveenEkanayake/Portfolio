"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting responsive layouts utilizing HTML, CSS, React, and Next.js for dynamic web applications.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "UI/UX Designing",
    description:
      "Creating modern and user-friendly designs using Figma to enhance user experience and interface functionality.",
    href: "/ui-ux-designing",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Building the backend of websites using technologies like MongoDB, PostgreSQL, and PHP for scalable server-side applications.",
    href: "/backend-development",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="mb-8 flex-1 flex-col justify-center gap-6 group"
              >
                <div className="flex justify-between items-center space-x-4 group">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent  cursor-pointer"
                    style={{
                      WebkitTextStroke: "1px #ffffff",
                      transition: "webkitTextStroke 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.WebkitTextStroke = "1px #00ff99")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.WebkitTextStroke = "1px #ffffff")
                    }
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-3xl font-bold mt-4 leading-none group-hover:text-accent  transition-all duration-500 cursor-pointer">
                  {service.title}
                </h2>
                <p className="text-lg text-white/60 mt-2 cursor-pointer">
                  {service.description}
                </p>
                <div className="border-b border-white/20 w-full mt-4"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
