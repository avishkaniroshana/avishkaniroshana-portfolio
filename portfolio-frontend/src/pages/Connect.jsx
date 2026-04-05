import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import GoToTop from "../components/common/GoToTop";

const contacts = [
  {
    name: "Email",
    link: "mailto:avishkanperera4@gmail.com",
    icon: <Mail size={20} />,
    description: "Send me an email",
    bg: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/avishka-niroshana-92ba3524b",
    icon: <Linkedin size={20} />,
    description: "Connect with me professionally",
    bg: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    name: "GitHub",
    link: "https://github.com/avishkaniroshana",
    icon: <Github size={20} />,
    description: "Check out my projects",
    bg: "bg-gray-50 text-gray-800 dark:bg-gray-800/30 dark:text-gray-200",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/94705386866",
    icon: <MessageCircle size={20} />,
    description: "Chat with me directly",
    bg: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
];

const Connect = () => {
  return (
    <section className="min-h-screen px-6 lg:px-24 py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Connect with Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Feel free to reach out through email, LinkedIn, GitHub, or WhatsApp.
          I’m always open for new opportunities, collaborations, and
          discussions.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex flex-col items-center text-center p-6 rounded-2xl shadow-sm
              hover:shadow-lg transition
              ${contact.bg}
            `}
          >
            <div className="p-4 rounded-full border border-gray-200 dark:border-slate-700 mb-4 flex items-center justify-center">
              {contact.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
              {contact.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {contact.description}
            </p>
          </a>
        ))}
      </div>
      <GoToTop />
    </section>
  );
};

export default Connect;
