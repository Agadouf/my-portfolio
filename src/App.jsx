        <div className="section-heading">
          <span>03</span>
          <h2>{t.projectsTitle}</h2>
        </div>

        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-symbol" aria-hidden="true">
                  {"</>"}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">{project.tech}</div>

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
      <section id="education" className="section">
        <div className="section-heading">
          <span>04</span>
          <h2>{t.educationTitle}</h2>
        </div>

        <article className="education-card">
          <div className="education-year">2024 — Present</div>

          <div className="education-info">
            <span className="education-tag">UNIVERSITY</span>
            <h3>{t.university}</h3>
            <h4>{t.major}</h4>
            <p>{t.educationDescription}</p>
          </div>
        </article>
      </section>

      {/* CV */}
      <section id="cv" className="section cv-section">
        <div className="section-heading">
          <span>05</span>
          <h2>{t.cvTitle}</h2>
        </div>

        <div className="cv-content">
          <p>{t.cvDescription}</p>

          <a
            href="/Abdalrahim_Siddig_Idris_Agadouf_CV.pdf"
            download="Abdalrahim_Siddig_Idris_Agadouf_CV.pdf"
            className="btn primary-btn cv-download-btn"
          >
            <span aria-hidden="true">📥</span> {t.downloadCv}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="contact-label">06 — {t.nav[6]}</p>

        <h2>{t.contactTitle}</h2>
        <p>{t.contactDescription}</p>

        <div className="contact-buttons">
          <a href="mailto:aagadouf@gmail.com" className="btn primary-btn">
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

      <footer>
        <p>© 2026 Abdalrahim Agadouf. {t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
