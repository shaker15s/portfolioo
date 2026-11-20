"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Single source of truth for the work shown here. It mirrors the Projects
// section of the LinkedIn profile word for word, so every surface tells the
// same story. Images are real screenshots of the live sites (public/projects).
const PROJECTS = [
  {
    name: "Lo2ta (لقطة)",
    role: "Founder · Oct 2026 – Present",
    href: "https://getlo2ta.com",
    kind: "Live",
    image: "/projects/lo2ta.jpg",
    imageAlt:
      "Lo2ta clothes page on getlo2ta.com: real product photos and prices from Nasr City shops",
    note: "A local marketplace that connects shops and home-based sellers in Nasr City with nearby buyers, who message the shop directly on WhatsApp. Built with Next.js, Supabase (PostgreSQL) and Cloudflare Workers & R2, with Google sign-in, seller listings and automated content moderation.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/getlo2ta/" },
      { label: "TikTok", href: "https://www.tiktok.com/@getlo2ta" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61596381527460" },
    ],
  },
  {
    name: "Digital Bookstore Platform",
    role: "Django e-commerce",
    href: "https://django-bookstore-teal.vercel.app",
    kind: "Live demo",
    image: "/projects/bookstore.jpg",
    imageAlt: "Home page of the Django bookstore demo: search, categories and featured books",
    note: "A full e-commerce site for books with user authentication, catalog search, cart and order handling, plus an admin panel for inventory. Built with Django, PostgreSQL, Bootstrap and JavaScript.",
    links: [{ label: "Code", href: "https://github.com/shaker15s/django-bookstore" }],
  },
  {
    name: "Mizan (ميزان)",
    role: "Arabic-first agentic ERP · In development",
    kind: "In development",
    note: "Currently building (experimental, not public yet): an ERP you talk to in Arabic. AI executes real business operations through a deterministic, permission-aware, audited gateway instead of acting as a chatbot. Built in Python with a full test suite and an evaluation harness for the agent's decisions.",
  },
  {
    name: "Personal Portfolio Website",
    role: "This site",
    href: "https://portfolioo-seven-gilt.vercel.app",
    kind: "Live",
    note: "My personal portfolio as a Full-Stack & AI engineer: projects, skills and contact, with an animated, interactive UI and light/dark themes. Next.js, Three.js, GSAP.",
    links: [{ label: "Code", href: "https://github.com/shaker15s/portfolioo" }],
  },
];

// Mirrors LinkedIn "Licenses & certifications". Only the ones with a
// credential are listed one by one; self-paced courses have no credential, so
// they are named together and never presented as certificates.
const CERTIFICATIONS = [
  {
    name: "Claude 101",
    role: "Anthropic · May 2026",
    href: "https://verify.skilljar.com/c/qcd6ca84uekz",
    kind: "Verify",
  },
  {
    name: "Claude Code in Action",
    role: "Anthropic · May 2026",
    href: "https://verify.skilljar.com/c/kqu5u3swbjfc",
    kind: "Verify",
  },
  { name: "AI Fluency: Framework & Foundations", role: "Anthropic · Mar 2026", kind: "Credential" },
  { name: "AI Fluency for Students", role: "Anthropic", kind: "Credential" },
  {
    name: "AI Fundamentals",
    role: "Google · Coursera · Aug 2026",
    href: "https://coursera.org/verify/KUQ7CAI61COI",
    kind: "Verify",
  },
  {
    name: "AI for App Deployment",
    role: "Google · Coursera · Aug 2026",
    href: "https://coursera.org/verify/0RY4V93PMNFX",
    kind: "Verify",
  },
  { name: "Data Science & Analytics", role: "HP LIFE · May 2026", kind: "Credential" },
  {
    name: "Content Marketing Essentials for SEO and AI Search",
    role: "Semrush Academy · Mar 2026",
    kind: "Credential",
  },
  { name: "Soft Skills: Teaching Skills", role: "M3aarf · Sep 2025", kind: "Credential" },
];

const SELF_PACED =
  "Self-paced coursework (no credential): Harvard CS50, Google Data Analytics, Alex The Analyst Data Analyst Bootcamp, Meta Full-Stack, Meta Advanced SQL/APIs, Hsoub Academy, and prompt engineering from Dubai Future Foundation.";

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
  const wrapperProps = hasLink ? { href: item.href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <li className={`pj-row${item.image ? " pj-row--media" : ""}`}>
      <Wrapper className={`pj-link${hasLink ? "" : " pj-link--static"}`} {...wrapperProps}>
        <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>
          {item.role && <span className="pj-role">{item.role}</span>}
          {item.note && <span className="pj-note">{item.note}</span>}
        </div>
        {item.image && (
          <img
            className="pj-thumb"
            src={item.image}
            alt={item.imageAlt || ""}
            loading="lazy"
            decoding="async"
            width={1200}
            height={542}
          />
        )}
        <span className="pj-kind">{item.kind}</span>
        <span className="pj-arrow" aria-hidden="true">
          {hasLink ? <ArrowIcon /> : <span className="pj-dot">•</span>}
        </span>
      </Wrapper>
      {item.links && (
        <div className="pj-sublinks">
          {item.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
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

      <div id="certifications" className="pj-head pj-head--secondary">
        <span className="pj-label">CERTIFICATIONS</span>
        <h2 className="pj-title">licenses &amp; certifications</h2>
      </div>

      <ul className="pj-list pj-list--compact">
        {CERTIFICATIONS.map((c, i) => (
          <Row key={c.name} item={c} index={i} />
        ))}
      </ul>
      <p className="pj-footnote">{SELF_PACED}</p>
    </section>
  );
};

export default Projects;
