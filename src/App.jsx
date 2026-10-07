import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg";

const content = {
  en: {
    nav: [
      "Home",
      "About",
      "Skills",
      "Projects",
      "Education",
      "CV",
      "Contact",
    ],

    greeting: "Hello, I'm",

    role: "Informatics Engineering Student & Web Developer",

    description:
      "I build modern, responsive web applications and enjoy turning ideas into practical digital solutions.",

    viewProjects: "View My Projects",

    contactMe: "Contact Me",

    aboutTitle: "About Me",

    about: [
      "I am an Informatics Engineering student at Universitas Muhammadiyah Purwokerto, currently focused on developing my skills in web development and software engineering.",

      "I enjoy building practical applications and learning by working on real projects. My experience includes frontend development, backend development, databases, and full-stack web applications.",

      "I am always looking to improve my technical skills, learn new technologies, and turn ideas into useful digital solutions.",
    ],

    skillsTitle: "Technical Skills",

    skills: [
      {
        title: "Frontend Development",
        text: "HTML · CSS · JavaScript · React",
      },
      {
        title: "Backend Development",
        text: "PHP · Node.js · REST APIs",
      },
      {
        title: "Databases",
        text: "MySQL · PostgreSQL · Prisma",
      },
      {
        title: "Development Tools",
        text: "Git · GitHub · VS Code · Vite",
      },
    ],

    projectsTitle: "Featured Projects",

    projects: [
      {
        title: "English Learning Platform",
        description:
          "An educational platform featuring learning videos, quizzes, categories, and interactive content for young learners.",
        tech: "React · Node.js · PostgreSQL · Prisma",
        github: "https://github.com/Agadouf/guru-siap-ngajar",
        demo: "https://guru-siap-ngajar-front.vercel.app/",
      },

      {
        title: "Quran Website",
        description:
          "A Quran web application for browsing surahs, searching content, and listening to Quran recitations.",
        tech: "React · TypeScript · Vite · Supabase",
        github: "https://github.com/Agadouf/quran_app",
        demo: "https://quran-app-alzain.vercel.app/",
      },

      {
        title: "Agadouf Shop",
        description:
          "An e-commerce application featuring product browsing, authentication, shopping cart functionality, and product management.",
        tech: "HTML · CSS · JavaScript · PHP · MySQL",
        github: "https://github.com/Agadouf/Agadouf-Shop",
        demo: "https://iphone-shop.infinityfreeapp.com",
      },

      {
        title: "Alawlama Training Center",
        description:
          "A web-based management system designed to organize training center operations and manage information.",
        tech: "PHP · MySQL · HTML · CSS · JavaScript",
        github:
          "https://github.com/Agadouf/alawlama-training-center-management-system",
        demo: "https://alawlama.ifree.page/login.php",
      },
    ],

    github: "GitHub",

    liveDemo: "Live Demo",

    educationTitle: "Education",

    university: "Universitas Muhammadiyah Purwokerto",

    major: "Informatics Engineering",

    educationDescription:
      "Currently pursuing a degree in Informatics Engineering, developing practical skills in programming, web development, databases, and software engineering.",

    cvTitle: "My CV",

    cvDescription:
      "Download my CV to learn more about my education, skills, projects, and experience.",

    downloadCv: "Download CV",

    contactTitle: "Let's build something together.",

    contactDescription:
      "I'm open to internships, collaborations, freelance opportunities, and interesting web development projects.",

    emailMe: "Email Me",

    footer: "All rights reserved.",

    languageButton: "العربية",
  },

  ar: {
    nav: [
      "الرئيسية",
      "من أنا",
      "المهارات",
      "المشاريع",
      "التعليم",
      "السيرة الذاتية",
      "تواصل",
    ],

    greeting: "مرحباً، أنا",

    role: "طالب هندسة معلوماتية ومطور ويب",

    description:
      "أطوّر تطبيقات ويب عصرية ومتجاوبة، وأستمتع بتحويل الأفكار إلى حلول رقمية عملية.",

    viewProjects: "شاهد مشاريعي",

    contactMe: "تواصل معي",

    aboutTitle: "من أنا",

    about: [
      "أنا طالب هندسة معلوماتية في جامعة المحمدية بورواكرتو، وأركز حالياً على تطوير مهاراتي في برمجة الويب وهندسة البرمجيات.",

      "أحب بناء التطبيقات العملية والتعلم من خلال المشاريع الحقيقية. تشمل خبرتي تطوير الواجهات الأمامية والخلفية وقواعد البيانات وتطبيقات الويب المتكاملة.",

      "أسعى دائماً إلى تطوير مهاراتي التقنية وتعلّم تقنيات جديدة وتحويل الأفكار إلى حلول رقمية مفيدة.",
    ],

    skillsTitle: "المهارات التقنية",

    skills: [
      {
        title: "تطوير الواجهات",
        text: "HTML · CSS · JavaScript · React",
      },

      {
        title: "تطوير الخلفية",
        text: "PHP · Node.js · REST APIs",
      },

      {
        title: "قواعد البيانات",
        text: "MySQL · PostgreSQL · Prisma",
      },

      {
        title: "أدوات التطوير",
        text: "Git · GitHub · VS Code · Vite",
      },
    ],

    projectsTitle: "أبرز المشاريع",

    projects: [
      {
        title: "منصة تعلّم الإنجليزية",
        description:
          "منصة تعليمية تضم فيديوهات تعليمية واختبارات وتصنيفات ومحتوى تفاعلياً للأطفال.",
        tech: "React · Node.js · PostgreSQL · Prisma",
        github: "https://github.com/Agadouf/guru-siap-ngajar",
        demo: "https://guru-siap-ngajar-front.vercel.app/",
      },

      {
        title: "موقع القرآن الكريم",
        description:
          "تطبيق للقرآن الكريم يتيح تصفح السور والبحث والاستماع إلى التلاوات القرآنية.",
        tech: "React · TypeScript · Vite · Supabase",
        github: "https://github.com/Agadouf/quran_app",
        demo: "https://quran-app-alzain.vercel.app/",
      },

      {
        title: "متجر أغادوف",
        description:
          "متجر إلكتروني يضم تصفح المنتجات وتسجيل الدخول وسلة التسوق وإدارة المنتجات.",
        tech: "HTML · CSS · JavaScript · PHP · MySQL",
        github: "https://github.com/Agadouf/Agadouf-Shop",
        demo: "https://iphone-shop.infinityfreeapp.com",
      },

      {
        title: "نظام إدارة مركز العولمة",
        description:
          "نظام ويب لإدارة عمليات مركز التدريب وتنظيم المعلومات والبيانات.",
        tech: "PHP · MySQL · HTML · CSS · JavaScript",
        github:
          "https://github.com/Agadouf/alawlama-training-center-management-system",
        demo: "https://alawlama.ifree.page/login.php",
      },
    ],

    github: "GitHub",

    liveDemo: "عرض الموقع",

    educationTitle: "التعليم",

    university: "جامعة المحمدية بورواكرتو",

    major: "هندسة المعلوماتية",

    educationDescription:
      "أدرس هندسة المعلوماتية وأطوّر مهارات عملية في البرمجة وتطوير الويب وقواعد البيانات وهندسة البرمجيات.",

    cvTitle: "السيرة الذاتية",

    cvDescription:
      "قم بتحميل سيرتي الذاتية للتعرف أكثر على تعليمي ومهاراتي ومشاريعي وخبراتي.",

    downloadCv: "تحميل السيرة الذاتية",

    contactTitle: "لنبنِ شيئاً مميزاً معاً.",

    contactDescription:
      "أنا مهتم بفرص التدريب والتعاون والعمل الحر ومشاريع تطوير الويب.",

    emailMe: "راسلني",

    footer: "جميع الحقوق محفوظة.",

    languageButton: "English",
  },
};

