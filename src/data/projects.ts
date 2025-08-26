import { ProjectProps } from "~/types";

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    heading: "CRM",
   
    description:
      "The Library Management application in C++ efficiently organizes library resources, enabling tasks such as book borrowing, return management, and cataloging. It incorporates features for user authentication, book search, and inventory management, enhancing library operations and user experience.",
    tech_used: ["C++", "windows.h", "password"],
    category: ["all", "personal"],
    src:"/crm.webp"
  },
  {
    id: 2,
    heading: "OnSight Cafe : A Lovable Food",
 
    description:
      "OnSight Cafe is a charming food application designed for delightful culinary experiences. Explore a diverse menu and enjoy the convenience of ordering from the comfort of your home or on the go.",
    tech_used: ["HTML5", "CSS3", "Javascript"],
    category: ["all", "personal"],
    src:"/cafe.jpg"
  },
  {
    id: 3,
    heading: "Todo App : Manage Your Tasks",

    description:
      "A simple and intuitive task management application designed to help you organize and prioritize your daily tasks efficiently.",
    tech_used: ["React JS", "Local Storage", "Tailwind CSS", "Themes", "CRUD"],
    category: ["all", "personal"],
    src:"/todo.jpg"
  },
  {
    id: 4,
    heading: "DoorDash: Food Delivery Landing Page",

    description:
      "Order your favourite food anytime and we will deliver them right to where you are.We are company dedicated to the distribution of products by deilvery to your home or place the place where you are , with the best qualtiy of delivery.",
    tech_used: ["React JS", "Tailwind CSS", "HTML5"],
    category: ["all", "personal"],
    src:"/food.jpg"
  },
  
  {
    id: 5,
    heading: "Old Personal Portfolio",
  src:"/portfolio.jpg",
    description:
      "A Personal Portfolio to showcase my expertise in Web developement , AI Development and Other Fields.",
    tech_used: [
      "Next JS",
      "Tailwind CSS",
      "Typescript",
      "Lenis",
      "Framer Motion",
    ],
    category: ["all", "personal"],
  },

  {
    id: 6,
    heading: "Pet Shop Website",
src:"/pets.jpg",
    description: "DrepWatch : Delegate , Ask Question , Answers . . . . ",
    tech_used: [
      "Next JS",
      "TypeScript",
      "Express JS",
      "Supabase",
      "Mesh JS (Blockchain)",
      "Lenis",
    ],
    category: ["all", "SODE"],
  },

  {
    id: 7,
    heading: "Books Management System",
 src:"/bookmanagement.jpeg",
    description:
      "At Trivolve Tech, we specialize in blockchain and AI, leading the charge with innovative technologies and forward-thinking strategies to empower our clients to reach new heights. Our mission is to amplify your ambitions, delivering tailored solutions that not only address your immediate challenges but also unlock a world of new opportunities. Our comprehensive suite of services is designed to support a diverse clientele, from dynamic startups eager to disrupt the market to large government entities aiming to enhance public services.",
    tech_used: ["Next JS", "Typecript", "GSAP", "Framer Motion"],
    category: ["all", "SODE"],
  },

  {
    id: 8,
    heading: "ERP",
  src:"/erps.jpg",
    description:
      "Global Web3 adoption - Web3 is not just a technological change, it's a social and cultural revolution.",
    tech_used: [
      "Next JS",
      "Typescript",
      "Blockchains",
      "Auth0",
      "Web3auth",
      "Supabase",
      "Prisma",
      "i18next/next-intl",
      "SODE/gasless",
    ],
    category: ["all", "SODE"],
  },
];