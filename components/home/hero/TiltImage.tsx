'use client'
import { useState, MouseEvent } from 'react';
import Image from 'next/image'

export default function TiltImage() {
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * -30;
    setRotation({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        perspective: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ width: '70%', maxWidth: '800px', display: 'block' }}>
        <Image
          src="/assets/bihan_black.png"
          alt="3D Effect"
          width={1200}
          height={800}
          style={{
            width: '100%',
            height: 'auto',
            transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
            transition: 'transform 0.2s ease',
            borderRadius: '15px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
