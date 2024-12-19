'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineering Developer',
    company: 'Trickal Holdings.',
    period: 'Nov 2024 - Present',
    description: 'I developed Tconnect, a gift card platform that streamlines purchasing and redeeming gift cards. I also built the official Trickal Holdings website, focusing on a modern design and user experience. This project strengthened my skills in Next.js, React, and payment integration.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Dream Employ',
    period: 'May 2023 - Dec 2024',
    description: 'Led the development and implementation of Dream Employ, a dynamic job board web application tailored to the Malawi job market. Shortened the job clearance procedure, guaranteeing that listings fulfilled quality requirements and making money with little fees.',
  },
  {
    title: 'Frontend Engineer Intern',
    company: 'Frontend Simplified',
    period: 'Jan 2023 - Apr 2023',
    description: 'I transformed a static application into an interactive user interface using animations, transitions, and carousels. Processed API requests with Axios, and utilized Git for virtual collaboration.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className="text-purple-400">#</span>Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-zinc-700"
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-zinc-400">{exp.company}</p>
              <p className="text-sm text-zinc-500">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full" />
    </section>
  )
}

