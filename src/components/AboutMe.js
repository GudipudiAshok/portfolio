import React from 'react';
import './AboutMe.css';
import devImage from '../assets/ashokimgthree.jpeg'; 

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="header-section">
        <h1 className='ProjectsText'>About Me </h1>
        {/* <p className="summary">
          I graduated from the Centro Universitário Leonardo Da Vinci - Uniasselvi, and have been working as a full-stack developer for 3 years. My expertise spans across various technologies including React Native, React.js, AWS, Spring Boot, and more.
        </p> */}
      </div>

      <div className="main-section">
        <div className="image-section">
          <img src={devImage} alt="Developer" className="profile-image" />
        </div>
 
        <div className="intro-section">
      
        <p>
  Hi there! My name is <strong>Ashok</strong>. I have 2.5 years of experience in Android development using Kotlin and React Native CLI. I specialize in implementing features such as push notifications, Google Maps integration, Street View, and camera functionalities. I'm passionate about building robust, user-friendly mobile applications that deliver real value.
</p>

        </div>
      </div>

      <div className="cards-wrapper">
      <div className="section-card">
  <div className="title-with-dot">
    <div className="AditionalSkilsCircleDot"></div>
    <h3 className="section-title">Education</h3>
  </div>
  <p>
            Graduated in Mechanical Engineering from JNTUK. After discovering my passion for technology, I transitioned into software and gained expertise through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="section-card">
  <div className="title-with-dot">
    <div className="AditionalSkilsCircleDot"></div>
    <h3 className="section-title">Professional Experience</h3>
  </div>
  <p>
            React Native developer at Varsity Education management Pvt Ltd as Mobile Application  Jr Software Engineering. Successfully built multiple cross-platform mobile applications using React Native and Android Kotlin integrated RESTful APIs.
          </p>
        </div>

        <div className="section-card">
  <div className="title-with-dot">
    <div className="AditionalSkilsCircleDot"></div>
    <h3 className="section-title">Tools & Technologies</h3>
  </div>
  <p>
            Git/GitHub, UI/UX Design, Spring Boot, AWS, Lambda, Python, SQL, React JS, React Native, HTML & CSS, TypeScript, and JavaScript.
          </p>
        </div>

        <div className="section-card">
  <div className="title-with-dot">
    <div className="AditionalSkilsCircleDot"></div>
    <h3 className="section-title">What I Do</h3>
  </div>
  <p>
    Currently working on high-performance mobile applications, API integrations, and cloud-based deployments as a React Native Developer at Scaits Technologies.
  </p>
</div>

<div className="section-card">
  <div className="title-with-dot">
    <div className="AditionalSkilsCircleDot"></div>
    <h3 className="section-title">Learning & Growth</h3>
  </div>
  <p>
    Continuously enhancing skills through courses, documentation, and hands-on projects to stay updated with the latest tech trends.
  </p>
</div>

<div className="section-card">
  <div className="title-with-dot">
    <div className="AditionalSkilsCircleDot"></div>
    <h3 className="section-title">Career Goals</h3>
  </div>
  <p>
    Open to exciting full-time opportunities. Let’s connect and create something impactful together!
  </p>
</div>

      </div>
    </div>
  );
}

export default AboutMe;
