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
                        <h1>رحلة التأمل المعرفي</h1>
                        <p>11 محطة من الإبداع والنمو في تقنيات التعليم</p>
                    </div>
                </div>

                <div className="container" style={{ paddingBottom: '6rem' }}>
                    <div className="stations-path">
                        {reflectionsData.map((reflection, index) => (
                            <div
                                key={reflection.id}
                                className={`station-item ${index % 2 === 0 ? 'right' : 'left'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="station-marker">
                                    <span className="station-number">{reflection.id}</span>
                                </div>

                                <div className="card station-card">
                                    <div className="station-header">
                                        <span className="station-badge">{reflection.date}</span>
                                        <h3 className="card-title">{reflection.title}</h3>
                                    </div>
                                    <p className="card-content">{reflection.summary}</p>

                                    <div className="station-actions">
                                        <button
                                            onClick={() => setSelectedReflection(reflection)}
                                            className="btn btn-secondary btn-sm"
                                        >
                                            📖 التفاصيل
                                        </button>
                                        <DownloadButton filePath={reflection.file} label="الملف" />
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
                    <div className="modal-inner">
                        <div className="modal-header-info">
                            <span className="station-badge">{selectedReflection.date}</span>
                            <p className="modal-subtitle">المحطة رقم {selectedReflection.id}</p>
                        </div>
                        <hr className="modal-divider" />
                        <div className="modal-text">
                            {selectedReflection.fullContent}
                        </div>
                        <div className="modal-footer-btns">
                            <DownloadButton filePath={selectedReflection.file} label="تحميل النسخة الكاملة (Word)" />
                        </div>
                    </div>
                )}
            </Modal>

            <style jsx>{`
        .stations-path {
          position: relative;
          padding: 2rem 0;
          max-width: 900px;
          margin: 0 auto;
        }

        .stations-path::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(to bottom, var(--accent), var(--primary));
          transform: translateX(-50%);
          border-radius: 2px;
          opacity: 0.3;
        }

        .station-item {
          position: relative;
          width: 50%;
          padding: 2rem;
          margin-bottom: 2rem;
          display: flex;
          opacity: 0;
          animation: slideUp 0.6s forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .station-item.right {
          margin-left: auto;
          flex-direction: row-reverse;
          padding-left: 3rem;
        }

        .station-item.left {
          margin-right: auto;
          padding-right: 3rem;
        }

        .station-marker {
          position: absolute;
          top: 50%;
          width: 50px;
          height: 50px;
          background: var(--primary);
          border: 4px solid var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
          transform: translateY(-50%);
        }

        .station-item.right .station-marker {
          left: -25px;
        }

        .station-item.left .station-marker {
          right: -25px;
        }

        .station-number {
          color: var(--accent);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .station-card {
          width: 100%;
          margin: 0 !important;
          padding: 1.5rem !important;
          text-align: right;
        }

        .station-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .station-badge {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-hover);
          padding: 0.2rem 0.8rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          display: inline-block;
          width: fit-content;
        }

        .station-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }

        .modal-inner {
          animation: fadeIn 0.4s ease;
        }

        .modal-header-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .modal-subtitle {
          color: var(--secondary);
          font-weight: 600;
        }

        .modal-divider {
          margin: 1.5rem 0;
          opacity: 0.1;
        }

        .modal-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--primary-light);
          white-space: pre-line;
        }

        .modal-footer-btns {
          margin-top: 2.5rem;
          border-top: 1px solid #eee;
          padding-top: 1.5rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .stations-path::before {
            left: 20px;
          }
          .station-item {
            width: 100%;
            padding-left: 3.5rem !important;
            padding-right: 0 !important;
            margin-right: 0;
            margin-left: 0;
          }
          .station-item.right {
            flex-direction: row;
          }
          .station-marker {
            left: -5px !important;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
        </>
    )
}
