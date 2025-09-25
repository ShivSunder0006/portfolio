import React from "react";
import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";
import useScrollFadeIn from "../utils/useScrollFadeIn";

function Projects({ setSelectedProject }) {
  const fadeIn = useScrollFadeIn();

  const projectData = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React & CSS.",
      longDescription: "This is a fully responsive portfolio site showcasing my projects, skills, and contact details.",
      features: ["Responsive Design", "Custom CSS Animations", "Modern Layout"],
      tags: ["React", "CSS"],
      imageUrl: "https://placehold.co/400x200/6b46c1/ffffff?text=Portfolio",
      liveUrl: "https://yourportfolio.com",
      repoUrl: "https://github.com/yourusername/portfolio"
    },
    {
      title: "ML Model Deployment",
      description: "End-to-end machine learning model deployment project.",
      longDescription: "A scalable ML model served with FastAPI, containerized using Docker, and deployed on AWS.",
      features: ["FastAPI Backend", "Dockerized", "Deployed on AWS"],
      tags: ["Python", "FastAPI", "Docker", "AWS"],
      imageUrl: "https://placehold.co/400x200/9333ea/ffffff?text=ML+Model",
      liveUrl: "#",
      repoUrl: "https://github.com/yourusername/ml-deploy"
    },
    {
      title: "Chatbot App",
      description: "Interactive chatbot using OpenAI API.",
      longDescription: "A conversational AI bot with memory, deployed as a web app for seamless interaction.",
      features: ["OpenAI API", "Chat Memory", "Responsive UI"],
      tags: ["JavaScript", "React", "API"],
      imageUrl: "https://placehold.co/400x200/ec4899/ffffff?text=Chatbot",
      liveUrl: "#",
      repoUrl: "https://github.com/yourusername/chatbot"
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack e-commerce application with authentication and cart system.",
      longDescription: "Built with MERN stack. Supports product browsing, cart, checkout, and payment gateway.",
      features: ["MERN Stack", "JWT Auth", "Stripe Payments"],
      tags: ["MongoDB", "Express", "React", "Node.js"],
      imageUrl: "https://placehold.co/400x200/1a202c/ffffff?text=E-Commerce",
      liveUrl: "#",
      repoUrl: "https://github.com/yourusername/ecommerce"
    }
  ];

  return (
    <section id="projects" className="projects" ref={fadeIn.ref} style={fadeIn.style}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map(p => (
          <ProjectCard key={p.title} project={p} onClick={() => setSelectedProject(p)} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
