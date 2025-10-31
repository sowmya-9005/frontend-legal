

import React from 'react';
import './Home.css';
import legalimg from "./legal-img.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faHeadset,
  faLockOpen,
  faGraduationCap,
  faBriefcase,
  faUser,
  faGlobe,
  faArrowRight,
  faBookOpen,
  faEye,
  faBullseye,
  faUsers,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to <span className="highlight">LegalEase</span></h1>
        <p className="tagline">
          Your trusted legal rights awareness and guidance platform. Empowering citizens with accessible legal knowledge.
        </p>
    <div className="hero-image">
  <img src={legalimg} alt="LegalEase" />
</div>
        <div className="features">
          <span><FontAwesomeIcon icon={faCheckCircle} /> Rights Awareness</span>
          <span><FontAwesomeIcon icon={faHeadset} /> 24/7 Guidance</span>
          <span><FontAwesomeIcon icon={faLockOpen} /> Free Access</span>
        </div>

        <div className="cta">
          <button className="start-btn">Start Learning <FontAwesomeIcon icon={faArrowRight} /></button>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>

        <hr className="divider" />

        <div className="audience">
          <div className="audience-item">
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>Students</p>
          </div>
          <div className="audience-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Employees</p>
          </div>
          <div className="audience-item">
            <FontAwesomeIcon icon={faUser} />
            <p>Citizens</p>
          </div>
          <div className="audience-item">
            <FontAwesomeIcon icon={faGlobe} />
            <p>Organizations</p>
          </div>
        </div>
      </div>

      {/* Legal Awareness Section */}
      <div className="legal-awareness">
        <h2>Empowering Legal Awareness</h2>
        <p className="subheading">
          Discover how LegalEase is revolutionizing access to legal knowledge and empowering
          citizens with fundamental rights awareness.
        </p>

        <div className="info-cards">
          {/* About LegalEase */}
          <div className="info-card">
            <div className="icon-badge"><FontAwesomeIcon icon={faBookOpen} /></div>
            <div className="info-badge">Our Mission</div>
            <h3>About LegalEase</h3>
            <p>
              LegalEase is a rights awareness platform designed to help individuals understand
              their fundamental legal rights. It simplifies complex laws into clear, accessible
              information for everyone.
            </p>
          </div>

          {/* Our Vision */}
          <div className="info-card">
            <div className="icon-badge"><FontAwesomeIcon icon={faEye} /></div>
            <div className="info-badge">Future Goals</div>
            <h3>Our Vision</h3>
            <p>
              We envision a society where every citizen is legally empowered. By spreading awareness
              and providing reliable legal knowledge, we aim to reduce exploitation and promote justice.
            </p>
          </div>

          {/* Key Features */}
          <div className="info-card">
            <div className="icon-badge"><FontAwesomeIcon icon={faCheckCircle} /></div>
            <div className="info-badge">What We Offer</div>
            <h3>Key Features</h3>
            <p>Comprehensive legal education platform with multiple learning resources.</p>
            <ul className="feature-list">
              <li><FontAwesomeIcon icon={faCheckCircle} /> Simple explanation of fundamental rights</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Access to legal resources and FAQs</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> Case studies and real-world examples</li>
              <li><FontAwesomeIcon icon={faCheckCircle} /> 24/7 guidance and chatbot support</li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="info-cards">
          {/* Why Choose LegalEase */}
          <div className="info-card">
            <div className="icon-badge"><FontAwesomeIcon icon={faBullseye} /></div>
            <div className="info-badge">Our Advantage</div>
            <h3>Why Choose LegalEase?</h3>
            <p>
              LegalEase bridges the gap between complex legal language and everyday understanding.
              Our app ensures that everyone, regardless of background, has access to justice and awareness.
            </p>
          </div>

          {/* Who Can Use LegalEase */}
          <div className="info-card">
            <div className="icon-badge"><FontAwesomeIcon icon={faUsers} /></div>
            <div className="info-badge">For Everyone</div>
            <h3>Who Can Use LegalEase?</h3>
            <p>Our platform serves diverse communities with tailored legal guidance for different user groups.</p>
            <ul className="audience-list">
              <li><strong>Students:</strong> Learn about your rights in education</li>
              <li><strong>Employees:</strong> Understand workplace rights</li>
              <li><strong>Citizens:</strong> Get clarity on constitutional rights</li>
              <li><strong>Organizations:</strong> Promote legal literacy</li>
            </ul>
          </div>

          {/* Future Scope */}
          <div className="info-card">
            <div className="icon-badge"><FontAwesomeIcon icon={faLightbulb} /></div>
            <div className="info-badge">Innovation</div>
            <h3>Future Scope</h3>
            <p>
              We aim to integrate AI-driven legal advisors, multi-language support,
              real-time case law updates, and community forums to empower users further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
