import React, { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { label: "Years of Coding", value: "3+", icon: "💻" },
    { label: "Projects Completed", value: "10+", icon: "🚀" },
    { label: "Technologies", value: "15+", icon: "⚡" },
    { label: "Current CGPA", value: "9.44", icon: "🎓" },
  ];

  const interests = [
    { name: "Full Stack Development", icon: "🌐" },
    { name: "Artificial Intelligence", icon: "🤖" },
    { name: "Mobile App Development", icon: "📱" },
    { name: "DevOps & Cloud", icon: "☁️" },
    { name: "Open Source", icon: "🔓" },
    { name: "Competitive Programming", icon: "🏆" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions",
      icon: "💡",
    },
    {
      title: "Quality",
      description: "Writing clean, maintainable, and efficient code",
      icon: "⭐",
    },
    {
      title: "Learning",
      description: "Continuous growth mindset and adaptability",
      icon: "📚",
    },
    {
      title: "Collaboration",
      description: "Effective teamwork and communication skills",
      icon: "🤝",
    },
  ];

  const tabContent = {
    story: (
      <div className="space-y-6">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hello! I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Ankit Agrawal
            </span>
            , a passionate final year{" "}
            <span className="font-semibold">
              B.Tech Computer Science & Engineering
            </span>{" "}
            student at{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              IIIT Naya Raipur
            </span>{" "}
            with a deep love for technology and innovation.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My coding journey began in my first year when I wrote my first
            "Hello World" program. Since then, I've been on an exciting
            adventure exploring various domains from web development to
            artificial intelligence. I believe in the power of technology to
            solve real-world problems and create meaningful impact.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source
            projects, participating in hackathons, or exploring the latest tech
            trends. I'm always eager to learn new technologies and collaborate
            with fellow developers to build amazing solutions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    interests: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm passionate about various aspects of technology and continuously
          exploring new domains:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <div
              key={interest.name}
              className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">{interest.icon}</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {interest.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Current Focus
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            I'm currently diving deep into{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Full Stack Development
            </span>{" "}
            and
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}
              Machine Learning
            </span>
            , working on projects that combine both domains to create
            intelligent web applications.
          </p>
        </div>
      </div>
    ),
    values: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          The principles that guide my approach to development and life:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">{value.icon}</span>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {value.title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Life Motto
          </h4>
          <p className="text-xl font-medium text-blue-600 dark:text-blue-400 italic">
            "Code with purpose, learn with passion, and build for impact."
          </p>
        </div>
      </div>
    ),
  };

  const tabs = [
    { key: "story", label: "My Story", icon: "📖" },
    { key: "interests", label: "Interests", icon: "🎯" },
    { key: "values", label: "Values", icon: "⚖️" },
  ];

  return (
    <section id="about" className="my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get to know the person behind the code
        </p>
      </div>

      {/* Profile Card */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  AA
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Ankit Agrawal
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  B.Tech CSE Final Year • IIIT Naya Raipur • CGPA: 9.44
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Passionate developer focused on creating innovative solutions
                  and continuous learning. Experienced in full-stack development
                  with a growing interest in AI/ML applications.
                </p>

                {/* Quick Contact */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="mailto:ankitagrawalofficial525@gmail.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <span>📧</span>
                    <span>Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankit-agrawal-59b97a257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">{tabContent[activeTab]}</div>
      </div>
    </section>
  );
}

export default About;
