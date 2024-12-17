'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8"
        >
          <span className="text-purple-400">#</span>contact
        </motion.h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full" />
    </section>
  )
}

