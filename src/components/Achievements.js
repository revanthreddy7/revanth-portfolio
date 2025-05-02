import React from 'react';

const achievements = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    date: "Sep 2023 - Present",
    description: "Achieved CCNA certification, validating skills in networking fundamentals, IP services, security fundamentals, and automation."
  },
  {
    title: "Instructional Student Assistant - Machine Learning",
    date: "May 2024 - Present",
    description: "Teaching Assistant for Machine Learning course at San Jose State University, helping students with assignments, grading, and course projects."
  }
];

const Achievements = () => {
  return (
<div id="achievements" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pastelblue to-pastelgreen px-8 pt-24">
<h2 className="text-4xl font-bold mb-8 text-gray-800">Achievements</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{achievement.title}</h3>
            <p className="text-gray-500">{achievement.date}</p>
            <p className="mt-4 text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
