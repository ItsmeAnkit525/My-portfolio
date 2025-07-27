import React, { useState, useEffect } from "react";

function Navbar() {
  // Enhanced dark mode initialization - defaults to dark mode
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) {
        return stored === "dark";
      }
      // Default to dark mode instead of system preference
      return true;
    }
    return true; // Default to dark mode on server-side
  });

  // Apply theme changes immediately
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Keyboard accessibility for toggle
  const handleToggleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setDark(!dark);
    }
  };

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
        <a
          href="#hero"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Ankit Agrawal
        </a>
        <ul className="flex gap-6 text-lg" role="menubar">
          <li role="none">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              role="menuitem"
            >
              About
            </a>
          </li>
          <li role="none">
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              role="menuitem"
            >
              Skills
            </a>
          </li>
          <li role="none">
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              role="menuitem"
            >
              Projects
            </a>
          </li>
          <li role="none">
            <a
              href="#education"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              role="menuitem"
            >
              Education
            </a>
          </li>
          <li role="none">
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              role="menuitem"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDark(!dark)}
          onKeyDown={handleToggleKey}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          tabIndex={0}
        >
          {dark ? (
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
