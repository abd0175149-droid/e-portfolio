export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} ملف الإنجاز - عبدالرزاق الخطيب</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    معلم علوم وفيزياء | مستشار أكاديمي
                </p>
            </div>
        </footer>
    )
}
