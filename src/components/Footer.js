"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <span className={styles.logoText}>
              <span className="gradient-text">RK</span>
              <span className={styles.logoDot}>.</span>
            </span>
            <p className={styles.brandTagline}>
              SAP Hybris Developer & Full Stack Software Engineer.
              Building scalable, enterprise-grade digital experiences.
            </p>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.navGroup}>
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.navGroup}>
              <h4>Social</h4>
              <a
                href="https://github.com/rishonkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rishonkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:rishonwork1305@gmail.com">Email</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p suppressHydrationWarning>© {new Date().getFullYear()} Rishon Kumar Rahi. Built with Next.js & Modern CSS.</p>
          <button
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Back to top"
            id="back-to-top"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
