"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'

export default function ISTEPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="page-header">
                    <div className="container">
                        <h1>معايير ISTE العالمية</h1>
                        <p>الجودة في التعليم الرقمي</p>
                    </div>
                </div>

                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <section className="card" style={{ marginBottom: '3rem', background: 'var(--primary)', color: 'white' }}>
                        <h2 className="card-title" style={{ color: 'var(--accent)', borderColor: 'rgba(212,175,55,0.3)' }}>نظرة استراتيجية</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                            تمثل معايير ISTE حجر الزاوية في ممارساتي المهنية، حيث توفر إطاراً عملياً لتمكين الطلاب ودمج التكنولوجيا بشكل هادف يعزز مهارات التفكير العليا.
                        </p>
                    </section>

                    <div className="grid">
                        {[
                            { id: '1', title: 'المتعلم', text: 'التطوير المهني المستمر واستكشاف الممارسات الرقمية الجديدة.' },
                            { id: '2', title: 'القائد', text: 'تمكين الطلاب وتوجيه رؤية التعلم الرقمي في المؤسسة التعليمية.' },
                            { id: '3', title: 'المواطن الرقمي', text: 'غرس قيم المسؤولية والأمان الرقمي والمواطنة الصالحة.' },
                            { id: '4', title: 'المتعاون', text: 'العمل المشترك مع الزملاء والطلاب لتبادل الخبرات والابتكار.' },
                            { id: '5', title: 'المصمم', text: 'بناء بيئات تعلم تفاعلية تراعي الفروق الفردية وحاجات المتعلمين.' },
                            { id: '6', title: 'الميسر', text: 'إدارة وتوجيه عملية التعلم باستخدام الأدوات الرقمية الحديثة.' },
                            { id: '7', title: 'المحلل', text: 'استخدام البيانات لتقويم الأداء وتحسين نواتج التعلم بشكل مستمر.' },
                        ].map(std => (
                            <div key={std.id} className="card">
                                <div style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{std.id}</div>
                                <h3 className="card-title" style={{ border: 'none', marginBottom: '0.5rem' }}>{std.title}</h3>
                                <p>{std.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card" style={{ marginTop: '4rem', borderRight: '8px solid var(--accent)' }}>
                        <h2 className="card-title">ارتباط المعايير بمشروع WebQuest</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            يعكس مشروع WebQuest الذي قمت بتصميمه تطبيقاً عملياً لهذه المعايير، حيث يعمل المعلم كـ "مصمم" لرحلة معرفية و "ميسر" يدفع الطلاب ليكونوا "منشئي معرفة" و "متعاونين عالميين"، مما يحول العملية التعليمية من تلقين إلى استكشاف نشط.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="https://www.iste.org/standards" target="_blank" className="btn btn-primary">الموقع الرسمي ISTE</a>
                            <DownloadButton filePath="references/iste.pdf" label="تحميل دليل المعايير" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
