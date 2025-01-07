
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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    codeNinjas,
    siminsights,
    umich,
    wsu,
    python,
    cpp,
    recyclebuddyLogo,
    java,
    ml,
    genderClassifier
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
  
  //change this to something other than services
  //interested in ml, python dev, c++ dev, java dev
  const services = [
    {
      title: "Python Developer",
      icon: python,
    },
    {
      title: "C++ Developer",
      icon: cpp,
    },
    {
      title: "Java Developer",
      icon: java,
    },
    {
      title: "ML Enthusiast",
      icon: ml,
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
      name: "C++",
      icon: cpp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company_name: "Michigan Institue for Data and AI in Society",
      icon: umich,
      //change iconBG
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "SimInsights",
      icon: siminsights,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Integrated Siminsights Conversational AI(SCAI) server API into existing Fiddler Auditor framework.",
        "Handled complex JSON data structures.",
        "Enhanced system logging and data extraction.",
        "Optimized response handling.",
        "Customized AI model integration.",
      ],
    },
    {
      title: "Reinforcement Learning Research Assistant",
      company_name: "Wayne State University",
      icon: wsu,
      iconBg: "#383E56",
      date: "December 2022 - March 2023",
      points: [
        "Learned basics of Reinforcement learning through instruction and experimentation.",
        "Researched and attempted classic Reinforcement Learning concepts such as Multi Armed Bandit.",
        "Implemented RL concepts to create autonomous vehicle in CARLA Simulator.",
      ],
    },
    {
      title: "Coding Instructor",
      company_name: "Code Ninjas",
      icon: codeNinjas,
      iconBg: "#E6DEDD",
      date: "May 2022 - May 2023",
      points: [
        "Created and implemented lesson plans based on child-led interest and curiosity.",
        "Kindled interests in children towards robotics through detailed instruction of Sphero Robots.",
        "Closely guided children through several passion projects.",
      ],
    },
  ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//       name: "Sara Lee",
//       designation: "CFO",
//       company: "Acme Co",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       testimonial:
//         "I've never met a web developer who truly cares about their clients' success like Rick does.",
//       name: "Chris Brown",
//       designation: "COO",
//       company: "DEF Corp",
//       image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//       testimonial:
//         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//       name: "Lisa Wang",
//       designation: "CTO",
//       company: "456 Enterprises",
//       image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
//   ];
  
  const projects = [
    {
      name: "RecycleBuddy",
      description:
        "Web-based platform that allows users to easily learn the appropraite method of recycling different objects.",
      tags: [
        {
          //change streamlit
          name: "streamlit",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          //python
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: recyclebuddyLogo,
      source_code_link: "https://github.com/recycle-buddy-mhacks17/mhacks17",
      //demo_link: "https://youtu.be/LuwFI9yriF0",
    },
    {
      name: "Gender Classification using Machine Learning", 
      description:
        "Machine learning model that predicts the gender of a person based on an image.",
      tags: [
        {
          name: "python",
          color: "pink-text-gradient",
        }
      ],
      image:genderClassifier,
      source_code_link: "https://github.com/AUMichiganFan/GenderMLModel",
    }
  ];
  
  export {technologies, experiences, projects, services};