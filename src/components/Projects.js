import React, { useState } from "react";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Institute Unified Complaint System",
      description:
        "Comprehensive complaint management system for educational institutions with role-based access control.",
      longDescription:
        "Built a Flutter-based complaint management system for educational institutions featuring real-time complaint tracking, Firebase authentication, role-based access (Student/Admin), complaint categorization (Mess/Hostel/Academic/Infrastructure), admin dashboard for complaint resolution, and cross-platform support for Android, iOS, Web, and Desktop.",
      tech: [
        "Flutter",
        "Dart",
        "Firebase",
        "Authentication",
        "Real-time Database",
        "Material Design",
      ],
      category: "mobile",
      image: "🏫",
      github:
        "https://github.com/ItsmeAnkit525/institute-unified-complaint-system",
      live: null,
      featured: true,
      status: "Completed",
      year: "2023",
    },
    {
      id: 2,
      title: "Supply Chain Management using Blockchain",
      description:
        "Decentralized supply chain tracking system for medicines using blockchain technology.",
      longDescription:
        "Developed a full-stack blockchain application for transparent medicine supply chain management. Features include smart contract integration, participant registration (Supplier/Manufacturer/Distributor/Retailer), medicine lifecycle tracking, shipment management with real-time status updates, transaction history recording, and secure Ethereum-based operations.",
      tech: [
        "Solidity",
        "React",
        "Node.js",
        "Web3.js",
        "MongoDB",
        "Truffle",
        "Ganache",
        "TailwindCSS",
      ],
      category: "blockchain",
      image: "⛓️",
      github:
        "https://github.com/ItsmeAnkit525/Supply-Chain-Management-using-Blockchain-Technology",
      live: null,
      featured: true,
      status: "Completed",
      year: "2024",
    },
    {
      id: 3,
      title: "Customer Support Chatbot using NLP",
      description:
        "Intelligent customer support chatbot with natural language processing capabilities.",
      longDescription:
        "Created an AI-powered customer support chatbot using machine learning and NLP techniques. Features include intent recognition with Logistic Regression, TF-IDF vectorization for text processing, conversation history logging, Streamlit web interface, and support for various customer service queries including account issues, product information, and business hours.",
      tech: [
        "Python",
        "Streamlit",
        "Scikit-learn",
        "NLTK",
        "Pandas",
        "NLP",
        "TF-IDF",
        "Logistic Regression",
      ],
      category: "ai",
      image: "🤖",
      github:
        "https://github.com/ItsmeAnkit525/Implementation-of-Chatbot-using-NLP",
      live: null,
      featured: true,
      status: "Completed",
      year: "2024",
    },
    // {
    //   id: 4,
    //   title: "Task Management App",
    //   description:
    //     "Collaborative project management tool with real-time updates and team features.",
    //   longDescription:
    //     "Built a comprehensive task management application with features like project creation, task assignment, progress tracking, team collaboration, and real-time notifications.",
    //   tech: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Redux"],
    //   category: "fullstack",
    //   image: "📋",
    //   github: "https://github.com/ItsmeAnkit525/task-manager",
    //   live: "https://your-taskmanager-demo.com",
    //   featured: false,
    //   status: "Completed",
    //   year: "2023",
    // },
    // {
    //   id: 5,
    //   title: "Weather Forecast App",
    //   description:
    //     "Beautiful weather application with location-based forecasts and interactive charts.",
    //   longDescription:
    //     "Responsive weather application providing current conditions, 7-day forecasts, and interactive weather charts. Features location detection and multiple city tracking.",
    //   tech: ["React", "Chart.js", "Weather API", "Geolocation", "TailwindCSS"],
    //   category: "frontend",
    //   image: "🌤️",
    //   github: "https://github.com/ItsmeAnkit525/weather-app",
    //   live: "https://your-weather-demo.com",
    //   featured: false,
    //   status: "Completed",
    //   year: "2023",
    // },
    // {
    //   id: 6,
    //   title: "E-Commerce Platform",
    //   description:
    //     "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard.",
    //   longDescription:
    //     "Built a comprehensive e-commerce platform featuring user registration, product catalog, shopping cart, secure payment processing with Stripe, order management, and admin dashboard for inventory management.",
    //   tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    //   category: "fullstack",
    //   image: "🛒",
    //   github: "https://github.com/ItsmeAnkit525/ecommerce-platform",
    //   live: "https://your-ecommerce-demo.com",
    //   featured: false,
    //   status: "Completed",
    //   year: "2023",
    // },
  ];

  const categories = [
    { key: "all", name: "All Projects", icon: "🌟" },
    { key: "fullstack", name: "Full Stack", icon: "🚀" },
    { key: "ai", name: "AI/ML", icon: "🧠" },
    { key: "frontend", name: "Frontend", icon: "💻" },
    { key: "blockchain", name: "Blockchain", icon: "⛓️" },
    { key: "mobile", name: "Mobile", icon: "📱" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my development journey and technical expertise across
          various domains
        </p>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          🌟 Highlighted Work
        </h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{project.image}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <span>🐙</span>
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <span>🚀</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFilter === category.key
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* All Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image/Icon */}
            <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
              <span className="text-6xl">{project.image}</span>
            </div>

            <div className="p-6">
              {/* Title and Status */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  View Code →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Projects Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {projects.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Total Projects
          </div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
            {projects.filter((p) => p.status === "Completed").length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Completed
          </div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            {[...new Set(projects.flatMap((p) => p.tech))].length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Technologies
          </div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            {featuredProjects.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Featured
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
