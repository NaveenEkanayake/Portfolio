"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    description: "072-6752958",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    description: "nekanayake789@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "No 142/2 Moratuwa Road, Piliyandala",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwzrwjd");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="bg-[#27272c] text-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <p>Thanks for Contacting Me!</p>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">
                I am always open to new opportunities and collaborations. If you
                have a project or an idea you&apos;d like to discuss, feel free
                to reach out, and I&apos;ll be happy to assist you. Let&apos;s
                bring your vision to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" />
                <Input type="text" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="tel" name="phone" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type Your Message here"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="flex items-center justify-center text-center">
                <Button
                  type="submit"
                  size="default"
                  disabled={state.submitting}
                  className="max-w-40 text-center justify-center items-center"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-start justify-start xl:justify-start order-1 xl:order-none mb-0 xl:mb-0">
            <div className="relative left-10">
              <h4 className="text-xl text-accent text-nowrap">
                Contact Information
              </h4>
              {info.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 mt-4 text-white text-nowrap cursor-pointer"
                >
                  <div className="bg-[#27272c] h-[52px] w-[52px] text-accent rounded-md flex items-center justify-center text-[24px]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
