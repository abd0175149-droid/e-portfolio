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
            <main>
                <div className="page-header">
                    <div className="container">
                        <h1>التفكيرات التأملية</h1>
                        <p>سجل النمو المهني والأكاديمي</p>
                    </div>
                </div>

                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <div className="timeline">
                        {reflectionsData.map((reflection) => (
                            <div key={reflection.id} className="timeline-item">
                                <div className="card">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                        <div>
                                            <h3 className="card-title" style={{ borderBottom: 'none', marginBottom: '0.25rem' }}>{reflection.title}</h3>
                                            <p className="card-date" style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem' }}>📅 {reflection.date}</p>
                                        </div>
                                    </div>
                                    <p className="card-content" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>{reflection.summary}</p>

                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <button
                                            onClick={() => setSelectedReflection(reflection)}
                                            className="btn btn-secondary"
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
                    <div style={{ animation: 'fadeIn 0.4s ease' }}>
                        <p className="card-date" style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '1.1rem' }}>📅 {selectedReflection.date}</p>
                        <hr style={{ margin: '1.5rem 0', opacity: 0.1 }} />
                        <div style={{ fontSize: '1.15rem', whiteSpace: 'pre-line', color: 'var(--primary-light)' }}>
                            {selectedReflection.fullContent}
                        </div>
                        <div style={{ marginTop: '2.5rem', borderTop: '1px solid #eee', paddingTop: '1.5rem', textAlign: 'center' }}>
                            <DownloadButton filePath={selectedReflection.file} label="تحميل المستند الأصلي (Word)" />
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}
