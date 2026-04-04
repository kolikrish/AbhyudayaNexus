'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import JoinBihanButton from './JoinBihanButton'

interface CardProps {
    card: {
        id: number
        highlighted: boolean
        image: string
        columnOpacity: number
    }
    hoveredIndex: number | null
    setHoveredIndex: (index: number | null) => void
}

const CardComponent = ({ card, hoveredIndex, setHoveredIndex }: CardProps) => {
    const isHovered = hoveredIndex === card.id

    return (
        <div
            className="transition-all overflow-hidden duration-500 ease-out smoke-stroke-container w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60"
            style={{
                opacity: isHovered ? 1 : card.columnOpacity,
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredIndex(card.id)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="w-full h-full rounded-lg overflow-hidden border-2 border-gray-600 relative">
                <Image
                    src={card.image}
                    alt={`Fresher ${card.id + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out"
                />
            </div>
        </div>
    )
}

const Gallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const images = [
        '/assets/4.jpeg',
        '/assets/5.jpeg',
        '/assets/6.jpeg',
        '/assets/7.jpeg',
        '/assets/8.jpeg',
        '/assets/12.jpeg',
        '/assets/9.jpeg',
        '/assets/10.jpeg',
        '/assets/11.jpeg',
        '/assets/13.jpeg',
        '/assets/14.jpeg',
        '/assets/15.jpeg',
    ]

    return (
        <div className="min-h-screen bg-[#0C0C0C] text-[#FFF2EB] overflow-hidden ">
            <div className="flex flex-col items-center">
                {/* Header */}
                <div className="max-w-6xl w-full mb-16 pl-5 pt-8">
                    <h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-4 leading-tight"
                        style={{ fontFamily: 'var(--font-lexend), Lexend, Impact, sans-serif' }}
                    >
                        When <span className="gradient-fresher">Innovation</span>
                        <br className="hidden md:block" />
                          took the Stage
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl max-w-3xl leading-relaxed md:leading-10">
                        Where Logic Meets Creativity <span className="gradient-fresher">Abhyudaya</span> Spotlighting{' '}
                        {/* <br className="hidden md:block" /> */}
                        Talent, Energy, and <span className="gradient-fresher">Unmatched Vibes.</span>
                    </p>
                </div>

                {/* Gallery Layout */}
            <div className="relative w-full flex justify-center mb-8 overflow-hidden">
                <div className="flex gap-6 items-start relative">

                    {/* Column 1 - Half outside left, positioned down - opacity 0.5 */}
                    <div className="flex flex-col gap-6" style={{ marginLeft: '-100px', marginTop: '150px' }}>
                        <CardComponent card={{ id: 0, highlighted: false, image: images[0], columnOpacity: 0.7 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                        <CardComponent card={{ id: 1, highlighted: false, image: images[1], columnOpacity: 0.7 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 2 - Higher than last column - opacity 0.6 */}
                    <div className="flex flex-col gap-6" style={{ marginTop: '50px' }}>
                        <CardComponent card={{ id: 2, highlighted: false, image: images[2], columnOpacity: 0.8 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                        <CardComponent card={{ id: 3, highlighted: false, image: images[3], columnOpacity: 0.8 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 3 - Single image, middle level - opacity 0.8 */}
                    <div className="flex flex-col gap-6" style={{ marginTop: '100px' }}>
                        <CardComponent card={{ id: 4, highlighted: false, image: images[4], columnOpacity: 0.9 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 4 - Single image, highlighted, higher than column 3 - opacity 1 */}
                    <div className="flex flex-col gap-6" style={{ marginTop: '25px' }}>
                        <CardComponent card={{ id: 5, highlighted: true, image: images[5], columnOpacity: 1 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 5 - Single image, highlighted, same level as column 4 - opacity 1 */}
                    <div className="flex flex-col gap-6" style={{ marginTop: '25px' }}>
                        <CardComponent card={{ id: 6, highlighted: true, image: images[6], columnOpacity: 1 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 6 - Single image, same as column 3 - opacity 0.8 */}
                    <div className="flex flex-col gap-6" style={{ marginTop: '100px' }}>
                        <CardComponent card={{ id: 7, highlighted: false, image: images[7], columnOpacity: 0.9 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 7 - Same as column 2 - opacity 0.6 */}
                    <div className="flex flex-col gap-6" style={{ marginTop: '50px' }}>
                        <CardComponent card={{ id: 8, highlighted: false, image: images[8], columnOpacity: 0.8 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                        <CardComponent card={{ id: 9, highlighted: false, image: images[9], columnOpacity: 0.8 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>

                    {/* Column 8 - Half outside right, same as column 1 - opacity 0.5 */}
                    <div className="flex flex-col gap-6" style={{ marginRight: '-100px', marginTop: '150px' }}>
                        <CardComponent card={{ id: 10, highlighted: false, image: images[10], columnOpacity: 0.7 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                        <CardComponent card={{ id: 11, highlighted: false, image: images[11], columnOpacity: 0.7 }} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
                    </div>
            
                    {/* Call to Action - Positioned at bottom of columns 2,7 */}
                    <div className="absolute text-center mb-[5vh]" style={{ bottom: '60px', left: '50%', transform: 'translateX(-50%)' }}>
                        <p className="text-lg mb-4">Fresher?</p>
                        <JoinBihanButton />
                    </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .gradient-fresher {
                    background: url(/assets/gradient%20bg.jpg) center/cover;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    position: relative;
                    display: inline-block;
                }

                :global(.smoke-stroke-container) {
                    position: relative;
                    filter: drop-shadow(0 0 12px rgba(248, 71, 87, 0.35))
                            drop-shadow(0 0 18px rgba(255, 242, 235, 0.30))
                            drop-shadow(0 0 15px rgba(248, 71, 87, 0.25))
                            drop-shadow(0 0 10px rgba(255, 255, 255, 0.20));
                }

                :global(.smoke-stroke-container:hover) {
                    filter: drop-shadow(0 0 16px rgba(248, 71, 87, 0.45))
                            drop-shadow(0 0 22px rgba(255, 242, 235, 0.40))
                            drop-shadow(0 0 20px rgba(248, 71, 87, 0.35))
                            drop-shadow(0 0 14px rgba(255, 255, 255, 0.30));
                }
            `}</style>
        </div>
    )
}

export default Gallery
