import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About LegalEase</h1>
      <p className="intro">
        LegalEase is your trusted platform for spreading awareness about legal rights,
        ensuring that every citizen has access to the knowledge they need to protect
        themselves in everyday life.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make legal knowledge simple, accessible, and practical.
          Many people are unaware of their rights during emergencies, workplace disputes,
          consumer issues, or legal proceedings. LegalEase bridges this gap by providing
          clear, reliable, and actionable information.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Guidance on police, FIR filing, and legal aid access.</li>
          <li>Awareness of women, children, and senior citizen rights.</li>
          <li>Consumer protection rights and grievance redressal support.</li>
          <li>Emergency contacts and helplines in one place.</li>
          <li>Educational resources to empower individuals legally.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why Legal Awareness Matters</h2>
        <p>
          Knowing your rights is the first step toward protecting them. LegalEase
          equips people with confidence to face challenging situations, promotes
          justice, and helps reduce exploitation by ensuring fair treatment for all.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To build a society where every individual, regardless of background,
          has the knowledge and tools to stand up for their rights and seek justice
          without fear or confusion.
        </p>
      </div>
    </div>
  );
};

export default About;
