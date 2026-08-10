import React from 'react'

const SERVICES = [
  {
    title: 'Full-Stack Web Development',
    body:
      'Designing and delivering high-performance web applications using React, Next.js, Django, and modern backend APIs.',
  },
  {
    title: 'AI & LLM Integration',
    body:
      'Architecting intelligent automation systems, custom RAG pipelines, and ChatGPT API integrations for real-world products.',
  },
  {
    title: 'Data Analytics & Pipelines',
    body:
      'Building robust ETL pipelines, SQL databases, and interactive Power BI & Tableau dashboards for actionable business insights.',
  },
  {
    title: 'Prompt Engineering & Safety',
    body:
      'Optimizing LLM prompts, Chain-of-Thought reasoning, hallucination detection, and red-teaming AI systems.',
  },
]

const SubHeader = () => {
  return (
    <div className='relative md:absolute md:top-1/5 left-0 md:left-1/2 w-full md:-translate-x-1/2 md:mt-40 z-10 flex flex-col md:items-start items-center px-5 md:px-0'>
      <div className='w-full md:w-1/2 text-base md:text-2xl flex flex-col gap-3 md:gap-4 leading-relaxed md:leading-snug text-center md:text-left'>
        <p>
          Shaker Abdallah is a Full-Stack Engineer, AI Specialist, and Data Analyst building intelligent digital systems across web, mobile, and AI.
        </p>
        <p>
          He integrates AI Automation into modern software architectures, engineering complete data-driven ecosystems instead of standalone tools.
        </p>
      </div>

      <div className='about-inline-services w-full md:w-1/2 mt-8 md:mt-12 h-auto md:h-[36vh]'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>SERVICES</span>
        </div>
        <div className='about-inline-services__grid'>
          {SERVICES.map((service) => (
            <article key={service.title} className='about-inline-services__item'>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
