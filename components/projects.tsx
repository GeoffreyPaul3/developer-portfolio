'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Dream Employ',
    description: 'Premier Job Listing Platform.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
    live: 'https://www.dreamemploy.com',
    preview: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'T Connect',
    description: 'Gift Card Marketplace.',
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Prisma'],
    live: 'https://www.tconnect.store',
    preview: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Trickal Holdings',
    description: 'Official Website For Trickal Holdings.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://www.trickalholdings.com',
    preview: '/placeholder.svg?height=400&width=600',
  },
]

export function Projects() {
  const [filter, setFilter] = useState('All')
  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter))

  return (
    <section id="projects" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className="text-purple-400">#</span>Projects
        </motion.h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? 'default' : 'secondary'}
              onClick={() => setFilter(tech)}
              size="sm"
            >
              {tech}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 overflow-hidden group">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-zinc-800 rounded-md overflow-hidden">
                    <Image 
                      src={project.preview} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      width={600}
                      height={600}
                    />
                  </div>
                  <p className="text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-zinc-400 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      Live <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

