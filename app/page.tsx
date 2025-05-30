"use client"
import { ArrowDownIcon } from "lucide-react"

import Hero from "@components/hero"
import About from "@components/about"
import Skills from "@components/skills"
import Experience from "@components/experience"
import Projects from "@components/projects"
import Contact from "@components/contact"
import Footer from "@components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Hero />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <a
            href="#about"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            <span>Scroll to explore</span>
            <ArrowDownIcon className="h-4 w-4 animate-bounce" />
          </a>
        </div>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  )
}
