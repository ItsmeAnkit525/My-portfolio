import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      name: "Email",
      value: "ankitagrawalofficial525@gmail.com",
      link: "mailto:ankitagrawalofficial525@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      description: "Send me an email",
      color: "from-red-500 to-pink-500",
      bgColor:
        "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ankit-agrawal-59b97a257",
      link: "https://www.linkedin.com/in/ankit-agrawal-59b97a257/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      description: "Let's connect professionally",
      color: "from-blue-500 to-cyan-500",
      bgColor:
        "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      name: "GitHub",
      value: "github.com/ItsmeAnkit525",
      link: "https://github.com/ItsmeAnkit525",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      description: "Check out my code",
      color: "from-gray-600 to-gray-800",
      bgColor:
        "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900",
      borderColor: "border-gray-200 dark:border-gray-700",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = "service_f6va174";
      const templateID = "template_6f8kbu9";
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; // You'll need to add this to .env

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "ankitagrawalofficial525@gmail.com",
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="my-12 sm:my-20 px-4 sm:px-0">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
          I'm always excited to discuss new opportunities, collaborate on
          projects, or just have a chat about technology
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
        {/* Contact Information */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Let's create
              something amazing together!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={method.name}
                href={method.link}
                target={
                  method.name !== "Email" && method.name !== "Phone"
                    ? "_blank"
                    : undefined
                }
                rel={
                  method.name !== "Email" && method.name !== "Phone"
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`block group ${method.bgColor} ${method.borderColor} border rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center text-white text-lg sm:text-xl shadow-lg flex-shrink-0`}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                      {method.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {method.description}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 break-all sm:break-words">
                      {method.value}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Response Time */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl">⚡</span>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                Quick Response
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I typically respond to emails and messages within 24 hours during
              weekdays.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-4 sm:px-0">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors text-sm sm:text-base"
                  placeholder="Let's collaborate on a project"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                )}
              </button>
            </form>

            {/* Success/Error Messages */}
            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  submitStatus === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800"
                }`}
              >
                {submitStatus === "success" ? (
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>❌</span>
                    <span>
                      Failed to send message. Please try again or contact me
                      directly.
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 sm:mt-16 text-center px-4 sm:px-0">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Ready to Start Something Great?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, whether it's a
            full-time position, freelance work, or just an interesting project
            to collaborate on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://drive.google.com/file/d/1R6TsqKQQdElMXYCPcqJmwbGYR4JWUQsc/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
