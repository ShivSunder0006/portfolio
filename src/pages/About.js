import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about.jpg";
import useScrollFadeIn from "../utils/useScrollFadeIn";

function About() {
  const fadeIn = useScrollFadeIn();

  return (
    <section id="about" className="about" ref={fadeIn.ref} style={fadeIn.style}>
      <div className="about-container">
        <img src={aboutImg} alt="About" className="about-img" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hello! I'm Your Name, a passionate developer...</p>
          <p>I enjoy building modern apps, learning new tech, and working on creative projects.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
