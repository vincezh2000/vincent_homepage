// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#121212] py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {/* Social Icons with neon effect on hover */}
            <SocialIcon href="https://twitter.com" icon="twitter" />
            <SocialIcon href="https://github.com" icon="github" />
            <SocialIcon href="https://scholar.google.com" icon="scholar" />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Vincent Zhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }) {
  const iconClasses = {
    twitter: "fab fa-twitter",
    github: "fab fa-github",
    scholar: "fas fa-graduation-cap"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#A259FF] transition-all duration-300
                 neon-glow rounded-full p-2"
    >
      <i className={`${iconClasses[icon]} text-xl`}></i>
    </a>
  );
}

export default Footer;