const navIds = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "cv",
  "contact",
];

function App() {
  const [language, setLanguage] = useState("en");

  const t = content[language];

  const isArabic = language === "ar";

  return (
    <div
      className={`portfolio ${isArabic ? "arabic" : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      {/* Technical background */}

      <div className="tech-background" aria-hidden="true">
        <div className="code-panel">
          <div className="code-dots">
            <span />
            <span />
            <span />
          </div>

          <pre>{`import React from "react";

function Portfolio() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
  ];

  return <Developer />;
}`}</pre>
        </div>

        <div className="tech-label tech-label-one">
          {"</>"}
        </div>

        <div className="tech-label tech-label-two">
          AI
        </div>

        <div className="tech-label tech-label-three">
          {"{ }"}
        </div>

        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>MySQL</span>
          <span>Web Development</span>
        </div>

        <div className="tech-globe">
          <div className="globe-longitude" />
          <div className="globe-latitude" />
        </div>

        <div className="circuit circuit-one" />

        <div className="circuit circuit-two" />

        <div className="background-glow" />
      </div>

      {/* Navigation */}

      <header className="navbar">
        <a href="#home" className="logo">
          AGADOUF<span>.</span>
        </a>

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          {t.nav.map((label, index) => (
            <a
              href={`#${navIds[index]}`}
              key={navIds[index]}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="language-switch"
          onClick={() =>
            setLanguage(isArabic ? "en" : "ar")
          }
          aria-label="Switch website language"
        >
          {t.languageButton}
        </button>
      </header>

      {/* Hero */}

      <main id="home" className="hero">
        <div className="hero-content">
          <p className="hero-greeting">
            {t.greeting}
          </p>

          <h1>
            Abdalrahim
            <span> Agadouf.</span>
          </h1>

          <h2>{t.role}</h2>

          <p className="hero-description">
            {t.description}
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn primary-btn"
            >
              {t.viewProjects}
              <span aria-hidden="true">
                {" ↗"}
              </span>
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              {t.contactMe}
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Agadouf"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="mailto:aagadouf@gmail.com">
              Email ↗
            </a>

            <a
              href="https://wa.me/249999179949"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-orbit orbit-outer" />

          <div className="profile-orbit orbit-inner" />

          <div className="profile-circle">
            <div className="profile-placeholder">
              <img
                src={profileImage}
                alt="Abdalrahim Agadouf"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="orbit-dot dot-one" />

          <div className="orbit-dot dot-two" />

          <div className="orbit-dot dot-three" />

          <div className="floating-tech floating-code">
            {"< />"}
          </div>

          <div className="floating-tech floating-db">
            DB
          </div>
        </div>
      </main>

      {/* About */}

      <section id="about" className="section">
        <div className="section-heading">
          <span>01</span>

          <h2>{t.aboutTitle}</h2>
        </div>

        <div className="about-content">
          {t.about.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="section">
        <div className="section-heading">
          <span>02</span>

          <h2>{t.skillsTitle}</h2>
        </div>

        <div className="skills-grid">
          {t.skills.map((skill, index) => (
            <article
              className="skill-card"
              key={skill.title}
            >
              <span className="skill-index">
                0{index + 1}
              </span>

              <h3>{skill.title}</h3>

              <p>{skill.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="section">
        <div className="section-heading">
          <span>03</span>

          <h2>{t.projectsTitle}</h2>
        </div>

        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-topline">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="project-symbol"
                  aria-hidden="true"
                >
                  {"</>"}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.github} ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.liveDemo} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}

      <section
        id="education"
        className="section"
      >
        <div className="section-heading">
          <span>04</span>

          <h2>{t.educationTitle}</h2>
        </div>

        <article className="education-card">
          <div className="education-year">
            2024 — Present
          </div>

          <div className="education-info">
            <span className="education-tag">
              UNIVERSITY
            </span>

            <h3>{t.university}</h3>

            <h4>{t.major}</h4>

            <p>{t.educationDescription}</p>
          </div>
        </article>
      </section>

      {/* CV */}

      <section
        id="cv"
        className="section cv-section"
      >
        <div className="section-heading">
          <span>05</span>

          <h2>{t.cvTitle}</h2>
        </div>

        <div className="cv-content">
          <p>{t.cvDescription}</p>

          <a
            href="/Abdalrahim%20Agadouf_CV.pdf"
            download="Abdalrahim Agadouf_CV.pdf"
            className="btn primary-btn cv-download-btn"
          >
            <span aria-hidden="true">
              📥
            </span>

            {t.downloadCv}
          </a>
        </div>
      </section>

      {/* Contact */}

      <section
        id="contact"
        className="contact-section"
      >
        <p className="contact-label">
          06 — {t.nav[6]}
        </p>

        <h2>{t.contactTitle}</h2>

        <p>{t.contactDescription}</p>

        <div className="contact-buttons">
          <a
            href="mailto:aagadouf@gmail.com"
            className="btn primary-btn"
          >
            {t.emailMe} ↗
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

      {/* Footer */}

      <footer>
        <p>
          © 2026 Abdalrahim Agadouf.{" "}
          {t.footer}
        </p>
      </footer>
    </div>
  );
}

export default App;
