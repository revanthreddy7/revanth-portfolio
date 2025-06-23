import React from 'react';

const About = () => {
  return (
<div id="about" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pastelblue to-pastelgreen px-8 pt-24">
<h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-600 max-w-3xl text-center">
        Software Engineer with 2+ years of experience in developing scalable backend systems and distributed storage solutions
using C++, Python and Java. Proficient in systems-level programming, cloud storage infrastructure, and debugging at scale.
Experienced in building fault-tolerant modules for high-availability distributed systems and optimizing performance-critical code
paths for Exascale workloads
      </p>
    </div>
  );
};

export default About;
