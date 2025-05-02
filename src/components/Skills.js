import React from 'react';

const skills = [
  'Java', 'Python', 'AWS', 'Spring Boot', 'React', 'Node.js', 'MySQL', 'PostgreSQL',
  'MongoDB', 'Docker', 'Kafka', 'Linux', 'TensorFlow', 'Pandas', 'NumPy', 'Git', 'HTML/CSS'
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pastelgreen to-pastelblue px-8 pt-24">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center text-gray-700 font-semibold">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
