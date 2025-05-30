"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@components/ui/button"
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/#" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <Image src="/images/logoasif.png" alt="Logo" width={32} height={32} className="mr-2" />
              Asif<span className="text-primary">.dev</span>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              A passionate software engineer specializing in full-stack development.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/asifmehedi41" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/asifmehedi41" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com/developerasif11" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com/developerasif" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Asif Mehedi Haris. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </footer>
  )
}
