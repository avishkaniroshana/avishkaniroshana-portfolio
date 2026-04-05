import React from "react";
import { FileText } from "lucide-react";

const certifications = [
  {
    title: "Networking NVQ 4",
    issuer: "Technical College - Bandarawela",
    file: "/assets/docs/certificates/Network_NVQ4_KANP.pdf",
  },
  {
    title: "Certificate in Web Development",
    issuer: "JMC School of Computing",
    file: "/assets/docs/certificates/Web_JMC_KANP.pdf",
  },
  {
    title: "AWS Well-Architected",
    issuer: "Amazon Web Services",
    file: "/assets/docs/certificates/Avishka_AWS_Well-Architected.pdf",
  },
  {
    title: "SLIIT AIML Engineer Stage 1",
    issuer: "SLIIT",
    file: "/assets/docs/certificates/Avishka_SLIIT_AIML_EngineerStage1.pdf",
  },
  {
    title: "Coursera AI Essentials",
    issuer: "Coursera",
    file: "/assets/docs/certificates/Avishka_Coursera_AI_Essentials.pdf",
  },
  {
    title: "Postman API Testing Path",
    issuer: "Postman",
    file: "/assets/docs/certificates/Avishka_Postman_API_Testing_Path.pdf",
  },
  {
    title: "ProCode Java Workshop",
    issuer: "ProCode",
    file: "/assets/docs/certificates/Avishka_ProCode_Java_Workshop.pdf",
  },
  {
    title: "Python for Beginners",
    issuer: "E-Certification",
    file: "/assets/docs/certificates/Avishka_Python_for_Beginners_E-Certificate.pdf",
  },
  {
    title: "SLIIT AIML Engineer – Stage",
    issuer: "SLIIT",
    file: "/assets/docs/certificates/Avishka_SLIIT_AIML_EngineerStage1.pdf",
  },
  {
    title: "Certificate in Computer Networking",
    issuer: "Technical College - Bandarawela",
    file: "/assets/docs/certificates/Net_Certificate_KANP.pdf",
  },
  {
    title: "Certificate of Praticipation - 2025 Azure Session Series",
    issuer: "ICTSC - University of Ruhuna",
    file: "/assets/docs/certificates/ICTSC_KANP.pdf",
  },
  {
    title: "Hacktrail 1.0 - Certificate of Participation",
    issuer: "ICTSC - University of Ruhuna",
    file: "/assets/docs/certificates/Hackathon_1.pdf",
  },
  {
    title: "Certificate in English",
    issuer: "University of Sabaragamuwa",
    file: "/assets/docs/certificates/Certificate_English_UOS_KANP.pdf",
  },
  {
    title: "Deploma Foundation in English & Communication",
    issuer: "IBA CAMPUS ",
    file: "/assets/docs/certificates/IBA_English_KANP.pdf",
  },
];

const Certifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="group backdrop-blur-xl bg-white/70 dark:bg-slate-900/70
                     border border-gray-200 dark:border-slate-700
                     rounded-2xl p-6 shadow-md hover:shadow-xl
                     transition-all duration-300"
        >
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600
                          flex items-center justify-center mb-4
                          group-hover:scale-110 transition"
          >
            <FileText size={22} />
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
            {cert.title}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Issued by {cert.issuer}
          </p>

          {/* Action */}
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium
                       text-blue-600 hover:text-blue-700
                       dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Certificate
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
