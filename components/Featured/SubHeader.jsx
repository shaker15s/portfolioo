import React from 'react'

const SERVICES = [
  {
    title: 'Full-Stack Web Development',
    body:
      'Building real products end-to-end with Python/Django, React/Next.js, PostgreSQL and Supabase, from the data model to the deployed site.',
  },
  {
    title: 'AI Agents & LLM Evaluation',
    body:
      'Building Arabic-first AI agents with real guardrails: permission-aware, audited actions, and evaluation in Arabic and English.',
  },
  {
    title: 'Product & Founder Work',
    body:
      "Starting from the user's problem: interviewing real sellers, making product decisions, and shipping Lo2ta from idea to a live site.",
  },
  {
    title: 'Engineering Habits',
    body:
      "A mechanical engineering student's habits: structured problem solving, careful verification, and clear writing.",
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
