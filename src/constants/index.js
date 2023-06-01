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
    title: "Browse 2 Earn",
    icon: web,
  },
  {
    title: "Integrated DEFI",
    icon: mobile,
  },
  {
    title: "Revenue Sharing",
    icon: backend,
  },
  {
    title: "All in One Decentralized App",
    icon: creator,
  },
];

/*const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
*/
const experiences = [
  {
    title: "",
    
    icon: starbucks,
    iconBg: "#383E56",
    date: "Q4 2022",
    points: [
      "Idea of Solak Browser was Born",
      "Team Creation",
      
    ],
  },
  {
    title: "",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Q1 2023",
    points: [
      "Design and planning of initial model",
      "Improvements, domain acquire",
      "Solak utility token release date",
      "Participating in code reviews and providing constructive feedback with other developers.",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Q2 2023",
    points: [
      "Private sale for development and Marketing",
      "SolakGPT browser development & release",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Defi product design and development (DEX and NFT Marketplace",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Q3 2023",
    points: [
      "Solak TGE and listing ",
      "Solak staking and dex dapp release",
      "Security Audits",
      "Browser improvements and integration through plugin",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Q4 2023",
    points: [
      "Browse to earn mainnet launch",
      "Token integration ",
      "Solak money market development and integration in Solak Browser",
      "Improvements in Defi products",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SolakDEX",
    description:
      "Trade with speed and efficiency on Solakdex, the Solana-based DEX, Discover seamless token swaps on Solakdex, the cutting-edge decentralized exchange",
    tags: [
      
    ],
    image: carrent,
    source_code_link: "https://solakswap.netlify.app/",
  },
  {
    name: "SolakNFT Marketplace",
    description:
      "Introducing SolakNFT Marketplace, the premier platform for buying, selling, and trading unique digital assets on the Cross blockchain",
    tags: [
      
      
      
    ],
    image: jobit,
    source_code_link: "https://solakmarketplace.netlify.app/",
  },
  {
    name: "SolakGPT AI Tools",
    description:
      "one-stop solution for advanced artificial intelligence-powered tools on the SolanaGPT Browser. Enhance your browsing experience with cutting-edge features and intelligent functionalities.",
    tags: [
     
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, experiences, testimonials, projects };
