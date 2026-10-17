"use client";
import { useEffect, useRef } from "react";
import styles from "./Education.module.css";

export default function Education() {
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
    <section
      className={`section ${styles.education}`}
      id="education"
      ref={sectionRef}
    >
      <div className="container">
        <div className="animate-in">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background and achievements</p>
        </div>

        <div className={`${styles.eduCard} glass-card animate-in`}>
          <div className={styles.eduIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className={styles.eduContent}>
            <h3 className={styles.eduInstitution}>
              SRM Institute of Science and Technology
            </h3>
            <p className={styles.eduDegree}>
              B.Tech — Computer Science And Engineering (CSE)
            </p>
            <div className={styles.eduMeta}>
              <span className={styles.eduPeriod}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                July 2018 – June 2022
              </span>
              <span className={styles.eduCgpa}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                CGPA: 8.88
              </span>
            </div>
          </div>
          <div className={styles.eduGlow} />
        </div>

        {/* Achievements section */}
        <div className={`${styles.achievementsSection} animate-in`}>
          <h3 className={styles.achieveTitle}>Achievements</h3>
          <div className={styles.achieveGrid}>
            <div className={styles.achieveCard}>
              <div className={styles.achieveIcon}>🏆</div>
              <div>
                <h4>Star Team Award</h4>
                <p>
                  Awarded in recognition of outstanding contributions to the
                  project and organization at TCS
                </p>
              </div>
            </div>
            <div className={styles.achieveCard}>
              <div className={styles.achieveIcon}>🎯</div>
              <div>
                <h4>LeetCode Contest Rating</h4>
                <p>
                  Ranked <strong>96 / 22,271</strong> in Weekly Contest 294 —
                  demonstrating strong problem-solving skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
