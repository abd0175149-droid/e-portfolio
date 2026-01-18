'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/intro-video', label: 'الفيديو' },
        { href: '/reflections', label: 'التفكيرات' },
        { href: '/cv', label: 'السيرة الذاتية' },
        { href: '/philosophy', label: 'الفلسفة' },
        { href: '/webquest', label: 'WebQuest' },
        { href: '/iste', label: 'ISTE' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-content">
                <Link href="/" className="navbar-brand">
                    <span style={{ color: 'var(--accent)' }}>🎓</span> ملف الإنجاز
                </Link>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    style={{ cursor: 'pointer' }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
        .navbar-scrolled {
          background: rgba(15, 23, 42, 0.95);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          height: 70px;
        }
        @media (max-width: 768px) {
          .navbar-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--primary);
            flex-direction: column;
            padding: 2rem;
            display: ${isOpen ? 'flex' : 'none'};
            border-bottom: 2px solid var(--accent);
          }
        }
      `}</style>
        </nav>
    )
}
