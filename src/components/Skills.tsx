import {
  DiJavascript1,
  DiCss3,
  DiPython,
  DiDocker,
  DiMongodb,
  DiRedis,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiGraphql,
  SiWebrtc,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
} from "react-icons/si";
// import { FaAws } from "react-icons/fa";
// import { VscGitBranch } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa"; // FontAwesome Git icon

import { TbApi } from "react-icons/tb";
import SocketIOIcon from "./icons/SocketIOIcon";
import { KnexIcon } from "./icons/KnexIcon";
import { EC2 } from "./icons/EC2";
import { ReactQueryIcon } from "./icons/ReactQueryIcon";

// Define types for the skill categories and items
interface SkillItem {
  icon: JSX.Element;
  name: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Core",
    items: [
      { icon: <DiPython className="w-8 h-8" />, name: "Python" },
      { icon: <DiJavascript1 className="w-8 h-8" />, name: "JavaScript" },
      { icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript" },
      { icon: <SiCplusplus className="w-8 h-8" />, name: "C/C++" },
      { icon: <DiCss3 className="w-8 h-8" />, name: "CSS3" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { icon: <SiReact className="w-8 h-8" />, name: "React.js" },
      { icon: <SiRedux className="w-8 h-8" />, name: "Redux Toolkit" },
      { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js" },
      { icon: <ReactQueryIcon />, name: "React Query" },
      { icon: <TbApi className="w-8 h-8" />, name: "REST APIs" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: <SiFastapi className="w-8 h-8" />, name: "FastAPI" },
      { icon: <SiNodedotjs className="w-8 h-8" />, name: "Node.js" },
      { icon: <SiExpress className="w-8 h-8" />, name: "Express.js" },
      { icon: <KnexIcon />, name: "Knex" },
      { icon: <SocketIOIcon />, name: "WebSocket" },
      { icon: <SiWebrtc className="w-8 h-8" />, name: "WebRTC" },
      { icon: <SiGraphql className="w-8 h-8" />, name: "GraphQL" },
    ],
  },
  {
    category: "Database",
    items: [
      { icon: <DiPostgresql className="w-8 h-8" />, name: "PostgreSQL" },
      { icon: <DiMongodb className="w-8 h-8" />, name: "MongoDB" },
      { icon: <DiRedis className="w-8 h-8" />, name: "Redis" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { icon: <FaGitAlt className="w-8 h-8" />, name: "Git & GitHub" },
      { icon: <DiDocker className="w-8 h-8" />, name: "Docker" },
      { icon: <EC2 />, name: "AWS EC2" },
      // {
      //   icon: (
      //     <img
      //       src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg"
      //       className="w-8 h-8"
      //     />
      //   ),
      //   name: "Google Apps Script",
      // },
    ],
  },
];

// const Skills: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-20">
//       <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
//       <div className="max-w-6xl mx-auto px-4 space-y-8">
//         {skills.map((category) => (
//           <div key={category.category} className="space-y-4">
//             <h3 className="text-2xl font-semibold text-blue-400">
//               {category.category}
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {category.items.map((item) => (
//                 <div
//                   key={item.name}
//                   className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg"
//                 >
//                   {item.icon}
//                   <span className="text-lg">{item.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
