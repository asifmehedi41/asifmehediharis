"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "../../lib/utils";
interface SkillMeterProps {
  value: number
  label?: string
  showPercentage?: boolean
  animated?: boolean
  color?: "primary" | "secondary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
  className?: string
}

const SkillMeter: React.FC<SkillMeterProps> = ({
  value,
  label,
  showPercentage = true,
  animated = true,
  color = "primary",
  size = "md",
  className,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Clamp value between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value))

  useEffect(() => {
    if (animated && isVisible) {
      const timer = setTimeout(() => {
        setAnimatedValue(clampedValue)
      }, 100)
      return () => clearTimeout(timer)
    } else if (!animated) {
      setAnimatedValue(clampedValue)
    }
  }, [clampedValue, animated, isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`skill-meter-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [label])

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  }

  const colorClasses = {
    primary: "bg-purple-600",
    secondary: "bg-gray-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    danger: "bg-red-600",
  }

  const getSkillLevel = (value: number) => {
    if (value >= 90) return { text: "Expert", color: "text-green-600" }
    if (value >= 75) return { text: "Advanced", color: "text-blue-600" }
    if (value >= 60) return { text: "Intermediate", color: "text-yellow-600" }
    if (value >= 40) return { text: "Beginner", color: "text-orange-600" }
    return { text: "Novice", color: "text-red-600" }
  }

  const skillLevel = getSkillLevel(clampedValue)

  return (
    <div id={`skill-meter-${label}`} className={cn("w-full space-y-2", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-800 dark:text-gray-200">{label}</span>
          <div className="flex items-center gap-2">
            {showPercentage && <span className="text-sm text-gray-600 dark:text-gray-400">{clampedValue}%</span>}
            <span className={cn("text-xs font-semibold", skillLevel.color)}>{skillLevel.text}</span>
          </div>
        </div>
      )}

      <div className="relative">
        {/* Background bar */}
        <div className={cn("w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden", sizeClasses[size])}>
          {/* Progress bar */}
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden",
              colorClasses[color],
            )}
            style={{
              width: `${animatedValue}%`,
              transition: animated ? "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Glow effect for high values */}
        {clampedValue >= 80 && (
          <div
            className={cn("absolute inset-0 rounded-full blur-sm opacity-30", colorClasses[color], sizeClasses[size])}
            style={{ width: `${animatedValue}%` }}
          />
        )}
      </div>

      {/* Progress dots indicator */}
      <div className="flex justify-between items-center mt-1">
        {[20, 40, 60, 80, 100].map((milestone) => (
          <div
            key={milestone}
            className={cn(
              "w-1 h-1 rounded-full transition-colors duration-300",
              animatedValue >= milestone ? colorClasses[color] : "bg-gray-300 dark:bg-gray-600",
            )}
          />
        ))}
      </div>
    </div>
  )
}

export { SkillMeter }
