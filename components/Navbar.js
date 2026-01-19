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
        { href: '/intro-video', label: 'الفيديو التعريفي' },
        { href: '/reflections', label: 'التأملات' },
        { href: '/cv', label: 'السيرة الذاتية' },
        { href: '/philosophy', label: 'الفلسفة التربوية' },
        { href: '/webquest', label: 'الويب كويست' },
        { href: '/iste', label: 'ISTE' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-content">
                <Link href="/" className="navbar-brand">
                    <span className="brand-mark">م</span>
                    <span>ملف الإنجاز الإلكتروني</span>
                </Link>

                <button
                    className={`navbar-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    style={{ cursor: 'pointer' }}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul id="primary-navigation" className={`navbar-menu ${isOpen ? 'active' : ''}`}>
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
        </nav>
    )
}
