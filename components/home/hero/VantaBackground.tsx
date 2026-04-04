// components/VantaBackground.tsx
'use client'
import { useEffect, useRef, useState } from 'react'

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const initVanta = () => {
        if (typeof window !== 'undefined' && (window as any).VANTA) {
          try {
            const effect = (window as any).VANTA.FOG({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              highlightColor: 0xffc300,
              midtoneColor: 0xff1f00,
              lowlightColor: 0x2d00ff,
              baseColor: 0xffebeb,
              blurFactor: 0.6,
              speed: 1,
              zoom: 1,
            })
            setVantaEffect(effect)
          } catch (error) {
            console.error('Vanta initialization error:', error)
          }
        } else {
          setTimeout(initVanta, 100)
        }
      }

      initVanta()
    }

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])

  return (
    <div
      ref={vantaRef}
      className="w-full h-full"
    />
  )
}

export default VantaBackground
