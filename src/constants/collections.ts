import {
  SiAdobephotoshop,
  SiAdobephotoshopHex,
  SiAndroidstudio,
  SiAndroidstudioHex,
  SiBitbucket,
  SiBitbucketHex,
  SiBootstrap,
  SiBootstrapHex,
  SiClerk,
  SiClerkHex,
  SiCodewars,
  SiCss3,
  SiCss3Hex,
  SiDart,
  SiDartHex,
  SiExpress,
  SiExpressHex,
  SiFigma,
  SiFigmaHex,
  SiFirebase,
  SiFirebaseHex,
  SiFlutter,
  SiFlutterHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiGithubHex,
  SiGithubpages,
  SiGithubpagesHex,
  SiGo,
  SiGoHex,
  SiGooglecolab,
  SiGooglecolabHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiJupyter,
  SiJupyterHex,
  SiLinkedin,
  SiMongodb,
  SiMongodbHex,
  SiMysql,
  SiMysqlHex,
  SiNetlify,
  SiNetlifyHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiNotionHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPrisma,
  SiPrismaHex,
  SiPython,
  SiPythonHex,
  SiReact,
  SiReactHex,
  SiReacthookform,
  SiReacthookformHex,
  SiRedux,
  SiReduxHex,
  SiRive,
  SiRiveHex,
  SiShadcnui,
  SiShadcnuiHex,
  SiStackoverflow,
  SiSupabase,
  SiSupabaseHex,
  SiSwagger,
  SiSwaggerHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTensorflow,
  SiTensorflowHex,
  SiTrello,
  SiTrelloHex,
  SiTypeformHex,
  SiTypescript,
  SiUnity,
  SiUnityHex,
  SiVercel,
  SiVercelHex,
  SiVisualstudio,
  SiVisualstudiocode,
  SiVisualstudiocodeHex,
  SiVisualstudioHex,
  SiVite,
  SiViteHex,
  SiZod,
  SiZodHex,
} from "@icons-pack/react-simple-icons";

import {
  AQUILARIE,
  CONVOCADE,
  FINGERTIPS,
  GOTWORKDIGITAL,
  GRADUATESCHOOL,
  MYCAA,
} from "./assets";
import { ROOTSECTIONS } from "./enums";

export const ROOTMENU = [
  {
    label: ROOTSECTIONS.about,
    id: `#${ROOTSECTIONS.about}`,
  },
  {
    label: ROOTSECTIONS.skills,
    id: `#${ROOTSECTIONS.skills}`,
  },
  {
    label: ROOTSECTIONS.experience,
    id: `#${ROOTSECTIONS.experience}`,
  },
  {
    label: ROOTSECTIONS.projects,
    id: "",
  },
  {
    label: ROOTSECTIONS.education,
    id: "",
  },
  {
    label: ROOTSECTIONS.contact,
    id: "",
  },
];

export const BUILDS = ["Mobile Applications", "Web Applications", "Games"];

export const SOCIALS = [
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/Fingertips18",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ghiantan",
  },
  {
    icon: SiStackoverflow,
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/18320841/fingertips",
  },
  {
    icon: SiCodewars,
    label: "Codewars",
    href: "https://codewars.com/users/Fingertips",
  },
];

export const FRONTEND = [
  {
    icon: SiHtml5,
    hexColor: SiHtml5Hex,
    label: "HTML",
  },
  {
    icon: SiCss3,
    hexColor: SiCss3Hex,
    label: "CSS",
  },
  {
    icon: SiJavascript,
    hexColor: SiJavascriptHex,
    label: "Javascript",
  },
  {
    icon: SiTypescript,
    hexColor: SiTypeformHex,
    label: "Typescript",
  },
  {
    icon: SiDart,
    hexColor: SiDartHex,
    label: "Dart",
  },
  {
    icon: SiReact,
    hexColor: SiReactHex,
    label: "React JS",
  },
  {
    icon: SiNextdotjs,
    hexColor: SiNextdotjsHex,
    label: "Next JS",
  },
  {
    icon: SiFlutter,
    hexColor: SiFlutterHex,
    label: "Flutter",
  },
  {
    icon: SiShadcnui,
    hexColor: SiShadcnuiHex,
    label: "Shadcnui",
  },
  {
    icon: SiTailwindcss,
    hexColor: SiTailwindcssHex,
    label: "TailwindCSS",
  },
  {
    icon: SiBootstrap,
    hexColor: SiBootstrapHex,
    label: "Bootstrap",
  },
  {
    icon: SiRedux,
    hexColor: SiReduxHex,
    label: "Redux",
  },
  {
    icon: SiZod,
    hexColor: SiZodHex,
    label: "Zod",
  },
  {
    icon: SiReacthookform,
    hexColor: SiReacthookformHex,
    label: "React Hook Form",
  },
  {
    icon: SiClerk,
    hexColor: SiClerkHex,
    label: "Clerk",
  },
  {
    icon: SiVite,
    hexColor: SiViteHex,
    label: "Vite",
  },
];

