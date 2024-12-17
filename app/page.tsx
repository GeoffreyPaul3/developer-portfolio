import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { FloatingActionButton } from '@/components/floating-action-button'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <FloatingActionButton />
    </>
  )
}

