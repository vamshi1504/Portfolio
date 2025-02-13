import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projects = [
  {
    title: "Reserve App",
    description: "Table Management System for Restaurants"
  },
  {
    title: "Feedback App",
    description: "Dynamic Feedback Management System for Businesses",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Expense Claiming Web App",
    description: "Analytics dashboard for tracking expenses and generating reports",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Rentify",
    description: "Rentify is a marketplace for people in search for houses for rent",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaCode />
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}