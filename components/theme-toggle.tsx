"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-[110] w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all"
      style={{
        background: theme === "dark" 
          ? 'linear-gradient(135deg, rgba(78, 203, 113, 0.15), rgba(57, 166, 205, 0.15))'
          : 'linear-gradient(135deg, rgba(78, 203, 113, 0.25), rgba(57, 166, 205, 0.25))',
        borderColor: theme === "dark" ? 'rgba(78, 203, 113, 0.3)' : 'rgba(78, 203, 113, 0.5)',
        boxShadow: theme === "dark" 
          ? '0 4px 15px rgba(78, 203, 113, 0.2)'
          : '0 4px 15px rgba(78, 203, 113, 0.4)',
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
        key={theme}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-primary" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </motion.div>

      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-50 transition-opacity"
        style={{
          background: 'radial-gradient(circle, rgba(78, 203, 113, 0.4), transparent)',
          pointerEvents: 'none'
        }}
      />
    </motion.button>
  )
}

