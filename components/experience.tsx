"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@components/ui/card"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Jr. Software Engineer",
      company: "ByteCode",
      period: "23-02-2025 - Present",
      location: "Uttara, Dhaka, Bangladesh",
      description: [
        "Recently completed a project of E-learning system using NextJS, ASP.NET and SQL server",
        "Developing web applications using React, NextJS, AngularJS, ASP.NET, and SQL Server",
        "Collaborating with cross-functional teams to define, design, and ship new features",
        "Implementing responsive design and ensuring cross-browser compatibility",
        "Participating in code reviews and providing constructive feedback to other developers",
      ],
    },
    {
      title: "Network Engineering Intern",
      company: "GeekyCloud",
      period: "2024",
      location: "Khulna, Bangladesh",
      description: [
        "Assisted in the design and implementation of network infrastructure",
        "Monitored network performance and troubleshot issues as they arose",
        "Collaborated with senior engineers to optimize network configurations",
        "Gained hands-on experience with various networking tools and technologies",
      ],
    },
    {
      title: "Student",
      company: "Khulna University",
      period: "2020 - 2024",
      location: "Khulna, Bangladesh",
      description: [
        "Developed a university Vehicle Tracking system as part of a team project",
        "Implemented database design and management using MySQL",
        "Created responsive E-commerce Website using MERN stack",
        "Successfully completed thesis on &lsquo;Meta-heuristic Algorithm to predict RNA secondary structure&rsquo;",
        "Collaborated with team members using Git for version control",
      ],
    },
  ]

  return (
    <section id="experience" className="py-4 px-4 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My professional journey and the companies I have worked with.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-800"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-950"></div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12 md:pr-6" : "md:pr-12 md:pl-6"} pl-10 md:pl-0`}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <BriefcaseIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-black">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
