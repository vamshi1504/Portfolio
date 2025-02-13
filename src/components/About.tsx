import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/About.css';

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
              alt="Profile"
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">
              <FaUser />
              About Me
            </h2>
            <p className="about-description">
              I'm a passionate Full Stack Developer with 1.5 years of experience building web applications. 
              I specialize in JavaScript, React, Node.js, and modern web technologies.
            </p>
            <p className="about-description">
              Building Mobile Apps for Android and iOS using Flutter is my new passion. I'm currently working on B2B and 
              Customer applications for a startup.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me contributing to open-source projects, writing technical 
              blog posts, or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}