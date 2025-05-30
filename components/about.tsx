"use client"

import { motion } from "framer-motion"
import { GraduationCapIcon, BriefcaseIcon, CodeIcon } from "lucide-react"
import { Card, CardContent } from "@components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get to know more about my background, education, and professional journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCapIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">B.Sc. in Computer Science and Engineering</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Khulna University</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Junior Software Engineer</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">ByteCode</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CodeIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Full-Stack Development</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Web & Mobile Applications</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am a passionate software engineer with a strong foundation in computer science from Khulna University.
              My journey in the world of programming began during my university years, where I developed a deep interest
              in creating efficient and user-friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently, I am working as a Junior Software Engineer at ByteCode, where I contribute to developing
              innovative solutions using various technologies. I am constantly learning and expanding my skill set to
              stay updated with the latest trends in the tech industry.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
