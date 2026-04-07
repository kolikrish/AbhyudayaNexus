'use client';

interface GradientSmokeTextProps {
  text: string;
  subtitle?: string;
  className?: string;
  textSize?: string;
  subtitleSize?: string;
  gradientImage?: string;
  showSubtitle?: boolean;
}

export default function GradientSmokeText({
  text,
  subtitle,
  className = '',
  textSize = 'clamp(3.5rem, 15vw, 8rem)',
  subtitleSize = 'text-xl md:text-3xl lg:text-4xl',
  gradientImage = '/assets/gradient%20bg.jpg',
  showSubtitle = true
}: GradientSmokeTextProps) {
  return (
    <div className={`relative w-full min-h-[50vh] bg-[#0C0C0C] overflow-hidden flex items-center justify-center py-16 ${className}`}>
      <div className="text-center space-y-4">
        {/* Smoke layers container */}
        <div className="relative inline-block">
          {/* Extra wide smoke layer */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium"
            style={{ 
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: textSize,
              fontWeight: 800,
              background: `url(${gradientImage}) center/cover`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'blur(60px)',
              opacity: 0.3,
              zIndex: 1
            }}
          >
            {text}
          </div>
          
          {/* Main text with pseudo-elements */}
          <h1 
            data-text={text}
            className="gradient-text relative whitespace-nowrap" 
            style={{ 
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: textSize,
              fontWeight: 800,
              background: `url(${gradientImage}) center/cover`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              zIndex: 2
            }}
          >
            {text}
          </h1>
        </div>
        
        {showSubtitle && subtitle && (
          <p className={`${subtitleSize} font-medium text-[#FFF2EB]`} style={{ fontFamily: 'var(--font-lexend), sans-serif' }}>
            {subtitle}
          </p>
        )}
      </div>
      
      <style jsx>{`
        .gradient-text::before,
        .gradient-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(${gradientImage}) center/cover;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 800;
          font-size: inherit;
          font-family: inherit;
          white-space: nowrap;
        }
        
        .gradient-text::before {
          z-index: -1;
          filter: blur(10px);
          opacity: 0.3;
        }
        
        .gradient-text::after {
          z-index: -2;
          filter: blur(10px);
          opacity: 0.4;
        }
      `}</style>
    </div>
  );
}