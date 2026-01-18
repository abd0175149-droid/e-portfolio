'use client'

export default function DownloadButton({ filePath, label = 'تحميل الملف' }) {
    return (
        <a
            href={`/hasoob/${filePath}`}
            download
            className="btn btn-download"
        >
            <span style={{ fontSize: '1.2rem' }}>📥</span> {label}
        </a>
    )
}
