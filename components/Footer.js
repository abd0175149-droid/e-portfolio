export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} ملف الإنجاز الإلكتروني - جميع الحقوق محفوظة</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    طالب دراسات عليا - تقنيات التعليم
                </p>
            </div>
        </footer>
    )
}
