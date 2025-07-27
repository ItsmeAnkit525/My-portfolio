import React, { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = {
    frontend: {
      name: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "🔺" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "TailwindCSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "💛" },
        { name: "HTML5", level: 95, icon: "🧱" },
        { name: "CSS3", level: 90, icon: "🎭" },
      ],
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      border: "border-blue-200 dark:border-blue-800",
    },
    backend: {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express", level: 80, icon: "🚄" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        // { name: "Redis", level: 70, icon: "🔴" },
        // { name: "GraphQL", level: 65, icon: "🔗" },
      ],
      color: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      border: "border-green-200 dark:border-green-800",
    },
    tools: {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "GitHub", level: 88, icon: "🐙" },
        { name: "Docker", level: 40, icon: "🐋" },
        // { name: "AWS", level: 70, icon: "☁️" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Linux", level: 40, icon: "🐧" },
        { name: "Figma", level: 40, icon: "🎨" },
      ],
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      border: "border-purple-200 dark:border-purple-800",
    },
    languages: {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟡" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C++", level: 75, icon: "⚡" },
        { name: "SQL", level: 82, icon: "🗃️" },
        // { name: "Go", level: 60, icon: "🔵" },
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
    { key: "all", name: "All Skills", icon: "🌟" },
    { key: "frontend", name: "Frontend", icon: "💻" },
    { key: "backend", name: "Backend", icon: "⚙️" },
    { key: "languages", name: "Languages", icon: "📝" },
    { key: "tools", name: "Tools", icon: "🛠️" },
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {getFilteredSkills().map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  animation: `slideIn 1s ease-out ${index * 0.1}s both`,
                }}
              ></div>
            </div>

            {/* Skill Level Text */}
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {skill.level >= 90
                ? "Expert"
                : skill.level >= 80
                ? "Advanced"
                : skill.level >= 70
                ? "Intermediate"
                : "Beginner"}
            </div>
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

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
