import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>ملف الإنجاز الإلكتروني</h1>
                        <p>طالب دراسات عليا - تقنيات التعليم</p>
                    </div>
                </div>

                <div className="container">
                    <section className="card">
                        <h2 className="card-title">مرحباً بك في ملف إنجازي</h2>
                        <p className="card-content">
                            هذا الملف يوثق رحلتي الأكاديمية والمهنية في مجال تقنيات التعليم.
                            يحتوي على تفكيراتي التأملية، مشاريعي، فلسفتي التربوية، والمزيد من الإنجازات التي حققتها خلال دراستي العليا.
                        </p>
                    </section>

                    <div className="grid">
                        <Link href="/intro-video" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="card-title">🎥 فيديو تعريفي</h3>
                            <p className="card-content">تعرف علي من خلال مقطع فيديو تعريفي قصير</p>
                        </Link>

                        <Link href="/reflections" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="card-title">✍️ التفكيرات التأملية</h3>
                            <p className="card-content">مجموعة من التفكيرات التأملية حول رحلتي التعليمية</p>
                        </Link>

                        <Link href="/cv" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="card-title">📄 السيرة الذاتية</h3>
                            <p className="card-content">معلومات شاملة عن خلفيتي الأكاديمية والمهنية</p>
                        </Link>

                        <Link href="/philosophy" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="card-title">💡 الفلسفة التربوية</h3>
                            <p className="card-content">فلسفتي في التعليم والتعلم</p>
                        </Link>

                        <Link href="/webquest" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="card-title">🔍 مشروع WebQuest</h3>
                            <p className="card-content">مشروع تعليمي تفاعلي للمعلمين والطلاب</p>
                        </Link>

                        <Link href="/iste" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3 className="card-title">⭐ معايير ISTE</h3>
                            <p className="card-content">المعايير العالمية لتقنيات التعليم</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
