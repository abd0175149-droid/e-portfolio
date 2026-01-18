'use client'

import { useState } from 'react'

export default function CVSection({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="accordion-item">
            <div
                className="accordion-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>{title}</h3>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    )
}
