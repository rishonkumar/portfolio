"use client";
import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Nagarro",
    role: "SAP Hybris Developer",
    tech: "SAP Commerce, Java, Spring, SQL",
    period: "July 2025 – Present",
    location: "Chennai, India",
    highlights: [
      "Built custom OCC APIs and configured Business Process templates for order fulfilment, state transitions, and payment workflows",
      "Developed real-time SAP PO integration between SAP Commerce and SAP CRM using REST APIs, Spring RestTemplate, and OAuth",
      "Integrated PayU payment gateway into SAP Commerce, improving checkout reliability",
      "Built a custom Amend Order action through Backoffice customization for secure order modifications",
      "Handled production support and critical bug fixes using Splunk, Dynatrace, and AWS QuickSight",
    ],
    technologies: [
      "SAP Commerce (Hybris)",
      "Java",
      "Spring",
      "SQL",
      "REST APIs",
      "SAP PO",
      "SAP CRM",
      "OAuth",
      "PayU",
      "Splunk",
      "Dynatrace",
    ],
    current: true,
  },
  {
    company: "Tata Consultancy Services",
    role: "SAP Hybris Developer",
    tech: "SAP Commerce, Spring, Java, SQL",
    period: "July 2022 – July 2025",
    location: "Bangalore, India",
    client: "Carnival Cruise Line",
    highlights: [
      "Designed and developed custom OCC REST APIs for order and cart management within SAP Commerce",
      "Automated data integration and file processing using Cron Jobs, reducing manual effort and improving efficiency",
      "Developed custom Interceptors to enforce business validations and improve data consistency",
      "Configured Business Process workflows for order notifications and email communication",
      "Optimized large-scale SQL data cleanup using JDBC, reducing execution time to 2 minutes while processing over 40 million records",
      "Provided production support during go-live, debugging issues through Kibana",
    ],
    technologies: [
      "SAP Commerce (Hybris)",
      "Java",
      "Spring",
      "SQL",
      "JDBC",
      "OCC",
      "WCMS",
      "Cron Jobs",
      "Business Process",
      "Kibana",
      "JUnit",
    ],
    current: false,
  },
];

export default function Experience() {
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
    <section
      className={`section ${styles.experience}`}
      id="experience"
      ref={sectionRef}
    >
      <div className="container">
        <div className="animate-in">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey in enterprise software development
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} animate-in`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.timelineDot}>
                {exp.current && <div className={styles.dotPulse} />}
              </div>

              <div className={`glass-card ${styles.timelineCard}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.company}>
                      {exp.company}
                      {exp.client && (
                        <span className={styles.client}>
                          ({exp.client})
                        </span>
                      )}
                    </h3>
                    <p className={styles.role}>{exp.role}</p>
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>

                {exp.current && (
                  <div className={styles.currentBadge}>
                    <span className={styles.currentDot} />
                    Current Role
                  </div>
                )}

                <ul className={styles.highlights}>
                  {exp.highlights.map((h, i) => (
                    <li key={i}>
                      <span className={styles.bulletIcon}>▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.techTags}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
