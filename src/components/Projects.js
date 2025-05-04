import React from 'react';

const projects = [
  {
    title: "Price Prediction of Amazon Products",
    description:"developed a BERT-based NLP regression model to predict Amazon product prices using a dataset of over 800,000 listings, incorporating product titles, descriptions, and sales ranks as key features. The project involved extensive data preprocessing including stemming, lemmatization, stop word removal, and normalization, which reduced inconsistencies by 35% and improved processing efficiency by 25%. Leveraging Python and TensorFlow on GPU-accelerated infrastructure, I transformed textual and categorical data into model-ready formats and built a robust deep learning pipeline. Through iterative hyperparameter tuning and evaluation across varying training set sizes (50%, 60%, and 75%), the model achieved its best performance at 60% data utilization with an optimal RMSE of 48.59, successfully balancing accuracy and computational efficiency.",
    tech: "Python, TensorFlow, BERT, Data Preprocessing, Hyperparameter Tuning"
  },
  {
    title: "Adversarial Prompt Injection for LLM Vulnerability Analysis",
    description: "Engineered and launched adversarial prompt injection attacks (including prompt overwriting, roleplay jailbreaking, and contradiction loops) to systematically evaluate vulnerabilities in LLM behavior, capturing failure patterns and inconsistencies in safety alignment. Constructed a high-quality synthetic dataset of 1,500 prompt–response pairs, including over 1,000 diverse QA pairs across 'what', 'why', and 'how' prompts and 50 adversarial edge cases involving ethical traps, policy violations, and factual contradictions. Fine-tuned Meta’s OPT-125M model using LoRA and PEFT techniques, optimizing for low-resource training efficiency while enhancing model alignment and robustness; achieved a training loss of 0.24 with clear behavioral improvements. Post-finetuning evaluation confirmed resilience against adversarial attacks, with the updated model successfully refusing unsafe prompts, reducing output repetition, and maintaining consistency across previously exploitable edge cases",
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
