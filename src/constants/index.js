import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Front End Engineer with one year of hands-on experience in crafting dynamic and responsive web applications. Proficient in a range of technologies including React.js, HTML5, CSS3, GSAP for animation, and Appwrite for backend services, I bring a blend of creativity and technical acumen to every project. My expertise extends to leveraging MySQL and MongoDB databases to ensure efficient data management and retrieval. I am dedicated to continuous learning and staying updated with the latest trends in web development to deliver cutting-edge solutions that meet and exceed client expectations.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "SYNCRONUS Chat App",
    image: project2,
    description:
      "Demonstrated proficiency in utilizing Node.js, React, JavaScript, MongoDB, and Socket.io to develop a real-time chat application, showcasing strong full-stack development skills. Designed and implemented WebSocket-based real-time messaging features using Socket.io, enabling seamless, instant communication between users on the platform. Developed robust database schemas and utilized MongoDB to store and manage user profiles, chat histories, and other application data, ensuring efficient data retrieval and storage.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Apple WebPage Clone",
    image: project2,
    description:
      "Developed a clone of a prominent Apple webpage using modern web technologies including React.js for frontend interactivity, Tailwind CSS for rapid UI development with utility-first classes, and GSAP for creating smooth animations and transitions. Integrated a visually appealing video carousel using GSAP animations to showcase dynamic content seamlessly. Implemented features like autoplay, navigation controls, and responsive design to ensure optimal user experience across devices.",
    technologies: ["HTML", "CSS", "Tailwind", "GSAP","React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React","React","Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Tailwind", "Appwrite"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "aboutmanishh@gmail.com",
};
