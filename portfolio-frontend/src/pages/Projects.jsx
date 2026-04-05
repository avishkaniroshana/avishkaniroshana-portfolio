import React from "react";
import { Github, ExternalLink } from "lucide-react";
import GoToTop from "../components/common/GoToTop";

const projects = [
  {
    name: "LMS Management System – JavaTecmis",
    description:
      "Contributed to the development of a Learning Management System (LMS) designed for students, lecturers, technical officers, and administrators. My primary responsibility was the Lecturer Module, where I implemented features to manage courses, student assessments, and academic performance tracking. The system supports exam and quiz mark management and includes functionality to calculate GPA levels, helping lecturers evaluate student performance effectively.",
    keyFeatures: [
      "Course Management",
      "Exam & Quiz Marks Handling",
      "GPA Calculation",
      "Role-based Access Control",
    ],
    tech: ["Java", "JavaFx", "MySQL"],
    github: "https://github.com/pathuGIT/JavaTecMis",
    live: "",
  },
  {
    name: "Library Management System",
    description:
      " Developed a desktop-based Library Management System using JavaFX, designed to increase efficiency in library operations and improve data organization. The system enables efficient management of books, members, authors, publishers, and categories, along with handling borrowing and returning processes with fine calculations. I applied multiple software design patterns like MVC (Model-View-Controller), Layered Architecture, Factory Pattern, Singleton Patternto to ensure clean architecture, scalability, and maintainability.",
    keyFeatures: [
      "Books | Publishers | Authors | Categories Management",
      "Member Management",
      "Borrowing & Returning System with Fine Calculation",
      "Structured and Modular Codebase",
    ],
    tech: ["Java", "JavaFX", "MySQL"],
    github:
      "https://github.com/avishkaniroshana/JAVA-FX_Web_Application-Library_Management_System",
    live: "",
  },
  {
    name: "Chat Application - (Real-Time Messaging System)",
    description:
      "Developed a full-stack real-time chat application using Spring Boot, React, WebSocket, and MongoDB, designed to support scalable and efficient communication between users. The system enables users to join chat rooms and exchange messages instantly using WebSocket-based real-time communication (STOMP + SockJS). To improve performance and scalability, I implemented a multi-threaded message processing system using Java RMI and ThreadPoolExecutor, allowing asynchronous message handling without blocking real-time message delivery. Messages are stored in MongoDB, and the application includes additional features such as message pagination, live server statistics monitoring, and efficient room-based communication.",
    keyFeatures: [
      "Real-time messaging using WebSocket (STOMP protocol)",
      "Room-based chat system (join/create chat rooms)",
      "Asynchronous message processing using Java RMI",
      "Multi-threading with ThreadPoolExecutor for high performance",
      "Message persistence using MongoDB",
      "Pagination support for chat history",
      "Live server statistics dashboard (thread pool monitoring)",
      "REST API support alongside WebSocket communication",
    ],
    tech: [
      "Spring Boot + WebSocket | Java RMI | ThreadPoolExecutor",
      "React + SockJS | STOMP.js",
      "MongoDB",
    ],
    github:
      "https://github.com/avishkaniroshana/Chat-application-springboot",
    live: "",
  },

  {
    name: "Taprodev Computers - Computer Shop Management System",
    description:
      "Developed a full-stack Computer Shop Management System as part of a university group project, focusing on the E-Commerce Web Site. I designed and implemented CRM - Customer Relationship Management module, with customer-centric features including Sign Up / Sign In,Pprofile Management, and a Reward-based Loyalty System to enhance customer engagement. Additionally, I developed a review and rating mechanism, enabling customers to share feedback and improving overall user experience. This project followed agile development with sprints as same as integrated both frontend and backend technologies to ensure scalability and maintainability in a real-world business context.",
    keyFeatures: [
      "Sign Up / Sign In + JWT Authentication",
      "Customer Profile Management",
      "Reward & Loyalty System",
      "Product Review & Rating System",
    ],
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    github: "https://github.com/AnjanaKvd/ZeroX",
    live: "http://20.188.113.189:3000/",
  },
  {
    name: "Rajawarama Shop Project",
    description:
      "Designed and developed a full-stack shop management system for a local business in Bandarawela, focused on handling event-related services and bookings. The system provides a flexible and user-friendly platform for managing customizable bookings, including dancing group packages, special event packages, and dress-only reservations. I also implemented a comprehensive admin panel to manage users, booking requests, inventory, and service categories efficiently. This project focused real-world usability, business logic handling, and dynamic data management",
    keyFeatures: [
      "JWT Authentication + Refresh Token with Role-based Access Control",
      "Customizable Booking Packages (Dancing Groups & Special Packages)",
      "Dress Rental & Management",
      "Admin Dashboard with Full Control",
      "Category & Inventory Management",
      "Performer & Package Item Management",
    ],
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    github: "https://github.com/avishkaniroshana/Rajawarama-Shop",
    live: "http://20.188.113.189/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen px-6 lg:px-24 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10">
        My Projects
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden
              rounded-2xl p-[1px]
              bg-gradient-to-br
              from-yellow-400/40 via-yellow-300/20 to-yellow-200/40
              dark:from-slate-400/40 dark:via-slate-300/20 dark:to-slate-200/40
              hover:scale-[1.02] transition duration-500
            "
          >
            {/* Inner Card */}
            <div
              className="
                h-full min-h-[480px] flex flex-col
                rounded-2xl p-8
                bg-white/80 dark:bg-slate-900/80
                backdrop-blur-xl
                border border-black/5 dark:border-white/10
                shadow-md group-hover:shadow-2xl
                transition duration-500
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br
                  from-yellow-300/30 via-transparent to-yellow-200/30
                  dark:from-slate-300/30 dark:to-slate-200/30
                  blur-2xl transition duration-500
                "
              />

              {/* Project Name */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              {project.keyFeatures && (
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-xs font-medium rounded-full
                      bg-blue-50 text-blue-600
                      dark:bg-blue-500/10 dark:text-blue-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 text-sm font-medium
                    text-gray-700 dark:text-gray-300
                    hover:text-blue-600 dark:hover:text-blue-400
                  "
                >
                  <Github size={16} />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 text-sm font-medium
                      text-gray-700 dark:text-gray-300
                      hover:text-green-600 dark:hover:text-green-400
                    "
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <GoToTop />
    </div>
  );
};

export default Projects;
