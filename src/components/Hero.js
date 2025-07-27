import React, { useState, useEffect } from "react";

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Software Developer 💻",
    "Full Stack Engineer 🚀",
    "Problem Solver 🧩",
    "Tech Enthusiast 🌟",
    "Code Architect 🏗️",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ItsmeAnkit525",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankit-agrawal-59b97a257/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      url: "mailto:ankitagrawalofficial525@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      color: "hover:text-red-500",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 dark:from-blue-400/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 dark:from-cyan-400/20 dark:to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 dark:from-purple-400/10 dark:to-pink-600/10 rounded-full blur-3xl animate-spin slow-spin"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up delay-200">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Ankit Agrawal
          </span>
        </h1>

        {/* Dynamic Role */}
        <div className="mb-8 animate-fade-in-up delay-400">
          <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-2">
            Final Year B.Tech CSE Student at IIIT Naya Raipur
          </p>
          <div className="h-12 flex items-center justify-center">
            <span
              className={`text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ${
                isTyping
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-95"
              }`}
            >
              {roles[currentRole]}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-600">
          Passionate about creating innovative solutions and building amazing
          web experiences. Always eager to learn new technologies and solve
          complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-800">
          <a
            href="https://drive.google.com/file/d/1R6TsqKQQdElMXYCPcqJmwbGYR4JWUQsc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <span className="mr-2">📄</span>
            Download Resume
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
          >
            <span className="mr-2">💬</span>
            Let's Connect
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in-up delay-1000">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.1}s` }}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Subtle Scroll Hint */}
        <div className="mt-16 animate-fade-in-up delay-1200">
          <div className="flex justify-center">
            <svg
              className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-bounce opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .slow-spin {
          animation: spin 20s linear infinite;
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
}

export default Hero;