export const BACKEND = [
  {
    icon: SiNodedotjs,
    hexColor: SiNodedotjsHex,
    label: "Node JS",
  },
  {
    icon: SiExpress,
    hexColor: SiExpressHex,
    label: "Express JS",
  },
  {
    icon: SiGo,
    hexColor: SiGoHex,
    label: "Go",
  },
  {
    icon: SiMongodb,
    hexColor: SiMongodbHex,
    label: "MongoDB",
  },
  {
    icon: SiSupabase,
    hexColor: SiSupabaseHex,
    label: "Supabase",
  },
  {
    icon: SiFirebase,
    hexColor: SiFirebaseHex,
    label: "Firebase",
  },
  {
    icon: SiPrisma,
    hexColor: SiPrismaHex,
    label: "Prisma ORM",
  },
  {
    icon: SiMysql,
    hexColor: SiMysqlHex,
    label: "MySQL",
  },
  {
    icon: SiPostgresql,
    hexColor: SiPostgresqlHex,
    label: "PostgreSQL",
  },
  {
    icon: SiSwagger,
    hexColor: SiSwaggerHex,
    label: "Swagger",
  },
];

export const OTHERS = [
  {
    icon: SiGit,
    hexColor: SiGitHex,
    label: "Git",
  },
  {
    icon: SiGithub,
    hexColor: SiGithubHex,
    label: "GitHub",
  },
  {
    icon: SiBitbucket,
    hexColor: SiBitbucketHex,
    label: "Bitbucket",
  },
  {
    icon: SiVercel,
    hexColor: SiVercelHex,
    label: "Vercel",
  },
  {
    icon: SiNetlify,
    hexColor: SiNetlifyHex,
    label: "Netlify",
  },
  {
    icon: SiGithubpages,
    hexColor: SiGithubpagesHex,
    label: "Github Pages",
  },
  {
    icon: SiPython,
    hexColor: SiPythonHex,
    label: "Python",
  },
  {
    icon: SiTensorflow,
    hexColor: SiTensorflowHex,
    label: "Tensorflow",
  },
  {
    icon: SiUnity,
    hexColor: SiUnityHex,
    label: "Unity",
  },
  {
    icon: SiAndroidstudio,
    hexColor: SiAndroidstudioHex,
    label: "Android Studio",
  },
];

export const TOOLS = [
  {
    icon: SiGooglecolab,
    hexColor: SiGooglecolabHex,
    label: "Google Colab",
  },
  {
    icon: SiJupyter,
    hexColor: SiJupyterHex,
    label: "Jupyter",
  },
  {
    icon: SiFigma,
    hexColor: SiFigmaHex,
    label: "Figma",
  },
  {
    icon: SiRive,
    hexColor: SiRiveHex,
    label: "Rive",
  },
  {
    icon: SiAdobephotoshop,
    hexColor: SiAdobephotoshopHex,
    label: "Adobo Photoshop",
  },
  {
    icon: SiTrello,
    hexColor: SiTrelloHex,
    label: "Trello",
  },
  {
    icon: SiNotion,
    hexColor: SiNotionHex,
    label: "Notion",
  },
  {
    icon: SiPostman,
    hexColor: SiPostmanHex,
    label: "Postman",
  },
  {
    icon: SiVisualstudiocode,
    hexColor: SiVisualstudiocodeHex,
    label: "Visual Studio Code",
  },
  {
    icon: SiVisualstudio,
    hexColor: SiVisualstudioHex,
    label: "Visual Studio",
  },
];

