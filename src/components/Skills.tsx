import React from 'react';
import { FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const skills = [
 "HTML","CSS", "JavaScript", "React", "Node.js",
  "Python", "SQL", "Flutterflow", "Excel", "PowerPoint", "Figma",
  "Github", "Flutter", "Dart"
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <FaTools />
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}