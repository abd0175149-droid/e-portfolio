'use client'

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                {title && <h2 className="card-title">{title}</h2>}
                <div className="card-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
