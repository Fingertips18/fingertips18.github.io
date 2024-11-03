import {
  FLIXSAGEPREVIEW_HASH,
  LEAFONICPREVIEW_HASH,
  TRIKTOOKPREVIEW_HASH,
} from "./hashes";
import { FLIXSAGEPREVIEW, LEAFONICPREVIEW, TRITOKPREVIEW } from "./assets";
import { PROJECTTYPE } from "./enums";

export const FORMLINK = "https://forms.gle/PFHoohMazvKMeKCh7";

export const PROJECTS = [
  {
    preview: "https://www.youtube.com/embed/SBOBtfs9XiI?si=vpB3x8Mg3x4F2ipa",
    name: "Tweetch",
    subtitle: "(Twitch Clone 🎮)",
    desc: "Tweetch is a Twitch clone crafted with personal preferences in mind. Designed to emulate the popular live streaming platform, this project aims to provide a familiar experience while incorporating custom features and enhancements tailored to individual needs.",
    stack: [
      "NextJS",
      "Supabase",
      "Prisma ORM",
      "Livekit",
      "Clerk",
      "Zustand",
      "Shadcn UI",
      "React Hook Form",
      "Uploadthing",
      "Zod",
      "Next Themes",
      "Tailwind CSS",
    ],
    type: PROJECTTYPE.web,
    live: "https://tweetch.vercel.app",
  },
  {
    preview: "https://www.youtube.com/embed/pWdMyb9P70I?si=ZZvSe9ja1Ax-3-U1",
    name: "GrainGuru",
    subtitle: "(Rice Price Forecaster 🌾)",
    desc: "Leveraging an LSTM model, I developed a web application that compares and forecasts the current and future prices of different rice varieties in Cotabato.",
    stack: [
      "TensorflowJS",
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "Clerk",
      "Prisma ORM",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Uploadthing",
      "Zod",
    ],
    type: PROJECTTYPE.web,
    live: "https://grainguru.vercel.app",
  },
  {
    preview: "https://www.youtube.com/embed/yada96hMy48?si=MkaDE6ltknpxi8Pm",
    name: "ScrollWheel Date Picker",
    subtitle: "(Flutter Package 📅)",
    desc: "I developed a Flutter package that offers a unique, scrollable, and flat perspective wheel-type date picker, inspired by the sleek design seen in TikTok. This package allows developers to easily integrate an intuitive and visually appealing date picker into their Flutter applications. The date picker is fully customizable, providing smooth scrolling and a modern, flat design that enhances the user experience. It's perfect for applications where a stylish and user-friendly date selection is essential.",
    stack: ["Dart", "Flutter", "Pub Dev", "Change Notifier"],
    type: PROJECTTYPE.web,
    live: "https://pub.dev/packages/scroll_wheel_date_picker",
  },
  {
    preview: TRITOKPREVIEW,
    blurHash: TRIKTOOKPREVIEW_HASH,
    name: "TriTok",
    subtitle: "(TikTok Clone 🎥)",
    desc: "A clone application of TikTok made in Flutter. The idea was to create a modified version of TikTok by including and removing some of the features based on personal preference.",
    stack: [
      "Flutter",
      "Firebase",
      "Firebase Auth",
      "Firebase Storage",
      "Cloud Firestore",
      "Bloc",
      "Pexels API",
      "Go Router",
      "GetIt",
      "Dio",
      "Retrofit",
      "Secure Storage",
    ],
    type: PROJECTTYPE.mobile,
  },
  {
    preview: LEAFONICPREVIEW,
    blurHash: LEAFONICPREVIEW_HASH,
    name: "Leafonic",
    subtitle: "(Corynespora Leaf Disease Detector 🌿)",
    desc: "I developed a mobile application using a Convolutional Neural Network (CNN) powered by TensorFlow to classify the health of 𝗥𝘂𝗯𝗯𝗲𝗿 𝗧𝗿𝗲𝗲 𝗟𝗲𝗮𝘃𝗲𝘀 (𝘏𝘦𝘷𝘦𝘢 𝘣𝘳𝘢𝘴𝘪𝘭𝘪𝘦𝘯𝘴𝘪𝘴). The app precisely detects whether a leaf is healthy or afflicted with 𝘊𝘰𝘳𝘺𝘯𝘦𝘴𝘱𝘰𝘳𝘢 disease, utilizing CNNs for accurate image recognition. This technology-driven tool enhances early disease detection and supports farmers in maintaining healthier crops.",
    stack: [
      "Flutter",
      "Tensorflow",
      "Tflite",
      "Image processing",
      "Convolutional Neural Network (CNN)",
    ],
    type: PROJECTTYPE.mobile,
  },
  {
    preview: FLIXSAGEPREVIEW,
    blurHash: FLIXSAGEPREVIEW_HASH,
    name: "FlixSage",
    subtitle: "(Movie or Any Show Guesser 🪄)",
    desc: "With FlixSage, users can effortlessly upload an image related to a movie, whether it's a poster, screenshot, or promotional still. Once uploaded, the app employs advanced image recognition algorithms to identify the title, cast members, synopsis, and other pertinent information associated with the movie depicted in the image. This seamless process eliminates the need for manual searching and typing, providing users with instant access to comprehensive details about the movie they're interested in. Whether you're browsing through your photo gallery or stumbling upon intriguing movie visuals online, FlixSage ensures that you have all the essential information at your fingertips, making your movie-watching experience more informed and enjoyable.",
    stack: [
      "Flutter",
      "Firebase",
      "Bloc",
      "AI",
      "GetIt",
      "Go Router",
      "Object Box",
    ],
    type: PROJECTTYPE.mobile,
  },
  {
    preview: "https://www.youtube.com/embed/TFSYu5EvtE4?si=7n85K09BIbUm037V",
    name: "New Alimodian Portal",
    subtitle: "(Barangay Certificates Management System 📜)",
    desc: "A web platform for Barangay New Alimodian where officers manage resident info and process certificate requests, while residents can easily request and track certificates online.",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "blade-php"],
    type: PROJECTTYPE.web,
    live: "https://new-alimodian-portal.up.railway.app",
  },
  {
    preview: "https://www.youtube.com/embed/PIOU7s_m_FM?si=l9PYObfNG1RjBcEh",
    name: "MERN Auth",
    subtitle: "(MERN Stack Authentication System 🔒)",
    desc: "A MERN stack authentication system that includes user registration, login, and JWT-based session management with secure handling of passwords and token cookies. Ideal for building secure, scalable web applications.",
    stack: [
      "MongoDB",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "EmailJS",
      "JWT",
      "Javascript",
      "Framer Motion",
      "AxiosJS",
    ],
    type: PROJECTTYPE.web,
    live: "https://mern-auth-tau7.onrender.com",
  },
];
