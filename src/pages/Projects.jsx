// pages/Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Aligning Diffusion Models with Online Preference Learning",
      description:
        "Our proposed EXPO framework significantly improves text-to-image generation quality through iterative online training. By combining limited offline data with self-generated samples via explicit exploration mechanisms, EXPO achieves superior performance compared to models trained solely on offline data. The samples above demonstrate EXPO's enhanced generation capabilities on unseen prompts across diverse styles and content.",
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
      description:
        "PunkFusion is an experimental project that integrates the iconic CryptoPunk style, Ethereum’s decentralized technology, and cutting-edge generative AI to push the boundaries of NFT creation.",
      image: "/project2.png",
      showDemo: false,
      links: {
        github: "https://github.com/vincezh2000/PunkFusion/",
        demo: "#"
      }
    },
    {
      title: "Supply Chain-Enhanced Stock Return Forecasting with Temporal Graph Convolution",
      description:
        "This project constructs a supply chain relationship matrix for China’s A-share market and leverages an RSR model (combining LSTM and Temporal Graph Convolution) to derive supply chain propagation factors that significantly improve stock return forecasting, as confirmed by robust quintile portfolio backtesting results.",
      image: "/project3.png",
      showDemo: false,
      // 在这里添加一个 paper 字段
      links: {
        github: "https://github.com/fulifeng/Temporal_Relational_Stock_Ranking",
        demo: "#",  // 保留原本的 demo
        paper: "https://www.researchgate.net/profile/Tianyu-Zhan-5/publication/388825504_jiyugongsiguanlianguanxidetushenjingwangluogupiaoshouyiluyuce/links/67a7f810645ef274a47705ba/jiyugongsiguanlianguanxidetushenjingwangluogupiaoshouyiluyuce.pdf?origin=publicationDetail&_sg%5B0%5D=eXmp9cdFY-4cz5Pqmg5KHuHvy93zBCgH5x7Sd3-RMAFC7Fe21UgQmPJkuPMj0PFigvK4lMKnNZF_5czmC_K5ig.fif2Pk0X4ze54XKrfzXsuR9yTIyFOp1BRV660QCIDFewkjFRI028F4AS4quoxdNCyF7WGQhW6gqXF3fZTpGIDg&_sg%5B1%5D=Jk3EUecROOea2c3AOxTKqBiRXe9dxs9UPaw21xiu5K0gEGwNzE0J0DTJ0QwjvTqS19QYICy_7JkpM8EDflKttLJDtBxfN34nw6DUTxKpJ-6O.fif2Pk0X4ze54XKrfzXsuR9yTIyFOp1BRV660QCIDFewkjFRI028F4AS4quoxdNCyF7WGQhW6gqXF3fZTpGIDg&_iepl=&_rtd=eyJjb250ZW50SW50ZW50IjoibWFpbkl0ZW0ifQ%3D%3D&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InNpZ251cCIsInBhZ2UiOiJwdWJsaWNhdGlvbiIsInBvc2l0aW9uIjoicGFnZUhlYWRlciJ9fQ"
      }
    }
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
                {/* GitHub Link */}
                <ProjectLink href={project.links.github} text="GitHub" />

                {/* Live Demo Link （只要project.showDemo不是false且有demo就显示）*/}
                {project.showDemo !== false && project.links.demo && (
                  <ProjectLink href={project.links.demo} text="Live Demo" />
                )}

                {/* Paper Link （如果存在paper字段，就显示一个Paper按钮） */}
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
  // 如果是一个对象且被标记为isDisabled，则置灰
  if (typeof href === 'object' && href.isDisabled) {
    return (
      <span className="px-4 py-2 border border-gray-500 rounded text-gray-500 cursor-not-allowed">
        {href.text}
      </span>
    );
  }

  // 否则正常渲染链接
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
