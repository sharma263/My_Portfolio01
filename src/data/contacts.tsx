import { BsGithub, BsLinkedin,  } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ContactProps } from "~/types";

export const CONTACTS: ContactProps[] = [
  {
    id: 1,
    href: "https://github.com/sharma263",
    tag: "Github",
    icon: <BsGithub size={24} />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/shivangi-sharma-3622831bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    tag: "Linkedin",
    icon: <BsLinkedin size={24} />,
  },

  {
    id: 4,
    href: "https://www.instagram.com/infatuation_soul.1/",
    tag: "Instagram",
    icon: <FaInstagram size={24} />,
  },
  {
    id: 5,
    href: "https://wa.me/6261619460",
    tag: "Whatsapp",
    icon: <FaWhatsapp size={24} />,
  },
];
