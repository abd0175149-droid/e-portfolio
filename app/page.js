import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="hero">
                    <div className="hero-content">
                        <h1>ملف إنجاز عبدالرزاق الخطيب</h1>
                        <p>معلم فيزياء | مدرب تربوي | مستشار أكاديمي</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link href="/cv" className="btn btn-primary">📖 استكشاف السيرة الذاتية</Link>
                            <Link href="/reflections" className="btn btn-secondary">✍️ التفكيرات التأملية</Link>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
                    <div className="grid">
                        <Link href="/intro-video" className="card" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎥</div>
                            <h3 className="card-title">فيديو تعريفي</h3>
                            <p className="card-content">عرض مرئي يوثق رحلتي في مجال تقنيات التعليم وتجاربي الأكاديمية.</p>
                        </Link>

                        <Link href="/reflections" className="card" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📜</div>
                            <h3 className="card-title">التفكيرات التأملية</h3>
                            <p className="card-content">سجل يومي يوثق نموي المعرفي وتأملاتي العميقة في نظريات التعلم.</p>
                        </Link>

                        <Link href="/philosophy" className="card" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚖️</div>
                            <h3 className="card-title">الفلسفة التربوية</h3>
                            <p className="card-content">رؤيتي الشخصية للتعليم والمبادئ التي توجه ممارساتي في الغرفة الصفية.</p>
                        </Link>

                        <Link href="/teaching-method" className="card" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
                            <h3 className="card-title">طريقة التدريس</h3>
                            <p className="card-content">استكشاف المنهجيات التعليمية الحديثة والتعلم القائم على المشاريع.</p>
                        </Link>

                        <Link href="/webquest" className="card" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐</div>
                            <h3 className="card-title">مشروع WebQuest</h3>
                            <p className="card-content">رحلة معرفية تفاعلية صممتها لتعزيز مهارات البحث والاستقصاء الرقمي.</p>
                        </Link>

                        <Link href="/iste" className="card" style={{ textDecoration: 'none' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏅</div>
                            <h3 className="card-title">معايير ISTE</h3>
                            <p className="card-content">الالتزام بالمعايير العالمية للجمعية الدولية للتكنولوجيا في التعليم.</p>
                        </Link>
                    </div>
                </div>

                <section className="container" style={{ marginTop: '6rem' }}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <h2 className="card-title">عن هذا الملف</h2>
                        <p className="card-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            يعتبر هذا الملف سجلاً رقمياً حياً يوثق الإنجازات الأكاديمية والعملية لطالب الدراسات العليا،
                            ويهدف إلى إبراز الكفايات والمهارات المكتسبة في تكنولوجيا التعليم والتحول الرقمي التعليمي.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
