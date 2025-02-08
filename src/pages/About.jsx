// pages/About.jsx

import React from 'react';

function About() {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-8">
          <img
            src="/profile-photo.png"
            alt="Vincent Zhan"
            className="w-96 h-96 object-contain"
          />
        </div>
        
        {/* 将字体换成 Honk */}
        <h1 className="font-honk text-7xl text-[#A259FF] mb-4 neon-glow tracking-normal">
          Vincent Zhan
        </h1>

        {/* 若需要副标题，可取消注释并做相应修改
        <p className="text-xl text-gray-300 font-roboto">
          Researcher & Developer
        </p> */}
      </div>

      {/* Introduction */}
      <div className="max-w-3xl mx-auto space-y-8 font-roboto">
        <section
          className="bg-[#121212] p-8 rounded-lg border border-[#A259FF]/20
                     hover:shadow-[0_0_20px_#A259FF]/20 transition-all duration-500"
        >
          <h2 className="font-sincopa text-2xl text-[#A259FF] mb-4 neon-glow">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hi👋 I'm Tianyu Zhan (Vincent), a passionate student developer focused on 
            cutting-edge generative AI. I'm currently pursuing a Master's degree in Computer Science 
            at <a href="https://cs.nyu.edu/home/index.html" target="_blank" rel="noopener noreferrer" 
            className="text-[#A259FF] hover:underline">New York University's Courant Institute of Mathematical Sciences</a>.
            
            In addition to my CS background, I hold an Economics degree from the 
            <a href="https://en.nsd.pku.edu.cn/" target="_blank" rel="noopener noreferrer" 
            className="text-[#A259FF] hover:underline"> National School of Development at Peking University</a>. 
            This interdisciplinary background fuels my unique perspective in 
            combining technical innovation with economic theory.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My research focuses on Generative AI, particularly diffusion models. I'm fascinated by 
            how text-to-image/video models can better align with human preferences and be 
            made more controllable. Ultimately, I believe the real magic unfolds when 
            AI truly merges with human creativity. 
            Imagine solutions that genuinely collaborate—whether in product design, art, film, or 
            finance analysis. That's the future I'm building toward: technology that 
            goes beyond problem-solving and inspires us to dream bigger.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            ₿eyond academics, I'm also a devoted investor and a ₿ig fan of the crypto space. 
            I'm a quantitative investor drawn to the intersection of machine learning, AI, and finance. 
            I've developed a series of ML-based trading strategies and have successfully applied them 
            to the crypto market.
          </p>

          {/* 新增的兴趣描述 */}
          <p className="text-gray-300 leading-relaxed mb-4">
          In my leisure time, I enjoy playing both bridge and Texas Hold'em poker 🃏🃏🃏. 
          I’m also a semi-professional poker player and have 
          won some <a href="https://www.wsop.com/tournaments/" target="_blank" rel="noopener noreferrer" 
          className="text-[#A259FF] hover:underline"> WSOP </a> 
           tournaments before. The reason I love poker is not just about the thrill of competition, 
          but also because it combines psychology, strategy, and risk management—elements that 
          deeply resonate with my analytical nature and passion for continuous learning.
        </p>

        </section>

        {/* Research Interests */}
        <section
          className="bg-[#121212] p-8 rounded-lg border border-[#A259FF]/20
                     hover:shadow-[0_0_20px_#A259FF]/20 transition-all duration-500"
        >
          <h2 className="font-sincopa text-2xl text-[#A259FF] mb-4 neon-glow">
            Research Interests
          </h2>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed">
            <li>Diffusion Models</li>
            <li>Controllable Generative Models</li>
            <li>Reinforcement Learning from Human Feedback</li>
            {/* <li>High Frequency Quantitative Trading</li> */}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
