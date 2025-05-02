import React from 'react';

const projects = [
  {
    title: "Price Prediction of Amazon Products",
    description: "Built an NLP model (BERT) to predict prices based on product titles, features, and sales ranks. Worked with a dataset of 800,000+ listings and optimized RMSE through hyperparameter tuning.",
    tech: "Python, TensorFlow, BERT, Data Preprocessing, Hyperparameter Tuning"
  },
  {
    title: "Adversarial Prompt Injection for LLM Vulnerability Analysis",
    description: "Designed prompt attacks and jailbreak strategies to assess LLM vulnerabilities. Developed mitigation techniques like fine-tuning and adversarial training using synthetic datasets.",
    tech: "Python, LLMs, Red Teaming, Adversarial Testing"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cream to-pastelblue px-8 pt-24">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="mt-4 text-sm text-gray-500">{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
