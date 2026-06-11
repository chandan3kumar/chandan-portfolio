import "./App.css";

import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaHome,
  FaUser,
  FaAsterisk,
  FaRegFileAlt,
  FaBriefcase,
  
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub



} from "react-icons/fa";
import {
 FaProjectDiagram,

 FaLaptopCode,
 FaCode
} from "react-icons/fa";


function App() {
//email service
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_p8gaip2",
      "template_npc6rgm",
      formData,
      "K3ybmYJIz_CAIB1xR"
    )
    .then(() => {

      alert("Thank you! Your message has been sent.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
    });
};







  const [activeSection, setActiveSection] = useState("home");
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.3) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: [0.3, 0.5, 0.7],
      rootMargin: "-100px 0px -100px 0px",
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

  
  return (
    <>
      {/* LEFT SIDE NAVIGATION */}
      <nav className="side-nav">
        <a className={activeSection === "home" ? "active" : ""} href="#home">
          <FaHome />
          <span>Home</span>
        </a>

<a
  className={activeSection === "about" ? "active" : ""}
  href="#about"
>          <FaUser />
          <span>About</span>
        </a>

<a
  className={activeSection === "skills" ? "active" : ""}
  href="#skills"
>          <FaAsterisk />
          <span>Skills</span>
        </a>

<a
  className={activeSection === "resume" ? "active" : ""}
  href="#resume"
>          <FaRegFileAlt />
          <span>Resume</span>
        </a>

<a
  className={activeSection === "portfolio" ? "active" : ""}
  href="#portfolio"
>          <FaBriefcase />
          <span>Portfolio</span>
        </a>

<a
  className={activeSection === "contact" ? "active" : ""}
  href="#contact"
>          <FaEnvelope />
          <span>Contact</span>
        </a>
      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: "url('/profile.jpg')" }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Chandan Kumar</h1>

          <h2>
            I'm{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Java Backend Developer",
                  1600,
                  "Spring Boot Developer",
                  1600,
                  "Full Stack Developer",
                  1600,
                  "Software Engineer",
                  1600,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </span>
          </h2>

          <div className="social-icons">
            <a
              href="https://github.com/chandan3kumar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
   


            <a
              href="https://www.linkedin.com/in/chandan-kumar-160a12269"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a href="https://www.instagram.com/i.rai_chandan_/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
<a
  href="/chandanRESUME.pdf"
  download
  className="resume-btn"
>
  Download Resume
</a>


          </div>
        </div>
      </section>


{/* ABOUT SECTION */}



<section id="about" className="about-section">

  <div className="section-title">
    <h2>About</h2>
    <div className="underline"></div>
  </div>

  <p className="about-intro">
    Detail-oriented MCA graduate with practical experience building scalable backend
    architectures, microservices, RESTful APIs, and frontend integration using ReactJS.
  </p>

  <div className="about-container">

    <div className="about-image">
      <img src="/profile.jpg" alt="Chandan Kumar" />
    </div>

    <div className="about-content">

      <h3>Java Backend Developer & Software Engineer</h3>

      <p className="italic-text">
        Passionate software developer with expertise in Java, Spring Boot,
        Microservices, REST APIs, SQL databases, and ReactJS.
      </p>

      <div className="personal-info">

        <div className="info-item">
          <span className="arrow"></span>
          <strong>Birthday:</strong>
          <span>31 Jan 2003</span>
        </div>

        <div className="info-item">
          <span className="arrow"></span>
          <strong>Age:</strong>
          <span>23</span>
        </div>

        <div className="info-item">
          <span className="arrow"></span>
          <strong>Phone:</strong>
          <span>+91 8797048401</span>
        </div>

        <div className="info-item">
          <span className="arrow"></span>
          <strong>Degree:</strong>
          <span>MCA</span>
        </div>

        <div className="info-item">
          <span className="arrow"></span>
          <strong>City:</strong>
          <span>Noida Sector-62</span>
        </div>

        <div className="info-item">
          <span className="arrow"></span>
          <strong>Email:</strong>
          <span>chandannnkumar1290@gmail.com</span>
        </div>

        <div className="info-item">
          <span className="arrow"></span>
          <strong>Languages:</strong>
          <span>English & Hindi</span>
        </div>

        {/* <div className="info-item">
          <span className="arrow"></span>
          <strong>Freelance:</strong>
          <span>Available</span>
        </div> */}

      </div>

      <p className="about-description">
        I enjoy building robust enterprise applications using Spring Boot,
        Microservices, PostgreSQL, RabbitMQ, Eureka Server, and ReactJS.
        My goal is to become a highly skilled software engineer contributing
        to scalable and innovative software solutions.
      </p>

    </div>

  </div>

