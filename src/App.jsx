import { useEffect, useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg";

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const isArabic = language === "ar";

  const toggleLanguage = () => {
    setLanguage(isArabic ? "en" : "ar");
  };

  const t = {
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",

      hello: "Hello, I'm",
      title: "Informatics Engineering Student & Web Developer",
      heroDescription:
        "I build modern, responsive web applications and enjoy turning ideas into practical digital solutions.",

      viewProjects: "View My Projects",
      contactMe: "Contact Me",

      aboutTitle: "About Me",

      about1:
        "I am an Informatics Engineering student at Universitas Muhammadiyah Purwokerto, currently focused on developing my skills in web development and software engineering.",

      about2:
        "I enjoy building practical applications and learning by working on real projects. My current experience includes frontend development, backend development, databases, and building full-stack web applications.",

      about3:
        "I am always looking to improve my technical skills, learn new technologies, and turn ideas into useful and well-designed applications.",

      skillsTitle: "Skills",

      frontend: "Frontend Development",
      backend: "Backend Development",
      databases: "Databases",
      tools: "Development Tools",

      projectsTitle: "Featured Projects",

      englishProject: "English Learning Platform",

      englishDescription:
        "A web platform designed to support English learning for young learners through educational videos, quizzes, categories, and interactive learning content.",

      quranProject: "Quran Website",

      quranDescription:
        "A modern Quran web application that allows users to browse surahs, search for content, and listen to Quran recitations with an integrated audio player and smooth playback experience.",

      shopProject: "Agadouf Shop",

      shopDescription:
        "An e-commerce web application featuring product browsing, authentication, shopping cart functionality, product management, and an administration interface.",

      alawlamaProject:
        "Alawlama Training Center Management System",

      alawlamaDescription:
        "A web-based management system designed to organize training center operations, with structured modules for managing data and system administration.",

      github: "GitHub ↗",
      liveDemo: "Live Demo ↗",

      educationTitle: "Education",

      educationDescription:
        "Currently pursuing a degree in Informatics Engineering, with a focus on developing practical skills in programming, web development, databases, and software engineering.",

      contactTitle: "Let's build something together.",

      contactDescription:
        "I'm open to internships, collaborations, freelance opportunities, and interesting web development projects.",

      emailMe: "Email Me",

      footer:
        "© 2026 Abdalrahim Agadouf. All rights reserved.",

      languageButton: "العربية",
    },

    ar: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      projects: "المشاريع",
      education: "التعليم",
      contact: "تواصل معي",

      hello: "مرحباً، أنا",

      title: "طالب هندسة معلوماتية ومطور مواقع",

      heroDescription:
        "أقوم بتطوير تطبيقات ويب حديثة ومتجاوبة، وأستمتع بتحويل الأفكار إلى حلول رقمية عملية.",

      viewProjects: "مشاريعي",
      contactMe: "تواصل معي",

      aboutTitle: "عني",

      about1:
        "أنا طالب هندسة معلوماتية في جامعة المحمدية بورواكرتو، وأركز حالياً على تطوير مهاراتي في تطوير الويب وهندسة البرمجيات.",

      about2:
        "أستمتع ببناء التطبيقات العملية والتعلم من خلال العمل على مشاريع حقيقية. تشمل خبرتي الحالية تطوير الواجهات الأمامية والخلفية وقواعد البيانات وبناء تطبيقات الويب المتكاملة.",

      about3:
        "أسعى دائماً إلى تطوير مهاراتي التقنية، وتعلم تقنيات جديدة، وتحويل الأفكار إلى تطبيقات مفيدة وذات تصميم جيد.",

      skillsTitle: "المهارات",

      frontend: "تطوير الواجهات الأمامية",
      backend: "تطوير الواجهات الخلفية",
      databases: "قواعد البيانات",
      tools: "أدوات التطوير",

      projectsTitle: "أبرز المشاريع",

      englishProject: "منصة تعلم اللغة الإنجليزية",

      englishDescription:
        "منصة ويب مصممة لدعم تعلم اللغة الإنجليزية للأطفال من خلال الفيديوهات التعليمية والاختبارات والتصنيفات والمحتوى التفاعلي.",

      quranProject: "موقع القرآن الكريم",

      quranDescription:
        "تطبيق ويب حديث للقرآن الكريم يتيح للمستخدمين تصفح السور والبحث عن المحتوى والاستماع إلى تلاوات القرآن من خلال مشغل صوتي متكامل.",

      shopProject: "متجر Agadouf",

      shopDescription:
        "تطبيق تجارة إلكترونية يوفر تصفح المنتجات وتسجيل الدخول وسلة التسوق وإدارة المنتجات وواجهة خاصة بالإدارة.",

      alawlamaProject:
        "نظام إدارة مركز العولمة للتدريب",

      alawlamaDescription:
        "نظام ويب لإدارة مركز التدريب وتنظيم العمليات والبيانات من خلال وحدات مخصصة للإدارة.",

      github: "GitHub ↗",
      liveDemo: "التجربة المباشرة ↗",

      educationTitle: "التعليم",

      educationDescription:
        "أدرس حالياً للحصول على درجة في هندسة المعلوماتية، مع التركيز على تطوير المهارات العملية في البرمجة وتطوير الويب وقواعد البيانات وهندسة البرمجيات.",

      contactTitle: "لنبنِ شيئاً مميزاً معاً.",

      contactDescription:
        "أنا مهتم بفرص التدريب والتعاون والعمل الحر ومشاريع تطوير الويب المميزة.",

      emailMe: "راسلني",

      footer:
        "© 2026 عبد الرحيم أقدوف. جميع الحقوق محفوظة.",

      languageButton: "English",
    },
  };

  const text = t[language];

  return (
    <div
      className={`portfolio ${isArabic ? "arabic" : "english"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >

      {/* =========================
          Navbar
      ========================== */}
      <header className="navbar">

        <a href="#home" className="logo">
          AGADOUF<span>.</span>
        </a>

        <nav className="nav-links">

          <a href="#home">
            {text.home}
          </a>

          <a href="#about">
            {text.about}
          </a>

          <a href="#skills">
            {text.skills}
          </a>

          <a href="#projects">
            {text.projects}
          </a>

          <a href="#education">
            {text.education}
          </a>

          <a href="#contact">
            {text.contact}
          </a>

        </nav>

        {/* Language Button */}
        <button
          className="language-switch"
          onClick={toggleLanguage}
          type="button"
        >
          {text.languageButton}
        </button>

      </header>


      {/* =========================
          Hero
      ========================== */}
      <main id="home" className="hero">

        <div className="hero-content">

          <p className="hero-greeting">
            {text.hello}
          </p>

          <h1>
            Abdalrahim
            <span> Agadouf.</span>
          </h1>

          <h2>
            {text.title}
          </h2>

          <p className="hero-description">
            {text.heroDescription}
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              {text.viewProjects}
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              {text.contactMe}
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

            <a href="#contact">
              LinkedIn
            </a>

            <a href="mailto:aagadouf@gmail.com">
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

          <h2>
            {text.aboutTitle}
          </h2>

        </div>

        <div className="about-content">

          <p>
            {text.about1}
          </p>

          <p>
            {text.about2}
          </p>

          <p>
            {text.about3}
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

          <h2>
            {text.skillsTitle}
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-card">

            <h3>
              {text.frontend}
            </h3>

            <p>
              HTML · CSS · JavaScript · React
            </p>

          </div>


          <div className="skill-card">

            <h3>
              {text.backend}
            </h3>

            <p>
              PHP · Node.js · REST APIs
            </p>

          </div>


          <div className="skill-card">

            <h3>
              {text.databases}
            </h3>

            <p>
              MySQL · PostgreSQL · Prisma
            </p>

          </div>


          <div className="skill-card">

            <h3>
              {text.tools}
            </h3>

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

          <h2>
            {text.projectsTitle}
          </h2>

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
              {text.englishProject}
            </h3>

            <p>
              {text.englishDescription}
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
                {text.github}
              </a>

              <a
                href="https://guru-siap-ngajar-front.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {text.liveDemo}
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
              {text.quranProject}
            </h3>

            <p>
              {text.quranDescription}
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
                {text.github}
              </a>

              <a
                href="https://quran-app-alzain.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {text.liveDemo}
              </a>

            </div>

          </article>


          {/* =====================
              Project 03
          ====================== */}
          <article className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              {text.shopProject}
            </h3>

            <p>
              {text.shopDescription}
            </p>

            <div className="project-tech">
              HTML · CSS · JavaScript · PHP · MySQL
            </div>

            <div className="project-links">

              <a
                href="https://github.com/Agadouf/Agadouf-Shop"
                target="_blank"
                rel="noreferrer"
              >
                {text.github}
              </a>

              <a
                href="https://iphone-shop.infinityfreeapp.com"
                target="_blank"
                rel="noreferrer"
              >
                {text.liveDemo}
              </a>

            </div>

          </article>


          {/* =====================
              Project 04
          ====================== */}
          <article className="project-card">

            <div className="project-number">
              04
            </div>

            <h3>
              {text.alawlamaProject}
            </h3>

            <p>
              {text.alawlamaDescription}
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
                {text.github}
              </a>

              <a
                href="https://alawlama.ifree.page/login.php"
                target="_blank"
                rel="noreferrer"
              >
                {text.liveDemo}
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

          <h2>
            {text.educationTitle}
          </h2>

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
              {isArabic
                ? "هندسة المعلوماتية"
                : "Informatics Engineering"}
            </h4>

            <p>
              {text.educationDescription}
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
          05 — {text.contact}
        </p>

        <h2>
          {text.contactTitle}
        </h2>

        <p>
          {text.contactDescription}
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:aagadouf@gmail.com"
            className="btn primary-btn"
          >
            {text.emailMe}
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
          {text.footer}
        </p>

      </footer>

    </div>
  );
}

export default App;
