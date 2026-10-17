"use client";
import { useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll(".animate-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.about}`} id="about" ref={sectionRef}>
      <div className="container">
        <div className="animate-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Getting to know the developer behind the code
          </p>
        </div>

        <div className={`${styles.aboutGrid} animate-in`}>
          <div className={styles.aboutAvatar}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarPlaceholder}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span className={styles.avatarLabel}>Photo coming soon</span>
              </div>
              <div className={styles.avatarGlow} />
              <div className={styles.avatarRing} />
            </div>
          </div>

          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              I&apos;m a <span className={styles.textHighlight}>Senior SAP Hybris Developer</span> currently
              working at <span className={styles.textHighlight}>Nagarro</span> in Chennai, India. With over
              3 years of experience in enterprise e-commerce development, I specialize in building robust,
              scalable solutions using <span className={styles.textHighlight}>Java, Spring, and SAP Commerce</span>.
            </p>
            <p className={styles.aboutText}>
              Previously at <span className={styles.textHighlight}>TCS (Carnival Cruise Line)</span>, I designed
              custom OCC REST APIs, automated data processing with Cron Jobs, and optimized SQL operations
              processing over <span className={styles.textHighlight}>40 million records</span> — reducing
              execution time to just 2 minutes.
            </p>
            <p className={styles.aboutText}>
              I&apos;m passionate about writing clean, efficient code and building systems that make a real
              impact. When I&apos;m not coding, you&apos;ll find me solving DSA problems on LeetCode or exploring
              system design patterns.
            </p>

            <div className={styles.aboutHighlights}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏢</div>
                <div>
                  <strong>Currently at</strong>
                  <span>Nagarro, Chennai</span>
                </div>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🎓</div>
                <div>
                  <strong>B.Tech CSE</strong>
                  <span>SRM IST — 8.88 CGPA</span>
                </div>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏆</div>
                <div>
                  <strong>LeetCode</strong>
                  <span>96/22271 in Contest 294</span>
                </div>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>⭐</div>
                <div>
                  <strong>Star Team Award</strong>
                  <span>Outstanding Contributions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
