'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'

export default function WebQuestPage() {
    const [activeTab, setActiveTab] = useState('teacher')

    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>مشروع WebQuest</h1>
                        <p>رحلة معرفية تفاعلية على الويب</p>
                    </div>
                </div>

                <div className="container">
                    <div className="card">
                        <h3 className="card-title">🔍 نبذة عن المشروع</h3>
                        <p className="card-content">
                            WebQuest هو نموذج تعليمي يعتمد على الاستقصاء والبحث، حيث يستخدم الطلاب
                            مصادر الإنترنت لإنجاز مهام تعليمية محددة. يتضمن هذا المشروع صفحتين:
                            صفحة للمعلم تحتوي على التوجيهات والأهداف، وصفحة للطالب تتضمن المهام
                            والأنشطة المطلوبة.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        <button
                            className={`btn ${activeTab === 'teacher' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab('teacher')}
                        >
                            📋 صفحة المعلم
                        </button>
                        <button
                            className={`btn ${activeTab === 'student' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab('student')}
                        >
                            👨‍🎓 صفحة الطالب
                        </button>
                    </div>

                    {activeTab === 'teacher' && (
                        <div className="card">
                            <h3 className="card-title">📋 صفحة المعلم (Teacher Page)</h3>

                            <div className="card-content" style={{ lineHeight: '2' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>الأهداف التعليمية:</h4>
                                <ul style={{ marginRight: '2rem', marginBottom: '1.5rem' }}>
                                    <li>تطوير مهارات البحث والاستقصاء لدى الطلاب</li>
                                    <li>تعزيز التفكير النقدي وتحليل المعلومات</li>
                                    <li>تشجيع التعلم التعاوني والعمل الجماعي</li>
                                    <li>توظيف التكنولوجيا في التعلم بشكل فعال</li>
                                </ul>

                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>إرشادات التطبيق:</h4>
                                <ol style={{ marginRight: '2rem', marginBottom: '1.5rem' }}>
                                    <li>تقسيم الطلاب إلى مجموعات (4-5 طلاب لكل مجموعة)</li>
                                    <li>توزيع الأدوار على أعضاء المجموعة</li>
                                    <li>توفير الوقت الكافي للبحث والاستكشاف</li>
                                    <li>متابعة تقدم المجموعات وتقديم الدعم</li>
                                    <li>تقييم المنتج النهائي والعملية</li>
                                </ol>

                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>معايير التقييم:</h4>
                                <p>يتم تقييم الطلاب بناءً على:</p>
                                <ul style={{ marginRight: '2rem' }}>
                                    <li>جودة البحث والمصادر المستخدمة</li>
                                    <li>العمل الجماعي والتعاون</li>
                                    <li>الإبداع في العرض التقديمي</li>
                                    <li>الفهم العميق للموضوع</li>
                                </ul>
                            </div>

                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <DownloadButton filePath="webquest/teacher_page.pdf" label="📥 تحميل صفحة المعلم (PDF)" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'student' && (
                        <div className="card">
                            <h3 className="card-title">👨‍🎓 صفحة الطالب (Student Page)</h3>

                            <div className="card-content" style={{ lineHeight: '2' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📖 المقدمة:</h4>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    مرحباً بكم في هذه الرحلة المعرفية! ستقومون في هذا المشروع بالبحث والاستكشاف
                                    حول موضوع مهم، والعمل مع زملائكم لإنتاج عمل متميز.
                                </p>

                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🎯 المهمة:</h4>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    مهمتكم هي البحث في الموضوع المحدد، وجمع المعلومات من المصادر الموثوقة،
                                    ثم إعداد تقرير أو عرض تقديمي شامل يوضح ما توصلتم إليه.
                                </p>

                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📋 العملية:</h4>
                                <ol style={{ marginRight: '2rem', marginBottom: '1.5rem' }}>
                                    <li>تشكيل المجموعة وتوزيع الأدوار</li>
                                    <li>قراءة المصادر المقترحة</li>
                                    <li>البحث عن مصادر إضافية</li>
                                    <li>تنظيم المعلومات وتحليلها</li>
                                    <li>إعداد المنتج النهائي</li>
                                    <li>عرض العمل على الصف</li>
                                </ol>

                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔗 المصادر:</h4>
                                <ul style={{ marginRight: '2rem', marginBottom: '1.5rem' }}>
                                    <li><a href="#" style={{ color: 'var(--accent-color)' }}>مصدر تعليمي 1</a></li>
                                    <li><a href="#" style={{ color: 'var(--accent-color)' }}>مصدر تعليمي 2</a></li>
                                    <li><a href="#" style={{ color: 'var(--accent-color)' }}>مصدر تعليمي 3</a></li>
                                </ul>

                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>⭐ التقويم:</h4>
                                <p>سيتم تقييم عملكم بناءً على الجودة، الإبداع، والعمل الجماعي.</p>
                            </div>

                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <DownloadButton filePath="webquest/student_page.pdf" label="📥 تحميل صفحة الطالب (PDF)" />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}
