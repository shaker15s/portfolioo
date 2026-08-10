"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "RTC Charity Platform (Awwwards Design)",
    href: "https://rtc-kohl.vercel.app/",
    kind: "Live Site",
  },
  {
    name: "Royal Wedding Experience (Asem & Yara)",
    href: "https://door-weedy.vercel.app/",
    kind: "Live Site",
  },
  {
    name: "Interactive 3D Neural Portfolio",
    href: "https://shaker15s.github.io/portfolio/",
    kind: "Live 3D WebGL",
  },
  {
    name: "Sara Interactive Proposal Web App",
    href: "https://sara-poroposal.vercel.app/",
    kind: "Live Site",
  },
  {
    name: "Bots LT Proposal Interactive Suite",
    href: "https://bots.lt/Tools/Propose/#",
    kind: "Live Tool",
  },
  {
    name: "AI-Driven Recruitment Ecosystem",
    href: "https://github.com/shaker15s",
    kind: "Full-Stack AI",
  },
  {
    name: "Air Canvas — Gesture Drawing App",
    href: "https://github.com/shaker15s",
    kind: "Computer Vision",
  },
];

const VENTURES = [
  {
    name: "AI & LLM Solutions",
    role: "AI Engineer & Prompt Architect",
    href: "https://github.com/shaker15s",
    kind: "Active",
    note:
      "Designing custom RAG workflows, ChatGPT API integrations, and Chain-of-Thought prompting systems for clients.",
  },
  {
    name: "Full-Stack Web Development",
    role: "Lead Web Developer",
    href: "https://github.com/shaker15s",
    kind: "Active",
    note:
      "Engineering modern Next.js, React, and Django web platforms with optimized sub-100ms database response times.",
  },
  {
    name: "Data Analytics & BI",
    role: "Data & ETL Specialist",
    href: "https://github.com/shaker15s",
    kind: "Active",
    note:
      "Transforming complex datasets with Python, SQL, and interactive Power BI dashboards to empower business decisions.",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const Row = ({ item, index }) => {
  const hasLink = Boolean(item.href);
  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: item.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <li className="pj-row">
      <Wrapper
        className={`pj-link${hasLink ? "" : " pj-link--static"}`}
        {...wrapperProps}
      >
        <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>
          {item.role && <span className="pj-role">{item.role}</span>}
          {item.note && <span className="pj-note">{item.note}</span>}
        </div>
        <span className="pj-kind">{item.kind}</span>
        <span className="pj-arrow" aria-hidden="true">
          {hasLink ? <ArrowIcon /> : <span className="pj-dot">•</span>}
        </span>
      </Wrapper>
    </li>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = sectionRef.current.querySelectorAll(".pj-row");
      gsap.from(rows, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const titles = sectionRef.current.querySelectorAll(".pj-title");
      gsap.from(titles, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <span className="pj-label">PROJECTS</span>
        <h2 className="pj-title">selected work</h2>
      </div>

      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <Row key={p.name} item={p} index={i} />
        ))}
      </ul>

      <div id="ventures" className="pj-head pj-head--secondary">
        <span className="pj-label">VENTURES</span>
        <h2 className="pj-title">business &amp; ventures</h2>
      </div>

      <ul className="pj-list">
        {VENTURES.map((v, i) => (
          <Row key={v.name} item={v} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
