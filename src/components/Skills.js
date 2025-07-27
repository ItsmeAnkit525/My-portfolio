import React, { useState } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaFigma,
  FaLaptopCode,
  FaCogs,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import { MdOutlineStars } from "react-icons/md";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = {
    frontend: {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-teal-500" />,
        },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      border: "border-blue-200 dark:border-blue-800",
    },
    backend: {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-600 dark:text-gray-300" />,
        },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        // { name: "Redis", icon: "🔴" },
        // { name: "GraphQL", icon: "🔗" },
      ],
      color: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      border: "border-green-200 dark:border-green-800",
    },
    tools: {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="text-gray-800 dark:text-white" />,
        },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        // { name: "AWS", icon: "☁️" },
        {
          name: "VS Code",
          icon: <FaCode className="text-blue-500" />,
        },
        { name: "Linux", icon: <FaLinux className="text-yellow-600" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
      ],
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      border: "border-purple-200 dark:border-purple-800",
    },
    languages: {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
        // { name: "Go", icon: "🔵" },
      ],
      color: "from-orange-500 to-red-500",
      bg: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      border: "border-orange-200 dark:border-orange-800",
    },
  };

  const allSkills = Object.values(skillCategories).flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.name }))
  );

  const getFilteredSkills = () => {
    if (activeCategory === "all") return allSkills;
    return skillCategories[activeCategory]?.skills || [];
  };

  const categories = [
    { key: "all", name: "All Skills", icon: <MdOutlineStars /> },
    { key: "frontend", name: "Frontend", icon: <FaLaptopCode /> },
    { key: "backend", name: "Backend", icon: <FaCogs /> },
    { key: "languages", name: "Languages", icon: <FaCode /> },
    { key: "tools", name: "Tools", icon: <FaTools /> },
  ];

  return (
    <section id="skills" className="my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency
          levels across various technologies
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center ${
              activeCategory === category.key
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {getFilteredSkills().map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-70 dark:group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm leading-tight">
                {skill.name}
              </h3>
            </div>

            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        ))}
      </div>

      {/* Skills Summary Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(skillCategories).map(([key, category]) => (
          <div
            key={key}
            className={`${category.bg} ${category.border} border rounded-xl p-4 text-center`}
          >
            <div
              className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
            >
              {category.skills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
