'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import DownloadButton from '@/components/DownloadButton'
import reflectionsData from '@/data/reflections.json'

export default function ReflectionsPage() {
    const [selectedReflection, setSelectedReflection] = useState(null)

    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>التفكيرات التأملية</h1>
                        <p>رحلة التعلم والنمو المهني</p>
                    </div>
                </div>

                <div className="container">
                    <div className="timeline">
                        {reflectionsData.map((reflection) => (
                            <div key={reflection.id} className="timeline-item">
                                <div className="card">
                                    <h3 className="card-title">{reflection.title}</h3>
                                    <p className="card-date">📅 {reflection.date}</p>
                                    <p className="card-content">{reflection.summary}</p>

                                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <button
                                            onClick={() => setSelectedReflection(reflection)}
                                            className="btn btn-primary"
                                        >
                                            📖 قراءة كاملة
                                        </button>
                                        <DownloadButton filePath={reflection.file} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />

            <Modal
                isOpen={selectedReflection !== null}
                onClose={() => setSelectedReflection(null)}
                title={selectedReflection?.title}
            >
                {selectedReflection && (
                    <>
                        <p className="card-date">📅 {selectedReflection.date}</p>
                        <div style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>
                            {selectedReflection.fullContent}
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <DownloadButton filePath={selectedReflection.file} />
                        </div>
                    </>
                )}
            </Modal>
        </>
    )
}
