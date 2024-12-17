'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Palette, Globe, Mail } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

const roles = ['Web Designer', 'Front-end Developer', 'UI Enthusiast']

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      y: [20, 0],
      opacity: [0, 1],
      transition: { duration: 0.5 }
    })
  }, [roleIndex, controls])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-zinc-400/[0.05] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m a{' '}
              <motion.span
                key={roleIndex}
                animate={controls}
                className="inline-block text-purple-400"
              >
                {roles[roleIndex]}
              </motion.span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              I craft responsive websites using modern technologies
              that bring creativity to life and deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="group text-lg" size="lg" asChild>
                <Link href="#projects">
                 View Projects
                </Link>
               
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link href="mailto:geofreypaul40@gmail.com">
                 Contact Me
                 <Mail className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-zinc-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-zinc-900" />
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    borderRadius: ["25%", "50%", "25%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-purple-500/20"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    borderRadius: ["25%", "50%", "25%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute right-12 bottom-12 w-2/3 h-2/3 border border-purple-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm">
          <p className="text-sm text-zinc-400">Open to new opportunities and <span className="text-purple-400 font-semibold">exciting projects</span></p>
        </div>
      </motion.div>
      <div className="absolute bottom-4 left-4 flex space-x-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Code className="text-purple-400 h-8 w-8" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Palette className="text-purple-400 h-8 w-8" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Globe className="text-purple-400 h-8 w-8" />
        </motion.div>
      </div>
    </section>
  )
}

