"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 95 },
      { name: "SQL", level: 88 },
      { name: "JavaScript", level: 75 },
      { name: "Go", level: 40 },
    ],
  },
  {
    title: "Frameworks & Tech",
    icon: "🔧",
    skills: [
      { name: "SAP Commerce (Hybris)", level: 92 },
      { name: "Spring / Spring Boot", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "JDBC", level: 85 },
    ],
  },
  {
    title: "SAP Commerce",
    icon: "🛒",
    skills: [
      { name: "OCC APIs", level: 95 },
      { name: "Business Process", level: 88 },
      { name: "Backoffice / WCMS", level: 85 },
      { name: "Interceptors", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Splunk / Kibana", level: 80 },
      { name: "Dynatrace", level: 78 },
      { name: "Postman", level: 92 },
    ],
  },
  {
    title: "Concepts",
    icon: "🧠",
    skills: [
      { name: "Microservices", level: 85 },
      { name: "OAuth 2.0", level: 80 },
      { name: "MVC Architecture", level: 88 },
      { name: "System Design", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "SAP HANA", level: 70 },
    ],
  },
];

const orbitingTech = [
  "Java", "Spring", "SAP", "SQL", "REST", "OAuth",
  "Git", "JUnit", "Go", "JDBC", "MVC", "API",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".animate-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${styles.skills}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="container">
        <div className="animate-in">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily
          </p>
        </div>

        {/* Orbiting tech visualization */}
        <div className={`${styles.orbitContainer} animate-in`}>
          <div className={styles.orbitCenter}>
            <span className={styles.orbitCenterText}>Full Stack</span>
          </div>
          {orbitingTech.map((tech, i) => (
            <div
              key={tech}
              className={styles.orbitItem}
              style={{
                "--orbit-radius": `${100 + (i % 3) * 45}px`,
                "--orbit-duration": `${18 + i * 3}s`,
                "--orbit-delay": `${-i * 1.5}s`,
                "--orbit-start": `${(i * 360) / orbitingTech.length}deg`,
              }}
            >
              <span className={styles.orbitLabel}>{tech}</span>
            </div>
          ))}
          <div className={styles.orbitRing1} />
          <div className={styles.orbitRing2} />
          <div className={styles.orbitRing3} />
        </div>

        {/* Skill bars */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className={`${styles.skillCategory} animate-in`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{
                          width: animated ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 0.1 + i * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
