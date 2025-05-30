// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card, CardContent } from "@components/ui/card"
// import { Input } from "@components/ui/input"
// import { Textarea } from "@components/ui/textarea"
// import { Button } from "@components/ui/button"
// import { useToast } from "../hooks/use-toast"
// import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react"

// export default function Contact() {
//   const { toast } = useToast()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500))

//     toast({
//       title: "Message sent!",
//       description: "Thank you for your message. I'll get back to you soon.",
//     })

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     })
//     setIsSubmitting(false)
//   }

//   const contactInfo = [
//     {
//       icon: <MailIcon className="h-5 w-5 text-primary" />,
//       title: "Email",
//       value: "asifmehedi11@gmail.com",
//       link: "asifmehedi11@gmail.com",
//     },
//     {
//       icon: <PhoneIcon className="h-5 w-5 text-primary" />,
//       title: "Phone",
//       value: "+880 1753584194",
//       link: "tel:+8801753584194",
//     },
//     {
//       icon: <MapPinIcon className="h-5 w-5 text-primary" />,
//       title: "Location",
//       value: "Uttara, Dhaka, Bangladesh",
//       link: "https://www.google.com/maps/place/Uttara,+Dhaka/",
//     },
//   ]

//   return (
//     <section id="contact" className="py-16 px-14">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="mb-12 text-center"
//       >
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//           Get In <span className="text-primary">Touch</span>
//         </h2>
//         <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out to me.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="lg:col-span-1"
//         >
//           <Card className="h-full">
//             <CardContent className="p-6 h-full flex flex-col">
//               <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

//               <div className="space-y-6 flex-1">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.title}</h4>
//                       <a
//                         href={`mailto:${info.link}`}
//                         className="text-gray-900 dark:text-black hover:text-primary dark:hover:text-primary transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {info.value}
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8">
//                 <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Follow Me</h4>
//                 <div className="flex space-x-3">
//                   {["github", "linkedin", "twitter", "instagram"].map((social) => (
//                     <a
//                       key={social}
//                       href="#"
//                       className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
//                       aria-label={`Follow on ${social}`}
//                     >
//                       <span className="capitalize">{social.charAt(0)}</span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="lg:col-span-2"
//         >
//           <Card>
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-sm font-medium">
//                       Your Name
//                     </label>
//                     <Input
//                       id="name"
//                       name="name"
//                       placeholder="John Doe"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-sm font-medium">
//                       Your Email
//                     </label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="john@example.com"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="subject" className="text-sm font-medium">
//                     Subject
//                   </label>
//                   <Input
//                     id="subject"
//                     name="subject"
//                     placeholder="Project Inquiry"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Your message here..."
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isSubmitting}>
//                   {isSubmitting ? (
//                     <span className="flex items-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Sending...
//                     </span>
//                   ) : (
//                     <span className="flex items-center">
//                       <SendIcon className="mr-2 h-4 w-4" />
//                       Send Message
//                     </span>
//                   )}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"
import { Button } from "@components/ui/button"
import { useToast } from "../hooks/use-toast"
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "asifmehedi11@gmail.com",
      link: "mailto:asifmehedi11@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-5 w-5 text-primary" />,
      title: "Phone/WhatsApp",
      value: "+880 1753584194",
      link: "tel:+8801753584194",
    },
    {
      icon: <MapPinIcon className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Uttara, Dhaka, Bangladesh",
      link: "https://www.google.com/maps/place/Uttara,+Dhaka/",
    },
  ]

  return (
    <section id="contact" className="py-16 px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out to me.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <Card className="h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 flex-1">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-black hover:text-primary dark:hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  {["github", "linkedin", "twitter", "instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Follow on ${social}`}
                    >
                      <span className="capitalize">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

              <form
                action="https://formspree.io/f/meokjkza"  // Replace with your Formspree endpoint
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <SendIcon className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
