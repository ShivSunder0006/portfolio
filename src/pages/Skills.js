import React from "react";
import "../styles/Skills.css";
import useScrollFadeIn from "../utils/useScrollFadeIn";

// Import icons from react-icons
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostgresql, SiCss3, SiHtml5, SiTailwindcss } from "react-icons/si";

function Skills() {
  const fadeIn = useScrollFadeIn();

  const skills = [
    { name: "React", icon: <FaReact className="skill-icon react" /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon js" /> },
    { name: "Python", icon: <FaPython className="skill-icon python" /> },
    { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon mongo" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon postgres" /> },
    { name: "CSS3", icon: <SiCss3 className="skill-icon css" /> },
    { name: "HTML5", icon: <SiHtml5 className="skill-icon html" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
    { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
    { name: "Docker", icon: <FaDocker className="skill-icon docker" /> }
  ];

  return (
    <section id="skills" className="skills" ref={fadeIn.ref} style={fadeIn.style}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s, index) => (
          <div key={index} className="skill-card">
            {s.icon}
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
