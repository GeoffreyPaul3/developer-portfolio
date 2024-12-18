'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skills = {
    Languages: ['JavaScript', 'TypeScript', 'Python'],
    Frameworks: ['React', 'Next.js', 'Remix.js'],
    Databases: ['MongoDB', 'PostgreSQL', 'Neon', 'Redis'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite'],
    Other: ['HTML', 'CSS', 'REST APIs', 'Clerk', 'AppWrite', 'Supabase', 'TailwindCSS', 'Shadcn-UI'],
  }
  

  return (
    <section id="skills" className="py-24 relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className="text-purple-400">#</span>Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg">{category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-zinc-800/50 border border-zinc-700 rounded-md p-2 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full" />
    </section>
  )
}

