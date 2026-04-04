/* eslint-disable */
// components/ui/GradientText.tsx

'use client'
import React from 'react'

interface GradientTextProps {
  text: string
  className?: string
}

const GradientText: React.FC<GradientTextProps> = ({ text, className = '' }) => {
  
  const bihanRegex = /(Abhyudaya)/g
  const parts = text.split(bihanRegex)
  
  return (
    <>
      {parts.map((part, index) => {
        if (part === "Abhyudaya") {
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
