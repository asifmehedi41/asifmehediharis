"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@components/ui/button"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon, ArrowRightIcon } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Junior Software Engineer at ByteCode"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)

        // Reset after a pause
        setTimeout(() => {
          currentIndex = 0
          const resetInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.slice(0, currentIndex))
              currentIndex++
            } else {
              clearInterval(resetInterval)
            }
          }, 100)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-14">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, Myself <span className="text-primary">Asif Mehedi Haris</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-8">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              A passionate software engineer specializing in full-stack development with expertise in various
              programming languages and frameworks.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/asifmehedi41" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/asifmehedi41/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/developerasif/" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/developerasif11" aria-label="Twitter">
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/asif.jpeg"
                alt="Asif Mehedi Haris"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <hr className="my-8 border-t-2 border-primary/40" />
    </div>
  )
}
