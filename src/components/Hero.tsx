import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import '../styles/Hero.css';

export function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Vamsi Krishna</span>
          </h1>
          <p className="hero-description">
            Frontend Developer and Mobile App Developer specializing in building exceptional digital experiences
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View my work
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/vamshi1504">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vamsi-krishna-3373001b4/">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:vamsikrishna.cse.sec@gmail.com">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <FaChevronDown size={32} />
      </div>
    </header>
  );
}