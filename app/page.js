"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <span className="hero-badge">ملف الإنجاز الأكاديمي الرسمي</span>
                        <h1>عبدالرزاق الخطيب</h1>
                        <p className="hero-subtitle">معلم فيزياء | مدرب تربوي | مستشار أكاديمي</p>
                        <hr className="hero-divider" />
                        <p className="hero-description">
                            منصة رقمية توثق الرحلة الأكاديمية والنمو المعرفي في تكنولوجيا التعليم والتحول الرقمي التعليمي.
                        </p>
                        <div className="hero-btns">
                            <Link href="/cv" className="btn btn-primary">📖 السيرة الذاتية</Link>
                            <Link href="/reflections" className="btn btn-secondary">✍️ رحلة التأمل</Link>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
                    <div className="grid main-grid">
                        <Link href="/intro-video" className="card home-card">
                            <div className="card-icon">🎥</div>
                            <h3 className="card-title">فيديو تعريفي</h3>
                            <p className="card-content">عرض مرئي يوثق رحلتي في مجال تقنيات التعليم وتجاربي الأكاديمية والمهنية.</p>
                            <span className="card-link-arrow">←</span>
                        </Link>

                        <Link href="/reflections" className="card home-card">
                            <div className="card-icon">📜</div>
                            <h3 className="card-title">التفكيرات التأملية</h3>
                            <p className="card-content">سجل يومي يوثق 11 محطة من النمو المعرفي والتأملات العميقة في نظريات التعلم الحديثة.</p>
                            <span className="card-link-arrow">←</span>
                        </Link>

                        <Link href="/philosophy" className="card home-card">
                            <div className="card-icon">⚖️</div>
                            <h3 className="card-title">الفلسفة التربوية</h3>
                            <p className="card-content">رؤيتي الشخصية للتعليم والمبادئ التي توجه ممارساتي في الغرفة الصفية والبيئة الأكاديمية.</p>
                            <span className="card-link-arrow">←</span>
                        </Link>

                        <Link href="/teaching-method" className="card home-card">
                            <div className="card-icon">🛠️</div>
                            <h3 className="card-title">طريقة التدريس</h3>
                            <p className="card-content">استكشاف المنهجيات التعليمية الحديثة والتركيز على التعلم القائم على المشاريع (PBL).</p>
                            <span className="card-link-arrow">←</span>
                        </Link>

                        <Link href="/webquest" className="card home-card">
                            <div className="card-icon">🌐</div>
                            <h3 className="card-title">مشروع WebQuest</h3>
                            <p className="card-content">رحلة معرفية تفاعلية صممتها لتعزيز مهارات البحث والاستقصاء الرقمي لدى الطلبة.</p>
                            <span className="card-link-arrow">←</span>
                        </Link>

                        <Link href="/iste" className="card home-card">
                            <div className="card-icon">🏅</div>
                            <h3 className="card-title">معايير ISTE</h3>
                            <p className="card-content">الالتزام بالمعايير العالمية للجمعية الدولية للتكنولوجيا في التعليم لتمكين المعلم والمتعلم.</p>
                            <span className="card-link-arrow">←</span>
                        </Link>
                    </div>
                </div>

                <section className="container highlights-section">
                    <div className="card about-info-card">
                        <div className="about-grid">
                            <div className="about-text">
                                <h2 className="card-title">عن هذا الملف</h2>
                                <p className="card-content">
                                    يعتبر هذا الملف سجلاً رقمياً حياً يخدم كأداة للتقويم والتأمل الذاتي،
                                    ويهدف إلى إبراز الكفايات والمهارات المكتسبة في تكنولوجيا التعليم.
                                    تم تصميم هذا الموقع ليعكس طموحي الأكاديمي وتطبيقي العملي للمعايير العالمية في التعليم الرقمي.
                                </p>
                            </div>
                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-num">11</span>
                                    <span className="stat-label">محطة تأملية</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">7</span>
                                    <span className="stat-label">معايير ISTE</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">1</span>
                                    <span className="stat-label">مشروع WebQuest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    .hero-badge {
                        display: inline-block;
                        padding: 0.4rem 1.2rem;
                        background: rgba(212, 175, 55, 0.15);
                        border: 1px solid var(--accent);
                        color: var(--accent);
                        border-radius: 50px;
                        font-size: 0.9rem;
                        font-weight: 700;
                        margin-bottom: 1.5rem;
                        letter-spacing: 1px;
                    }
                    .hero-subtitle {
                        margin-top: 0.5rem;
                        opacity: 0.8 !important;
                        font-size: 1.6rem !important;
                    }
                    .hero-divider {
                        width: 100px;
                        height: 3px;
                        background: var(--accent);
                        margin: 1.5rem auto;
                        border: none;
                        border-radius: 2px;
                    }
                    .hero-description {
                        max-width: 650px !important;
                        font-size: 1.2rem !important;
                        line-height: 1.8;
                    }
                    .hero-btns {
                        margin-top: 2.5rem;
                        display: flex;
                        gap: 1.2rem;
                        justify-content: center;
                    }
                    .home-card {
                        text-decoration: none;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }
                    .card-icon {
                        font-size: 3rem;
                        margin-bottom: 1.5rem;
                    }
                    .card-link-arrow {
                        position: absolute;
                        bottom: 1.5rem;
                        left: 1.5rem;
                        font-size: 1.5rem;
                        color: var(--accent);
                        opacity: 0;
                        transform: translateX(10px);
                        transition: var(--transition);
                    }
                    .home-card:hover .card-link-arrow {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    .highlights-section {
                        margin-top: 6rem;
                        margin-bottom: 6rem;
                    }
                    .about-info-card {
                        background: var(--primary);
                        color: white !important;
                        border: none;
                    }
                    .about-info-card .card-title {
                        color: var(--accent);
                        border-color: rgba(255,255,255,0.1);
                    }
                    .about-grid {
                        display: grid;
                        grid-template-columns: 1.5fr 1fr;
                        gap: 3rem;
                        align-items: center;
                        text-align: right;
                    }
                    .about-stats {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 1.5rem;
                    }
                    .stat-item {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        background: rgba(255,255,255,0.05);
                        padding: 1.5rem 1rem;
                        border-radius: 15px;
                        border: 1px solid rgba(255,255,255,0.1);
                    }
                    .stat-num {
                        font-size: 2.5rem;
                        font-weight: 800;
                        color: var(--accent);
                        line-height: 1;
                    }
                    .stat-label {
                        font-size: 0.9rem;
                        margin-top: 0.5rem;
                        opacity: 0.8;
                    }
                    @media (max-width: 992px) {
                        .about-grid { grid-template-columns: 1fr; }
                        .stat-num { font-size: 2rem; }
                    }
                `}</style>
            </main>
            <Footer />
        </>
    )
}
