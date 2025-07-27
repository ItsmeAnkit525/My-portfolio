import React, { useState } from "react";

function Education() {
  const [activeTab, setActiveTab] = useState("formal");

  const formalEducation = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IIIT Naya Raipur",
      location: "Naya Raipur, Chhattisgarh",
      duration: "2022 - 2026",
      status: "Final Year",
      cgpa: "9.44/10",
      icon: "🎓",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Web Technologies",
        "Software Engineering",
        "Artificial Intelligence",
        "Computer Graphics",
        "Distributed Systems",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (XII)",
      institution: "Vikash Residential School",
      location: "Bargarh, Odisha",
      duration: "2020 - 2022",
      status: "Completed",
      percentage: "96.4%",
      icon: "📚",
      highlights: [
        "Science Stream - Physics, Chemistry, Mathematics, Computer Science",
      ],
    },
  ];

  const certifications = [
    {
      name: "Java Full Stack",
      issuer: "Wipro TalentNext Program",
      date: "2024",
      // credentialId: "WIPRO-JFS-2024",
      icon: "☕",
      skills: [
        "Java",
        "Spring Boot",
        "Full Stack Development",
        "Enterprise Applications",
      ],
      status: "Active",
      verificationLink: "https://cert.diceid.com/cid/qw7c8cZEMG?verify=true",
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "IBM SkillBuild",
      date: "2024",
      // credentialId: "IBM-CS-2024",
      icon: "🔒",
      skills: [
        "Cybersecurity",
        "Network Security",
        "Risk Management",
        "Security Fundamentals",
      ],
      status: "Active",
      verificationLink:
        "https://drive.google.com/file/d/14UReDhuLJihrTmibD_1XcEojmRa9cs7h/view",
    },
    {
      name: "Introduction to AI",
      issuer: "IBM SkillBuild",
      date: "2024",
      // credentialId: "IBM-AI-2024",
      icon: "🤖",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Fundamentals",
        "Data Science",
      ],
      status: "Active",
      verificationLink:
        "https://drive.google.com/file/d/1qSHvLKqzXO1CgdIVcTjYvVldUkggJzA9/view",
    },
    {
      name: "Introduction to Front-End Development",
      issuer: "Meta (via Coursera)",
      date: "2024",
      credentialId: "3GVWUYLFQLDF",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript", "React", "Front-End Development"],
      status: "Active",
      verificationLink:
        "https://www.coursera.org/account/accomplishments/verify/3GVWUYLFQLDF",
    },
    // {
    //   name: "Full Stack Web Development",
    //   issuer: "FreeCodeCamp",
    //   date: "July 2023",
    //   credentialId: "FCC-FS-33333",
    //   icon: "🚀",
    //   skills: ["MERN Stack", "APIs", "Databases"],
    //   status: "Active",
    // },
    // {
    //   name: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credentialId: "AWS-CP-2023",
    //   icon: "☁️",
    //   skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    //   status: "Active",
    // },
  ];

  const getGradeColor = (percentage) => {
    const num = parseInt(percentage);
    if (num >= 90) return "text-green-600 dark:text-green-400";
    if (num >= 80) return "text-blue-600 dark:text-blue-400";
    if (num >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const tabs = [
    { key: "formal", label: "Education", icon: "🎓" },
    { key: "certifications", label: "Certifications", icon: "📜" },
  ];

  return (
    <section
      id="education"
      className="my-12 sm:my-20 px-4 sm:px-0 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent break-words">
          Education & Credentials
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0 break-words">
          My academic journey and professional development through continuous
          learning
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 sm:mb-8 px-4 sm:px-0">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 w-full max-w-md sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm flex-1 sm:flex-none justify-center ${
                activeTab === tab.key
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px] overflow-hidden">
        {activeTab === "formal" && (
          <div className="space-y-8">
            {formalEducation.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Left Side - Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-4xl">{edu.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 break-words">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1 break-words">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-2 break-words">
                            📍 {edu.location}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center space-x-1">
                              <span>📅</span>
                              <span>{edu.duration}</span>
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                edu.status === "Final Year"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                  : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              }`}
                            >
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Academic Performance */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {edu.cgpa && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              CGPA
                            </div>
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                              {edu.cgpa}
                            </div>
                          </div>
                        )}
                        {edu.percentage && (
                          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Percentage
                            </div>
                            <div
                              className={`text-2xl font-bold ${getGradeColor(
                                edu.percentage
                              )}`}
                            >
                              {edu.percentage}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Highlights */}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <span className="text-blue-500 mt-1">✓</span>
                                <span className="text-gray-600 dark:text-gray-400">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Right Side - Additional Details */}
                    <div className="lg:w-80 space-y-6">
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Key Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm ${
                                  idx >= 6 ? "hidden sm:inline-block" : ""
                                }`}
                              >
                                {course}
                              </span>
                            ))}
                            {edu.coursework.length > 6 && (
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-300 rounded-full text-sm sm:hidden">
                                +{edu.coursework.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {edu.subjects && edu.subjects.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Subject Scores
                          </h4>
                          <div className="space-y-2">
                            {edu.subjects.map((subject, idx) => (
                              <div
                                key={idx}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                {subject}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.projects && edu.projects.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            Academic Projects
                          </h4>
                          <ul className="space-y-2">
                            {edu.projects.map((project, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                • {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certifications" && (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1 break-words">
                        {cert.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 break-words">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 flex-wrap gap-2">
                        <span className="break-words">📅 {cert.date}</span>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs whitespace-nowrap">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 break-all">
                      Credential ID: {cert.credentialId}
                      {cert.verificationLink && (
                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 whitespace-nowrap"
                        >
                          🔗 Verify
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {certifications.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Total Certifications
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {certifications.filter((c) => c.status === "Active").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Active
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  4
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Platforms
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  2024
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Latest Year
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;