</section>
<div className="stats-container">

  <div className="stat-box">
    <div className="stat-left">
      <FaProjectDiagram className="stat-icon" />
    </div>

    <div className="stat-right">
      <h3>3+</h3>
      <p>Projects</p>
    </div>
  </div>

  <div className="stat-box">
    <div className="stat-left">
      <FaBriefcase className="stat-icon" />
    </div>

    <div className="stat-right">
      <h3>1</h3>
      <p>Internship</p>
    </div>
  </div>

  <div className="stat-box">
    <div className="stat-left">
      <FaLaptopCode className="stat-icon" />
    </div>

    <div className="stat-right">
      <h3>15+</h3>
      <p>Technologies</p>
    </div>
  </div>

  <div className="stat-box">
    <div className="stat-left">
      <FaCode className="stat-icon" />
    </div>

    <div className="stat-right">
      <h3>125+</h3>
      <p>DSA Problems</p>
    </div>
  </div>

</div>


{/* SKILLS SECTION */}

<section id="skills" className="skills-section">

  <div className="section-title">
    <h2>Skills</h2>
    <div className="underline"></div>
  </div>

  <p className="skills-intro">
    I have hands-on experience with backend development, frontend technologies,
    databases, tools, and core programming concepts.
  </p>

  <div className="skills-container">

    <div className="skills-column">

      <div className="skill-item">
        <div className="skill-info">
          <span>Java</span>
          <span>90%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill java"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-info">
          <span>Spring Boot</span>
          <span>85%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill spring"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-info">
          <span>REST APIs</span>
          <span>85%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill api"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-info">
          <span>Microservices</span>
          <span>80%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill micro"></div>
        </div>
      </div>

    </div>

    <div className="skills-column">

      <div className="skill-item">
        <div className="skill-info">
          <span>ReactJS</span>
          <span>75%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill react"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-info">
          <span>MySQL / PostgreSQL</span>
          <span>85%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill sql"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-info">
          <span>Git & GitHub</span>
          <span>85%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill git"></div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-info">
          <span>DSA</span>
          <span>80%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill dsa"></div>
        </div>
      </div>

    </div>

  </div>

</section>



{/* RESUME SECTION */}

<section id="resume" className="resume-section">

  <div className="section-title">
    <h2>Resume</h2>
    <div className="underline"></div>
  </div>

  <p className="resume-intro">
    A brief overview of my education, technical background, projects, and achievements.
  </p>

  <div className="resume-container">

    <div className="resume-column">

      <h3 className="resume-heading">Summary</h3>

      <div className="resume-item">
        <h4>Chandan Kumar</h4>
        <p>
          Java Backend Developer and MCA graduate with hands-on experience in
          Spring Boot, Microservices, REST APIs, SQL databases, and ReactJS.
        </p>
        <ul>
          <li>Noida Sector-62</li>
          <li>+91 8797048401</li>
          <li>chandannnkumar1290@gmail.com</li>
        </ul>
      </div>

      <h3 className="resume-heading">Education</h3>

      <div className="resume-item">
        <h4>Master of Computer Applications</h4>
        <h5>2024 - 2026</h5>
        <p>Noida Institute of Engineering and Technology</p>
        <p>CGPA: 7.8 / 10</p>
      </div>

      <div className="resume-item">
        <h4>Bachelor of Computer Applications</h4>
        <h5>2021 - 2024</h5>
        <p>Chandigarh Group of Colleges, Jhanjeri</p>
      </div>

    </div>

    <div className="resume-column">

      <h3 className="resume-heading">Technical Projects</h3>

      <div className="resume-item">
        <h4>Nexus HR Management System</h4>
        <h5>Java, Spring Boot, Microservices, PostgreSQL, RabbitMQ, Eureka, ReactJS</h5>
        <ul>
          <li>Built an enterprise-grade HR platform using microservices architecture.</li>
          <li>Designed secure REST APIs with Eureka Server for service discovery.</li>
          <li>Integrated RabbitMQ for asynchronous event-driven messaging.</li>
        </ul>
      </div>

      <div className="resume-item">
        <h4>AI-Powered Fitness Application</h4>
        <h5>Spring Boot, ReactJS, Gemini AI API, Spring Cloud, MySQL</h5>
        <ul>
          <li>Developed a full-stack fitness application with a React dashboard.</li>
          <li>Integrated Gemini AI API for personalized workout recommendations.</li>
          <li>Configured Spring Cloud services for microservice communication.</li>
        </ul>
      </div>

      <div className="resume-item">
        <h4>Blood Bank Management System</h4>
        <h5>Spring Boot, Spring Data JPA, MySQL, REST APIs</h5>
        <ul>
          <li>Developed donor, inventory, and patient request management modules.</li>
          <li>Implemented CRUD operations with validation and relational database design.</li>
        </ul>
      </div>

    </div>

  </div>

