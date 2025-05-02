import React from 'react';

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Pragmatic Play India Pvt. Ltd",
    duration: "Jan 2023 - Jul 2023",
    details: [
      "Designed and executed RESTful APIs using Java, Spring Boot, SQL.",
      "Integrated Redis caching and Kafka-based message broadcasting.",
      "Deployed services using Docker, Jenkins, and monitored via Grafana."
    ]
  },
  {
    role: "Software Developer",
    company: "Rapid InSys",
    duration: "Sep 2021 - Dec 2022",
    details: [
      "Built real-time shuttle tracking app with Java Spring Boot and React.",
      "Automated tasks with Linux shell scripts and achieved 99% test coverage.",
      "Integrated Redis caching and monitored performance with Splunk, Grafana."
    ]
  },
  {
    role: "Mobile Application Developer Intern",
    company: "Cryptographic Solutions",
    duration: "Jul 2021 - Sep 2021",
    details: [
      "Developed iOS application using Swift, ensuring seamless UI/UX.",
      "Optimized app performance and refactored frontend-backend integration."
    ]
  }
];

const Experience = () => {
  return (
<div id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pastelblue to-cream px-8 pt-24">
<h2 className="text-4xl font-bold mb-8 text-gray-800">Experience</h2>
      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-gray-500">{exp.company} | {exp.duration}</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              {exp.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
