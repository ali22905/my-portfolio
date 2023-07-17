import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  django,
  python,
  rehab,
  template1_1,
  sea_landing,
  calc1,
  gym,
  memories,
  socialali,
  minecraft,
  ecommerce,
  dashboard_website,
  obad,
  eslam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "frontend Developing",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developing",
    icon: backend,
  },
  {
    title: "web design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "python",
    icon: python,
  },  
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ali proved me wrong.",
    name: "Abdullah Ali",
    designation: "founder",
    company: "Prock",
    image: obad,
  },
  {
    testimonial:
      "I had a fantastic experience working with Ali on my online gym website. Not only did they deliver the project on time, but the code was clean and well-organized. Communication was excellent throughout the project. I highly recommend Ali to anyone looking for a skilled and reliable developer.",
    name: "Rehab Helmy",
    designation: "CEO",
    company: "herself",
    image: rehab,
  },
  {
    testimonial:
      "I Worked with Aly Before , he is a Huge Talent in Web Development , despite of his Youth but he has a very good Potential and Technical Knowledge with Hands-on Experience which will led him to be a great Software Engineer in the Future",
    name: "Eslam Helmy",
    designation: "CUCM",
    company: "Orange",
    image: eslam,
  },
];






const projects = [
  {
    name: "Social-Ali",
    description:
      "share your thoughts, images, and best moments with your friends and others on this beautiful social media website",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: socialali,
    type: "big",
    source_code_link: "https://social-ali.vercel.app/",
    github_link: "https://github.com/ali22905/Social-Ali-frontend"
  },
  {
    name: "Shape It Gym",
    description:
      "Shape It Gym is an online platform that provides access to over 2000 exercises for all muscle groups. Whether you have access to gym equipment or prefer home workouts, this platform caters to both options.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "yellow-text",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    type: "big",
    source_code_link: "https://shapeit-navy.vercel.app/",
    github_link: "https://github.com/ali22905/shape-it-gym",
  },
  {
    name: "Dashboard",
    description:
      "This is a website that serves as a dashboard for analyzing data. It includes various widgets and pages to visualize and interpret data. Additionally, there is a user authentication system using Python and Django.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "purple-text",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: dashboard_website,
    type: "big",
    source_code_link: "https://ali-dashboard-rust.vercel.app/",
    github_link: "https://github.com/ali22905/dashboard"
  },
  {
    name: "ali-mincraft",
    description:
      "A simple minecraft game 😊 with ThreeJS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "yellow-text",
      },
      {
        name: "zustand",
        color: "purple-text",
      },
    ],
    image: minecraft,
    type: "big",
    source_code_link: "https://ali-minecraft.vercel.app/",
    github_link: "https://github.com/ali22905/ali-minecraft"
  },
  {
    name: "AZ-store",
    description:
      "I developed this Node.js e-commerce website in March 2021 as a practice project after completing a Node.js course, so I fully focused on functionalities not the UI. This was my first attempt at creating a Node.js website independently",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "yellow-text",
      },
      {
        name: "Pug",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    type: "big",
    source_code_link: "https://az-store.onrender.com/home",
    github_link: "https://github.com/ali22905/Nodejs-ecommerce"
  },
  {
    name: "Memories",
    description:
      "share your favorite memories among others on this simple memories sharing webstie.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    type: "big",
    image: memories,
    source_code_link: "https://memories-p0ne.onrender.com/",
    github_link: "https://github.com/ali22905/memories-client",
  },
  {
    name: "Prock",
    description:
      "A sea looking landing page.",
    tags: [
      {
        name: "Html",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: sea_landing,
    type: "land_page",
    source_code_link: "https://prock1.onrender.com/home",
    github_link: "https://github.com/ali22905/prock",
  },
  {
    name: "Kasper",
    description:
      "An owl looking landing page",
    tags: [
      {
        name: "Html",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "yellow-text",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: template1_1,
    type: "land_page",
    source_code_link: "https://template-002.web.app/",
    github_link: "https://github.com/ali22905",
  },
  {
    name: "Calculator",
    description:
      "",
    tags: [
      {
        name: "Html",
        color: "pink-text-gradient",
      },
      {
        name: "Scss",
        color: "purple-text",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: calc1,
    type: "land_page",
    source_code_link: "https://az-calculator.web.app/",
    github_link: "https://github.com/ali22905",
  },
];

export { services, technologies, testimonials, projects };