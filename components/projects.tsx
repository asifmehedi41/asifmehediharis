"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Button } from "@components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A comprehensive system for managing hospital operations including patient ,doctor, and appointment management.",
      image: "/images/hospital.jpg?height=400&width=600",
      category: "web",
      technologies: ["Angular", "ASP.NET", "SQL Server", "Tailwind CSS"],
      github: "https://github.com/asifmehedi41/Hospital-Manage-Angular/tree/master",
      demo: "#",
    },
    {
      title: "E-Learning System",
      description: "A responsive e-learning platform with course management, user & Teacher & Admin Profile.",
      image: "/images/AfterLoginPage.png?height=800&width=600",
      category: "web",
      technologies: ["Next", "Asp.NET","SQL Server", "Tailwind CSS","Typescript"],
      github: "#",
      demo: "#",
    },
    {
      title: "CRUD Application",
      description: "A simple CRUD application for managing products.",
      image: "/images/productshow.png?height=400&width=600",
      category: "web",
      technologies: ["ASP.NET Core", "MVC","Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "news-portal",
      description: "A news portal application with user authentication and article management.",
      image: "/images/prohoranto.png?height=400&width=600",
      category: "web",
      technologies: ["Wordpress", "Html", "CSS"],
      github: "#",
      demo: "https://prohoranto.com/",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies.",
      image: "/images/portfolio.png?height=400&width=600",
      category: "web",
      technologies: ["Next.js", "Tailwind CSS", "Typescript"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-16 px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent projects and applications I've built.
        </p>
      </motion.div>

      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {["all", "web", "mobile", "iot", "data"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-black">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
