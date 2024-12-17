'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: 'Led the frontend development of multiple high-traffic web applications, improving performance and user experience.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2018 - 2021',
    description: 'Developed and maintained full-stack applications using React, Node.js, and MongoDB.',
  },
  {
    title: 'Junior Web Developer',
    company: 'WebCraft Agency',
    period: '2016 - 2018',
    description: 'Assisted in the development of responsive websites and implemented designs using HTML, CSS, and JavaScript.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className="text-purple-400">#</span>experience
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

