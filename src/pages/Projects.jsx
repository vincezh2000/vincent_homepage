// pages/Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Aligning Diffusion Models with Online Preference Learning",
      description: "Our proposed EXPO framework significantly improves text-to-image generation quality through iterative online training. By combining limited offline data with self-generated samples via explicit exploration mechanisms, EXPO achieves superior performance compared to models trained solely on offline data. The samples above demonstrate EXPO's enhanced generation capabilities on unseen prompts across diverse styles and content.",
      image: "/project1.png",
      showDemo: false,
      links: {
        github: {
          text: "GitHub (Coming Soon)",
          isDisabled: true
        },
        demo: "#"
      }
    },
    {
      title: "PunkFusion",
      description: "PunkFusion is an experimental project that integrates the iconic CryptoPunk style, Ethereum’s decentralized technology, and cutting-edge generative AI to push the boundaries of NFT creation.",
      image: "/project2.png",
      showDemo: false,
      links: {
        github: "https://github.com/vincezh2000/PunkFusion/",
        demo: "#"
      }
    },
    
    // {
    //   title: "AI-Powered Smart Contracts",
    //   description: "Implementation of machine learning algorithms to enhance smart contract security and efficiency.",
    //   image: "/project3.jpg",
    //   links: {
    //     github: "https://github.com/vincentzhan",
    //     demo: "#"
    //   }
    // }
  ];

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-sincopa text-3xl text-center text-[#A259FF] mb-12 neon-glow">
        Research & Projects
      </h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-[#121212] rounded-lg overflow-hidden
                     border border-[#A259FF]/20 hover:shadow-[0_0_20px_#A259FF]/20 transition-all duration-500 p-6"
          >
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="font-sincopa text-2xl text-[#A259FF] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 font-roboto leading-relaxed">
                {project.description}
              </p>
              <div className="flex space-x-4 pt-4">
                <ProjectLink href={project.links.github} text="GitHub" />
                {project.showDemo !== false && project.links.demo && 
                  <ProjectLink href={project.links.demo} text="Live Demo" />
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectLink({ href, text }) {
  if (typeof href === 'object' && href.isDisabled) {
    return (
      <span className="px-4 py-2 border border-gray-500 rounded text-gray-500 cursor-not-allowed">
        {href.text}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-[#A259FF] rounded text-[#A259FF]
               hover:bg-[#A259FF]/10 hover:shadow-[0_0_10px_#A259FF]
               transition-all duration-300"
    >
      {text}
    </a>
  );
}

export default Projects;