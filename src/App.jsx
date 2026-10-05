
import "./App.css";
import profileImage from "./assets/profile.jpg";

function App() {
  return (
    <div className="portfolio">

      {/* =========================
          Navbar
      ========================== */}
      <header className="navbar">
        <a href="#home" className="logo">
          AGADOUF<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* =========================
          Hero
      ========================== */}
      <main id="home" className="hero">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Abdalrahim
            <span> Agadouf.</span>
          </h1>

          <h2>
            Informatics Engineering Student & Web Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive web applications and enjoy turning
            ideas into practical digital solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>

          </div>


          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://github.com/Agadouf"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="#contact"
            >
              LinkedIn
            </a>

            <a
              href="mailto:aagadouf@gmail.com"
            >
              Email
            </a>

          </div>

        </div>


        {/* Profile Image */}
        <div className="hero-visual">

          <div className="profile-circle">

            <div className="profile-placeholder">

              <img
                src={profileImage}
                alt="Abdalrahim Agadouf"
              />

            </div>

          </div>

        </div>

      </main>


      {/* =========================
          About
      ========================== */}
      <section
        id="about"
        className="section"
      >

        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <p>
            I am an Informatics Engineering student at Universitas
            Muhammadiyah Purwokerto, currently focused on developing my
            skills in web development and software engineering.
          </p>

          <p>
            I enjoy building practical applications and learning by
            working on real projects. My current experience includes
            frontend development, backend development, databases, and
            building full-stack web applications.
          </p>

          <p>
            I am always looking to improve my technical skills, learn new
            technologies, and turn ideas into useful and well-designed
            applications.
          </p>

        </div>

      </section>


      {/* =========================
          Skills
      ========================== */}
      <section
        id="skills"
        className="section"
      >

        <div className="section-heading">
          <span>02</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend Development</h3>

            <p>
              HTML · CSS · JavaScript · React
            </p>
          </div>


          <div className="skill-card">
            <h3>Backend Development</h3>

            <p>
              PHP · Node.js · REST APIs
            </p>
          </div>


          <div className="skill-card">
            <h3>Databases</h3>

            <p>
              MySQL · PostgreSQL · Prisma
            </p>
          </div>


          <div className="skill-card">
            <h3>Development Tools</h3>

            <p>
              Git · GitHub · VS Code · Vite · Postman
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          Projects
      ========================== */}
      <section
        id="projects"
        className="section"
      >

        <div className="section-heading">
          <span>03</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">


          {/* =====================
              Project 01
          ====================== */}
          <article className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              English Learning Platform
            </h3>

            <p>
              A web platform designed to support English learning for
              young learners through educational videos, quizzes,
              categories, and interactive learning content.
            </p>

            <div className="project-tech">
              React · Node.js · PostgreSQL · Prisma
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Agadouf/guru-siap-ngajar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://guru-siap-ngajar-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>

            </div>

          </article>


          {/* =====================
              Project 02
          ====================== */}
          <article className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Quran Website
            </h3>

            <p>
              A modern Quran web application that allows users to browse
              surahs, search for content, and listen to Quran recitations
              with an integrated audio player and smooth playback
              experience.
            </p>

            <div className="project-tech">
              React · TypeScript · Vite · Supabase
            </div>

            <div className="project-links">

  <a
    href="https://github.com/Agadouf/quran_app"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://quran-app-alzain.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo ↗
  </a>

</div>
          </article>


          {/* =====================
          {/* =====================
    Project 03
====================== */}
<article className="project-card">

  <div className="project-number">
    03
  </div>

  <h3>
    Agadouf Shop
  </h3>

  <p>
    An e-commerce web application featuring product browsing,
    authentication, shopping cart functionality, product management,
    and an administration interface.
  </p>

  <div className="project-tech">
    HTML · CSS · JavaScript · PHP · MySQL
  </div>

  <div className="project-links">

    <a
      href="https://iphone-shop.infinityfreeapp.com"
      target="_blank"
      rel="noreferrer"
    >
      Live Demo ↗
    </a>

  </div>

</article>
{/* Project 04 */}
<article className="project-card">

  <div className="project-number">
    04
  </div>

  <h3>
    Alawlama Training Center Management System
  </h3>

  <p>
    A web-based management system designed to organize training center
    operations, with structured modules for managing data and system
    administration.
  </p>

  <div className="project-tech">
    PHP · MySQL · HTML · CSS · JavaScript
  </div>

  <div className="project-links">

    <a
      href="https://github.com/Agadouf/alawlama-training-center-management-system"
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>
 <a
      href="https://alawlama.ifree.page/login.php"
      target="_blank"
      rel="noreferrer"
    >
      Live Demo ↗
    </a>
  </div>

</article>
        </div>

      </section>


      {/* =========================
          Education
      ========================== */}
      <section
        id="education"
        className="section"
      >

        <div className="section-heading">
          <span>04</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-year">
            2024 — Present
          </div>

          <div className="education-info">

            <h3>
              Universitas Muhammadiyah Purwokerto
            </h3>

            <h4>
              Informatics Engineering
            </h4>

            <p>
              Currently pursuing a degree in Informatics Engineering,
              with a focus on developing practical skills in programming,
              web development, databases, and software engineering.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          Contact
      ========================== */}
      <section
        id="contact"
        className="contact-section"
      >

        <p className="contact-label">
          05 — Contact
        </p>

        <h2>
          Let's build something together.
        </h2>

        <p>
          I'm open to internships, collaborations, freelance opportunities,
          and interesting web development projects.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:aagadouf@gmail.com"
            className="btn primary-btn"
          >
            Email Me
          </a>


          <a
            href="https://github.com/Agadouf"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            GitHub ↗
          </a>


          <a
            href="https://wa.me/249999179949"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            WhatsApp ↗
          </a>

        </div>

      </section>


      {/* =========================
          Footer
      ========================== */}
      <footer>

        <p>
          © 2026 Abdalrahim Agadouf. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;

