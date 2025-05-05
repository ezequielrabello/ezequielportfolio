import {PhoneIphone, EmailOutlined, LinkedIn, GitHub, Instagram } from "@mui/icons-material"


export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO, I'M",
    name: "EZEQUIEL RABELLO",
    post: "FRONTEND DEVELOPER",
    design: "REACT DEVELOPER",
    desc: "I'm a Front-End Developer passionate about building clean, responsive interfaces with React. With a background in high-pressure roles, I bring focus, adaptability, and a love for turning ideas into user-friendly web experiences.",
  },
]
export const about = [
  {
    desc: "Hi, I’m Ezequiel Rabello — a Front-End Developer with a passion for building intuitive, responsive web applications using React. Before transitioning into tech, I spent five years in the military, worked as an air traffic controller, ramp supervisor at Pittsburgh International Airport, and real estate agent. These experiences taught me discipline, problem-solving under pressure, and how to communicate clearly in any environment.",
    desc1: "In recent years, I’ve been fully dedicated to front-end development. I’ve built projects ranging from landing pages to functional apps like timers, calculators, and real estate websites. Each project has helped me sharpen my skills in JavaScript, HTML, CSS, and React — and reinforced my focus on creating clean, accessible, and user-friendly interfaces. I’m currently focused on improving as a developer, learning new tools, and contributing to meaningful projects. My goal is to join a team where I can grow, add value, and build products that make a difference.",
    cover: "./images/AboutmeEzequiel.jpg",
  },
]

export const portfolio = [
  {
    id: 1,
    img: "./images/project1.png",
    tool: "React, HTML, CSS",
    title: "Landing page",
    link: "https://landing-page-ezequiel.vercel.app/",
    description: "Simple landing page created for companies with marketing business. Clean layout and fully responsive.",
  },
  {
    id: 2,
    img: "./images/project2.png",
    tool: "React, HTML, CSS",
    title: "Realtor website",
    link: "https://arealtor.vercel.app/",
    description: "As a real estate agent myself, I know how important it is to have a website presenting your business.",
  },
  {
    id: 3,
    img: "./images/project3.png",
    tool: "Vanilla Javascript, HTML, CSS",
    title: "Focus timer",
    link: "https://focustimer2-0-ten.vercel.app/",
    description: "A timer that will help you to concentrate in your activities. It has features such as playing different environment sounds, it allows you to play/pause and much more!",
  },

]

export const contact = [
  {
    icon: <PhoneIphone />,
    text: "+1 412 295 8999"
  },
  {
    icon: <EmailOutlined />,
    text: "rabello950@gmail.com"
  }
]

export const social = [
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/ezequiel-rabello-1587002aa/",
  },
  {
    icon: <GitHub />, 
    link: "https://github.com/ezequielrabello",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/kielrpl1/"
  }
]
