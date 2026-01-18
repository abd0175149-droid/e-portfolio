export default function DownloadButton({ filePath, label = 'تحميل الملف الأصلي' }) {
    return (
        <a
            href={`/hasoob/${filePath}`}
            download
            className="btn btn-download"
        >
            📥 {label}
        </a>
    )
}
