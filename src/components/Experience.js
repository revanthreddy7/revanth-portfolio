import React from 'react';

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Pragmatic Play India Pvt. Ltd",
    duration: "Jan 2023 - Jul 2023",
    details: [
      "Developed performant backend APIs using C++, optimizing memory and I/O performance for distributed systems under concurrent access patterns",
      "Integrated fault-tolerant features into critical modules with redundancy checks and performance monitors to ensure durability and availability of backend services",
      "Leveraged Linux kernel interfaces and socket-level programming for system-level enhancements across containerized environments",
      "Debugged and analyzed core dumps using GDB and Valgrind to identify memory leaks and threading issues under production load ",
      "Participated in design and review of block storage APIs that enabled efficient handling of high-throughput transactional data"
    ]
  },
  {
    role: "Software Developer",
    company: "Rapid InSys",
    duration: "Sep 2021 - Dec 2022",
    details: [
     "Designed and implemented data replication protocols using Python and C to support consistent distributed pipelines over large-scale clusters",
     "Built scalable backend services on Docker-orchestrated infrastructure integrating Apache NiFi, PostgreSQL, and custom telemetry layers", 
     "Implemented fast write-path pipelines for ingestion-heavy applications using cache-first strategies with Redis and low-latency logging ",
      "Developed disk throughput benchmarking utilities using shell scripts and tested read/write performance under storage-intensive workloads",
      "Simulated distributed node failures to test and improve failover mechanisms and durability guarantees in microservices"



      // "Built real-time shuttle tracking app with Java Spring Boot and React.",
      // "Automated tasks with Linux shell scripts and achieved 99% test coverage.",
      // "Integrated Redis caching and monitored performance with Splunk, Grafana."
    ]
  },
  {
    role: "Mobile Application Developer Intern",
    company: "Cryptographic Solutions",
    duration: "Jul 2021 - Sep 2021",
    details: [
      "Developed mobile application using Flutter, ensuring seamless UI/UX.",
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
