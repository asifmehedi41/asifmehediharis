"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs"
import { Badge } from "@components/ui/badge"
import { SkillMeter } from "@components/ui/skill-meter"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages")

  const skillCategories = {
    languages: [
      { name: "JavaScript", level: 70, color: "primary" as const },
      { name: "Python", level: 60, color: "success" as const },
      { name: "C++", level: 70, color: "secondary" as const },
      { name: "C#", level: 70, color: "primary" as const },
      { name: "Java", level: 60, color: "warning" as const },
      { name: "PHP", level: 65, color: "primary" as const },
      { name: "C", level: 75, color: "secondary" as const },
    ],
    frontend: [
      { name: "React", level: 90, color: "success" as const },
      { name: "Angular", level: 85, color: "danger" as const },
      { name: "HTML5", level: 95, color: "success" as const },
      { name: "CSS3", level: 90, color: "primary" as const },
      { name: "Tailwind", level: 85, color: "success" as const },
      { name: "Bootstrap", level: 80, color: "primary" as const },
      { name: "Redux", level: 75, color: "warning" as const },
    ],
    backend: [
      { name: "Node.js", level: 85, color: "success" as const },
      { name: "Laravel", level: 80, color: "danger" as const },
      { name: ".NET", level: 75, color: "primary" as const },
      { name: "MongoDB", level: 70, color: "success" as const },
      { name: "SQL Server", level: 75, color: "primary" as const },
    ],
    tools: [
      { name: "Git", level: 90, color: "success" as const },
      { name: "Figma", level: 75, color: "warning" as const },
      { name: "Arduino", level: 70, color: "secondary" as const },
      { name: "Postman", level: 85, color: "warning" as const },
      { name: "Flutter", level: 65, color: "primary" as const },
      { name: "WordPress",level: 80, color: "primary" as const },
      { name: "Shopify", level: 70, color: "secondary" as const },
    ],
  }

  return (
    <section id="skills" className="py-4 px-12 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels.
        </p>
      </motion.div>

      <Tabs defaultValue="languages" className="w-full" onValueChange={setActiveTab}>
        {/* <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
        </div> */}
         <div className="flex justify-center mb-8">
  <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl ">
    <TabsTrigger
      value="languages"
      className="px-6 py-1 text-center text-gray-400 bg-transparent border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:text-white active:bg-blue-600 active:text-white rounded-t-lg"
    >
      Languages
    </TabsTrigger>
    <TabsTrigger
      value="frontend"
      className="px-6 py-1 text-center text-gray-400 bg-transparent border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:text-white active:bg-blue-600 active:text-white rounded-t-lg"
    >
      Frontend
    </TabsTrigger>
    <TabsTrigger
      value="backend"
      className="px-6 py-1 text-center text-gray-400 bg-transparent border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:text-white active:bg-blue-600 active:text-white rounded-t-lg"
    >
      Backend
    </TabsTrigger>
    <TabsTrigger
      value="tools"
      className="px-6 py-1 text-center text-gray-400 bg-transparent border border-gray-700 transition-all duration-300 hover:bg-gray-700 hover:text-white active:bg-blue-600 active:text-white rounded-t-lg"
    >
      Tools
    </TabsTrigger>
  </TabsList>
</div>





        {Object.entries(skillCategories).map(([category, skills]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === category ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <SkillMeter
                    value={skill.level}
                    label={skill.name}
                    color={skill.color}
                    size="md"
                    animated={true}
                    showPercentage={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-xl font-semibold text-center mb-6 dark:text-white">All Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "JavaScript",
            "Python",
            "C++",
            "C#",
            "Java",
            "PHP",
            "C",
            "React",
            "Angular",
            "HTML5",
            "CSS3",
            "Tailwind",
            "Bootstrap",
            "Redux",
            "Node.js",
            "Laravel",
            ".NET",
            "MongoDB",
            "MySQL",
            "Git",
            "Figma",
            "Arduino",
            "Postman",
            "Flutter",
            "WordPress",
            "Shopify",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-green-600">5+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
        </div>
        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-blue-600">9+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Advanced Level</div>
        </div>
        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">7+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Intermediate</div>
        </div>
        <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-purple-600">27+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Skills</div>
        </div>
      </motion.div>
    </section>
  )
}
