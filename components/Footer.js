export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <p className="footer-title">© {year} ملف الإنجاز الإلكتروني - عبدالرزاق الخطيب</p>
                    <p className="footer-sub">
                        إعداد وتصميم ضمن مساق استخدام الحاسوب في التعليم في برنامج ماجستير المناهج وأساليب تدريس العلوم
                    </p>
                </div>
                <div className="footer-badge">
                    <span>E-Portfolio</span>
                </div>
            </div>
        </footer>
    )
}
