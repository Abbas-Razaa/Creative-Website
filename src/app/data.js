/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Social Media Website",
    description: "A real-time social media platform built with Node.js, Express.js, Socket.io, and MongoDB, allowing users to connect, share, and interact seamlessly.",
    date: "2024-sept-25",
    demoLink: "https://github.com/Abbas-Razaa/Social_Media_Platform",
  },
  {
    id: 2,
    name: "Ecommerce Website",
    description: "An e-commerce store developed with Node.js, Express.js, MySQL, and EJS, providing users with a seamless shopping experience and efficient product management.",
    date: "2024-August-20",
    demoLink: "https://github.com/Abbas-Razaa/E-commerce_Website",
  },
  {
    id: 3,
    name: "Chess Game",
    description: "Built a real-time multiplayer chess game using Socket.IO, Node.js, and Express.js. Players can connect, compete, and see instant move updates, with the server managing game states and turns seamlessly.",
    date: "2024-june-26",
    demoLink: "https://github.com/Abbas-Razaa/Chess",
  },
  {
    id: 4,
    name: "Tech Company Website",
    description: "Developed a responsive MERN web app with user authentication and real-time updates, improving user interaction by 30%",
    date: "2023-Nov-28",
    demoLink: "https://github.com/Abbas-Razaa/MERN-website",
  },
  {
    id: 5,
    name: "Movie Application",
    description: "Integrated Next.js for front-end development, leveraging Rapid API to deliver dynamic movie content",
    date: "2023-sept-18",
    demoLink: "https://github.com/Abbas-Razaa/Movie.com",
  },
  {
    id: 6,
    name: "Tic Tac Toe Game",
    description: "Created a tic-tac-toe game using React components and state management, providing an interactive gaming experience.",
    date: "2023-june-6",
    demoLink: "https://github.com/Abbas-Razaa/Tic-Tac-Toe-Game",
  },
  {
    id: 7,
    name: "Chat Application",
    description: "Developed a modern chat web app with Next.js and vanilla CSS, featuring smooth animations and real-time communication",
    date: "2023-April-28",
    demoLink: "https://github.com/Abbas-Razaa/Chat-App",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Abbas-Razaa",
    icon: "github",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/abbas_.raza",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/abbas-razaa",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
