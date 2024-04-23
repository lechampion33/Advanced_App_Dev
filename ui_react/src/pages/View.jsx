import React, { useState } from 'react';

function View() {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      title: 'Module 1: Introduction to AI',
      chapters: ['Chapter 1: What is AI?', 'Chapter 2: History of AI', 'Chapter 3: AI Applications'],
    },
    {
      title: 'Module 2: Machine Learning Basics',
      chapters: ['Chapter 1: Introduction to ML', 'Chapter 2: Types of ML', 'Chapter 3: ML Algorithms'],
    },
    {
      title: 'Module 3: Neural Networks',
      chapters: ['Chapter 1: Introduction to NN', 'Chapter 2: Types of NN', 'Chapter 3: Building NN'],
    },
    {
      title: 'Module 4: Deep Learning',
      chapters: ['Chapter 1: Introduction to Deep Learning', 'Chapter 2: DL Frameworks', 'Chapter 3: Advanced DL Techniques'],
    },
    {
      title: 'Module 5: AI Ethics and Future',
      chapters: ['Chapter 1: Ethical Considerations', 'Chapter 2: Future of AI', 'Chapter 3: Impact of AI'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4">AI Fundamentals: From Basic to Advanced</h1>
        {modules.map((module, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full py-2 px-4 text-left bg-blue-800 text-white font-semibold rounded-md mb-2"
              onClick={() => setSelectedModule(selectedModule === index ? null : index)}
            >
              {module.title}
            </button>
            {selectedModule === index && (
              <div className="border border-gray-300 rounded-md p-4">
                {module.chapters.map((chapter, i) => (
                  <div key={i} className="mb-2">
                    {chapter}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;