export const EXPERIENCES = [
  {
    image: FINGERTIPS,
    position: "Freelance Software Developer",
    company: "Fingertips",
    setup: "Remote",
    date: "July 2022 – June 2024",
    highlights: [
      "Developed and deployed 5+ custom mobile applications for Android using Flutter and 5+ web applications using React Frameworks, enhancing user engagement and client satisfaction.",
      "Designed and implemented responsive web applications with HTML, CSS and Javascript with React framework for local clients.",
      "Integrated third-party APIs (oauth, mapping services, etc.) and conducted thorough testing, ensuring high performance and security.",
      "Collaborated with clients to gather requirements, deliver projects within the timelines and budgets, and provided ongoing maintenance, resulting in 95% client retention.",
    ],
    skills: [
      "Android Development",
      "Web Development",
      "Web Design",
      "Frontend Development",
      "Backed Development",
      "React JS",
      "Next JS",
      "Express JS",
      "MongoDB",
      "Clerk",
      "Vercel",
      "Netlify",
      "Github Pages",
      "Tailwind CSS",
      "Figma",
      "Photoshop",
      "MVC",
      "REST API",
      "Rive",
      "Unity",
      "Tensorflow",
      "Tflite",
    ],
  },
  {
    image: GOTWORKDIGITAL,
    position: "Mobile Application Developer",
    company: "GotWork Digital",
    link: "https://gotwork.digital",
    setup: "Remote",
    date: "May 2023 – April 2024",
    highlights: [
      "Transitioned MindFree application to Flutter from its previous tech stack, implementing 8 intricate user interface designs from Figma, resulting in a 20% boost in user satisfaction.",
      "Developed applications using Feature First Clean Architecture, leveraging Riverpod and Bloc for robust state management, adhering to industry best practices.",
      "Enhanced app functionality through regular software updates and integration of new dependencies, consistently delivering new features and improvements.",
      "Actively collaborated with a senior software engineer, gaining valuable mentorship, and contributed to team success by sharing updates and insights in weekly meetings.",
    ],
    skills: [
      "Flutter",
      "Firebase",
      "Cloud Firestore",
      "Supabase",
      "Trello",
      "Bloc",
      "Riverpod",
      "GoRouter",
      "GetIt",
      "Figma",
      "Bitbucket",
      "Unit Testing",
      "Clean Architecture",
      "MVVM",
      "REST API",
    ],
  },
  {
    image: CONVOCADE,
    position: "Software Developer",
    company: "Convocade",
    link: "https://www.facebook.com/Convocade",
    setup: "Remote",
    date: "July 2022 – January 2023",
    highlights: [
      "Developed a web app using ReactJS and was migrated to NextJS for advance features, enabling businesses to hire influencers for advertisement, connecting over 3+ businesses with influencers.",
      "Implemented dynamic features like monthly influencer rotation and influencer of the week, enhancing user engagement and platform activity by 35%.",
      "Created a seamless booking system for influencers and businesses, prioritizing popular influencers while providing flexibility for lesser- known influencers to gain exposure, optimizing the hiring process for all parties involved.",
      "Developed a dynamic landing page to assist 100+ eligible military spouses in obtaining professional credentials, facilitating their career advancement.",
      "Developed a music player web app to showcase over 3+ tracks produced by Aquilarie, enhancing their online presence and audience reach.",
    ],
    subCompanies: [
      {
        company: "MyCAA Grant Assist",
        image: MYCAA,
        link: "https://mycaagrant.com",
      },
      {
        company: "Aquilarie",
        image: AQUILARIE,
        link: "https://spotify.com/artist/2F2fMy2GAqcw2k7fk97kSk",
      },
    ],
    skills: [
      "React JS",
      "Next JS",
      "Tailwind CSS",
      "Redux JS",
      "Zustand",
      "Express JS",
      "Uploadthing",
      "Clerk",
      "Framer Motion",
      "GSAP",
      "Figma",
      "Zod",
      "React Hook Form",
      "Shadcn UI",
    ],
  },
  {
    image: GRADUATESCHOOL,
    position: "Full-Stack Developer Intern",
    company: "USM Graduate School",
    link: "https://www.usm.edu.ph/academics/graduate-school",
    setup: "On-site",
    date: "January 2021 – June 2021",
    highlights: [
      "Led the development of the Mastivity Web Application for USM Graduate School Faculty, managing both Frontend and Backend, resulting in a 20% increase in user engagement.",
      "Conducted regular software updates and delivered comprehensive presentations of the web application, ensuring stakeholders were updated and satisfied with the system's progress.",
      "Maintained an active presence, dedicating 8 hours in-office daily and continued work remotely, contributing to 95% uptime and reliability of the system.",
      "Enhanced skill set by mastering ASP.NET Core and Angular framework, resulting in a 30% improvement in development efficiency and project completion time.",
    ],
    skills: [
      "ASP.Net Core",
      "Angular",
      "Angular Material",
      "Azure",
      "MSSQL Server",
      "Swagger API",
      "Entity Framework (EF) Core",
      "Bootstrap",
      "SCSS",
      "HTML",
      "JSON Web Token (JWT)",
    ],
  },
];
