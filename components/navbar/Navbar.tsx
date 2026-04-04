
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const links: { label: string; href: string }[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/#about' },
	{ label: 'Gallery', href: '/Gallery' },
	{ label: 'Help Us?', href: '/Volunteers' },
]

export default function Navbar() {
	const pathname = usePathname() || '/'

	return (
		<nav className="fixed top-6 left-1/2 z-50 transform -translate-x-1/2 " style={{ width: '90%', height: '20%'  }}>
			<div
				className="flex items-center justify-between w-full px-8 py-3 rounded-2xl shadow-lg border border-white/20 text-white font-['Lexend']"
				style={{
					WebkitBackdropFilter: 'blur(12px)',
					backdropFilter: 'blur(12px)',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
				}}
			>
				{/* Logo on the left */}
				<Link href="/" className="flex items-center">
					<Image
						src="/assets/logo2.png"
						alt="Abhyudaya Logo"
						width={40}
						height={40}
						className="object-contain"
					/>
				</Link>

				{/* Navigation Links on the right */}
				<div className="flex items-center gap-6">
					{links.map((l) => {
						const isActive = l.href === pathname || (l.href !== '/' && pathname.startsWith(l.href.replace('#', '')))
						return (
							<Link
								key={l.href}
								href={l.href}
								className={
									'text-sm font-semibold px-3 py-1.5 rounded-md transition-colors ' +
									(isActive ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300')
								}
							>
								{l.label}
							</Link>
						)
					})}
				</div>
			</div>
		</nav>
	)
}

