import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/NaveenEkanayake" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/naveen-ekanayake-8b9b60309/",
  },
  {
    icon: <FaFacebook />,
    path: "https://web.facebook.com/naveen.ekanayake.33/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/naveen.ekanayake.33/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
