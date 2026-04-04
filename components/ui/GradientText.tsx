// components/ui/GradientText.tsx
'use client'
import React from 'react'

interface GradientTextProps {
  text: string
  className?: string
}

const GradientText: React.FC<GradientTextProps> = ({ text, className = '' }) => {
  // Split text to find Bihan'25 or BIHAN'25
  const bihanRegex = /(Bihan'25|BIHAN'25)/g
  const parts = text.split(bihanRegex)
  
  return (
    <>
      {parts.map((part, index) => {
        if (part === "Bihan'25" || part === "BIHAN'25") {
          return (
            <span
              key={index}
              style={{
                background: 'linear-gradient(135deg, #ffc300 0%, #ff1f00 35%, #2d00ff 70%, #ffebeb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {part}
            </span>
          )
        }
        return <React.Fragment key={index}>{part}</React.Fragment>
      })}
    </>
  )
}

export default GradientText
