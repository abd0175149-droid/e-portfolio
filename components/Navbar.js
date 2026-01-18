'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/intro-video', label: 'فيديو تعريفي' },
        { href: '/reflections', label: 'التفكيرات التأملية' },
        { href: '/cv', label: 'السيرة الذاتية' },
        { href: '/philosophy', label: 'الفلسفة التربوية' },
        { href: '/teaching-method', label: 'طريقة التدريس' },
        { href: '/webquest', label: 'WebQuest' },
        { href: '/resources', label: 'المواقع المفضلة' },
        { href: '/iste', label: 'معايير ISTE' },
    ]

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link href="/" className="navbar-brand">
                    ملف الإنجاز
                </Link>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
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
        </nav>
    )
}
