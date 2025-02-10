// pages/Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Aligning Diffusion Models with Online Preference Learning",
      description: `Our proposed EXPO framework significantly improves text-to-image generation quality through iterative online exploration. 
        By combining limited offline data with self-generated samples via explicit exploration mechanisms, 
        EXPO achieves superior performance compared to models trained solely on offline data. 
        The samples above demonstrate EXPO's enhanced generation capabilities on unseen prompts across diverse styles and content using only sd1.5 model.`,
      image: "/project1.png",
      showDemo: false,
      showGitHub: false,
      links: {
        paper: "https://vincentzhan.com/paper/expo",
        demo: "#",
      },
    },
    {
      title: "PunkFusion",
      description: (
        <>
          PunkFusion is an experimental project that integrates the iconic{" "}
          <a
            href="https://cryptopunks.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CryptoPunks
          </a>{" "}
          style, Ethereum's decentralized technology, and cutting-edge generative AI to push the boundaries of NFT creation.
        </>
      ),
      image: "/project2.png",
      links: {
        github: "https://github.com/vincezh2000/PunkFusion/",
        demo: "https://huggingface.co/spaces/vince2000/PunkFusion",
      },
    },
    {
      title:
        "Supply Chain-Enhanced Stock Return Forecasting with Temporal Graph Convolution",
      description:
        "This project constructs a supply chain relationship matrix for China's A-share market and leverages an RSR model (combining LSTM and Temporal Graph Convolution) to derive supply chain propagation factors that significantly improve stock return forecasting, as confirmed by robust quintile portfolio backtesting results.",
      image: "/project3.png",
      showDemo: false,
      links: {
        github:
          "https://github.com/fulifeng/Temporal_Relational_Stock_Ranking",
        demo: "#", // 保留原本的 demo
        paper:
          "https://vincentzhan.com/paper/fe_return",
      },
    },
  ];

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-poiret font-bold text-3xl text-center text-[#A259FF] mb-12 neon-glow">
        Research & Projects
      </h1>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-[#121212] rounded-lg overflow-hidden border border-[#A259FF]/20 hover:shadow-[0_0_20px_#A259FF]/20 transition-all duration-500 p-6"
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
                {/* GitHub Link (只在 showGitHub !== false 且 links.github 存在时显示) */}
                {project.showGitHub !== false && project.links.github && (
                  <ProjectLink href={project.links.github} text="GitHub" />
                )}

                {/* Live Demo Link (只在 showDemo !== false 且 links.demo 存在时显示) */}
                {project.showDemo !== false && project.links.demo && (
                  <ProjectLink href={project.links.demo} text="Live Demo" />
                )}

                {/* Paper Link (如果存在 paper 字段，则显示按钮) */}
                {project.links.paper && (
                  <ProjectLink href={project.links.paper} text="Paper" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectLink({ href, text }) {
  // 如果 href 是对象并标记为 isDisabled，则返回禁用状态的按钮
  if (typeof href === "object" && href.isDisabled) {
    return (
      <span className="px-4 py-2 border border-gray-500 rounded text-gray-500 cursor-not-allowed">
        {href.text}
      </span>
    );
  }

  // 正常渲染超链接按钮
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border border-[#A259FF] rounded text-[#A259FF] hover:bg-[#A259FF]/10 hover:shadow-[0_0_10px_#A259FF] transition-all duration-300"
    >
      {text}
    </a>
  );
}

export default Projects;
