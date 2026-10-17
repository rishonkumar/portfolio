"use client";
import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Patient Management System",
    description:
      "A microservices-based healthcare system built with Java, Spring Boot, and AWS. Features patient CRUD operations, service discovery, and cloud deployment.",
    tech: ["Java", "Spring Boot", "AWS", "Microservices", "REST APIs"],
    github: "https://github.com/rishonkumar/Patient-Management-System-with-Microservices-Java-Spring-Boot-AWS",
    icon: "🏥",
    color: "cyan",
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortening service implementation with redirect functionality, built using Java to demonstrate system design concepts like hashing and database design.",
    tech: ["Java", "System Design", "Hashing", "REST APIs"],
    github: "https://github.com/rishonkumar/URL-Shortener-Implementation",
    icon: "🔗",
    color: "purple",
  },
  {
    title: "DSA SDE Sheet",
    description:
      "A comprehensive collection of Data Structures and Algorithms problems solved in Java, organized by topics following the SDE Sheet pattern for interview preparation.",
    tech: ["Java", "DSA", "Algorithms", "Problem Solving"],
    github: "https://github.com/rishonkumar/DSA-SDE-SHEET",
    icon: "📊",
    color: "pink",
  },
  {
    title: "Low Level Design",
    description:
      "Object-oriented design implementations in Java covering essential design patterns, SOLID principles, and real-world system design problems.",
    tech: ["Java", "Design Patterns", "SOLID", "OOP"],
    github: "https://github.com/rishonkumar/Low_Level_Design",
    icon: "⚙️",
    color: "blue",
  },
  {
    title: "GoLang Learning",
    description:
      "Hands-on Go programming projects and exercises exploring concurrency, goroutines, channels, and building performant backend services.",
    tech: ["Go", "Concurrency", "Backend", "Learning"],
    github: "https://github.com/rishonkumar/GoLang-Learning",
    icon: "🐹",
    color: "cyan",
  },
  {
    title: "RestTemplate Learning",
    description:
      "Spring RestTemplate examples covering HTTP client operations, API consumption patterns, error handling, and integration with external services.",
    tech: ["Java", "Spring", "RestTemplate", "HTTP Client"],
    github: "https://github.com/rishonkumar/RestTemplate-Learning",
    icon: "🌐",
    color: "purple",
  },
];

const colorMap = {
  cyan: { border: "rgba(0, 229, 255, 0.3)", bg: "rgba(0, 229, 255, 0.05)", glow: "rgba(0, 229, 255, 0.15)" },
  purple: { border: "rgba(180, 124, 255, 0.3)", bg: "rgba(180, 124, 255, 0.05)", glow: "rgba(180, 124, 255, 0.15)" },
  pink: { border: "rgba(255, 110, 199, 0.3)", bg: "rgba(255, 110, 199, 0.05)", glow: "rgba(255, 110, 199, 0.15)" },
  blue: { border: "rgba(77, 124, 255, 0.3)", bg: "rgba(77, 124, 255, 0.05)", glow: "rgba(77, 124, 255, 0.15)" },
};

export default function Projects() {
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
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".animate-in");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.projects}`} id="projects" ref={sectionRef}>
      <div className="container">
        <div className="animate-in">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Open source work and side projects I&apos;ve built
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectCard} animate-in`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                "--card-border": colorMap[project.color].border,
                "--card-bg": colorMap[project.color].bg,
                "--card-glow": colorMap[project.color].glow,
              }}
            >
              <div className={styles.cardTop}>
                <span className={styles.projectIcon}>{project.icon}</span>
                <svg
                  className={styles.githubIcon}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectTech}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.projectTechTag}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className={`${styles.moreProjects} animate-in`}>
          <a
            href="https://github.com/rishonkumar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn glow-btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            View All 130+ Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