</section>


{/* PORTFOLIO SECTION */}

<section id="portfolio" className="portfolio-section">

  <div className="section-title">
    <h2>Portfolio</h2>
    <div className="underline"></div>
  </div>

  <p className="portfolio-intro">
    A collection of projects showcasing my expertise in Java, Spring Boot,
    Microservices, ReactJS, SQL, and Full Stack Development.
  </p>

  <div className="portfolio-filter">
    <button className="active-btn">All</button>
    <button>Spring Boot</button>
    {/* <button>Java</button>
    
    <button>ReactJS</button> */}
  </div>

  <div className="portfolio-grid">

    <div className="project-card">
      <img src="/project1.jpg" alt="Nexus HR" />

      <div className="project-content">
        <h3>Nexus HR Management System</h3>

        <p>
          Enterprise HR platform built using Spring Boot,
          Microservices, RabbitMQ, Eureka Server and ReactJS.
        </p>

        <div className="tech-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>ReactJS</span>
        </div>

        <a
          href="https://github.com/chandan3kumar/nexus-hr-managment-system"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

    <div className="project-card">
      <img src="/project2.jpg" alt="Fitness App" />

      <div className="project-content">
        <h3>AI Fitness Application</h3>

        <p>
          Full-stack AI powered fitness recommendation system using
          Spring Boot, ReactJS and Gemini AI.
        </p>

        <div className="tech-stack">
          <span>Spring Boot</span>
          <span>ReactJS</span>
          <span>Gemini AI</span>
        </div>

        <a
          href="https://github.com/chandan3kumar"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

    <div className="project-card">
      <img src="/project3.jpg" alt="Blood Bank" />

      <div className="project-content">
        <h3>Blood Bank Management System</h3>

        <p>
          Complete blood donation and inventory management platform.
        </p>

        <div className="tech-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>MySQL</span>
          <span>ReactJs</span>
        </div>

        <a
          href="https://github.com/chandan3kumar/blood-bank-management-system"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>

  </div>

</section>


<section id="contact" className="contact-section">

  <div className="section-title">
    <h2>Contact</h2>
    <div className="underline"></div>
  </div>

  <p className="contact-intro">
    Feel free to reach out for opportunities, collaborations,
    freelance work, or project discussions.
  </p>

  <div className="contact-container">

    {/* LEFT SIDE */}

    <div className="contact-info">

      <div className="contact-card">
        <div className="contact-icon-box">
          <FaMapMarkerAlt className="contact-icon" />
        </div>

        <div>
          <h3>Location</h3>
          <p>Noida, U.P</p>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-icon-box">
          <FaPhoneAlt className="contact-icon" />
        </div>

        <div>
          <h3>Phone</h3>
          <p>
            <a href="tel:+918797048401">
              +91 8797048401
            </a>
          </p>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-icon-box">
          <FaEnvelope className="contact-icon" />
        </div>

        <div>
          <h3>Email</h3>
          <p>
            <a href="mailto:chandannnkumar1290@gmail.com">
              chandannnkumar1290@gmail.com
            </a>
          </p>
        </div>
      </div>


    </div>

    {/* RIGHT SIDE */}

    <form className="contact-form" onSubmit={sendEmail}>

  <div className="input-row">

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
    />

  </div>

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    value={formData.subject}
    onChange={handleChange}
    required
  />

  <textarea
    rows="8"
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>

  </div>

  <div className="bottom-social">

  <a
    href="https://github.com/chandan3kumar"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/chandan-kumar-160a12269"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/i.rai_chandan_/"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>

</div>

</section>




    </>
  );
}

export default App;