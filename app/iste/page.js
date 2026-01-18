import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'

export default function ISTEPage() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>معايير ISTE العالمية</h1>
                        <p>المعايير الدولية للتكنولوجيا في التعليم</p>
                    </div>
                </div>

                <div className="container">
                    <div className="card">
                        <h3 className="card-title">⭐ نظرة عامة على معايير ISTE</h3>

                        <div className="card-content" style={{ lineHeight: '2' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                معايير الجمعية الدولية للتكنولوجيا في التعليم (ISTE Standards) هي إطار عمل
                                عالمي يحدد المهارات والكفايات اللازمة للمعلمين والطلاب في العصر الرقمي.
                                تساعد هذه المعايير على تحويل التعليم من خلال التوظيف الفعال للتكنولوجيا.
                            </p>

                            <h4 style={{ color: 'var(--accent-color)', marginTop: '1.5rem', marginBottom: '1rem' }}>
                                📋 معايير ISTE للمعلمين
                            </h4>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    1️⃣ المتعلم (Learner)
                                </h5>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                    المعلمون يتعلمون باستمرار ويشاركون زملاءهم في استكشاف الأدوات والممارسات
                                    الرقمية الجديدة لتحسين تعلم الطلاب.
                                </p>

                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    2️⃣ القائد (Leader)
                                </h5>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                    المعلمون يسعون لتمكين الطلاب من تحقيق إمكاناتهم الكاملة من خلال فهم
                                    وتطبيق رؤية واضحة للتعلم المدعوم بالتكنولوجيا.
                                </p>

                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    3️⃣ المواطن الرقمي (Citizen)
                                </h5>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                    المعلمون يلهمون الطلاب ليكونوا مساهمين إيجابيين ومسؤولين في العالم الرقمي،
                                    ويشجعونهم على استخدام التكنولوجيا بشكل آمن وقانوني وأخلاقي.
                                </p>

                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    4️⃣ المتعاون (Collaborator)
                                </h5>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                    المعلمون يتعاونون مع زملائهم والطلاب لتحسين الممارسة، وينشئون بيئات تعلم
                                    تعاونية تستفيد من التكنولوجيا.
                                </p>

                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    5️⃣ المصمم (Designer)
                                </h5>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                    المعلمون يصممون أنشطة وبيئات تعلم أصيلة تراعي تنوع المتعلمين، وتستخدم
                                    الأدوات والموارد الرقمية بشكل فعال.
                                </p>

                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    6️⃣ الميسر (Facilitator)
                                </h5>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                    المعلمون يسهلون التعلم باستخدام التكنولوجيا لدعم تحقيق الطلاب لمعايير
                                    التعلم، ويشجعون على الإبداع والاستكشاف.
                                </p>

                                <h5 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>
                                    7️⃣ المحلل (Analyst)
                                </h5>
                                <p style={{ marginRight: '1.5rem' }}>
                                    المعلمون يفهمون ويستخدمون البيانات لتحسين التدريس وتعزيز تعلم الطلاب،
                                    ويختارون التكنولوجيات المناسبة لتحقيق الأهداف التعليمية.
                                </p>
                            </div>

                            <h4 style={{ color: 'var(--accent-color)', marginTop: '2rem', marginBottom: '1rem' }}>
                                🎓 معايير ISTE للطلاب
                            </h4>

                            <ul style={{ marginRight: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong>المتعلم المتمكن (Empowered Learner):</strong> الطلاب يستفيدون من
                                    التكنولوجيا لتحديد أهداف تعلمهم وتحقيقها</li>
                                <li><strong>المواطن الرقمي (Digital Citizen):</strong> الطلاب يظهرون سلوكاً
                                    آمناً وقانونياً ومسؤولاً في استخدام التكنولوجيا</li>
                                <li><strong>منشئ المعرفة (Knowledge Constructor):</strong> الطلاب يقيّمون
                                    المعلومات ويبنون معرفة جديدة</li>
                                <li><strong>المصمم المبتكر (Innovative Designer):</strong> الطلاب يستخدمون
                                    التكنولوجيا للتصميم والإبداع</li>
                                <li><strong>المفكر الحاسوبي (Computational Thinker):</strong> الطلاب يطورون
                                    استراتيجيات لحل المشكلات</li>
                                <li><strong>المبدع الإبداعي (Creative Communicator):</strong> الطلاب يعبرون
                                    بوضوح وإبداع</li>
                                <li><strong>المتعاون العالمي (Global Collaborator):</strong> الطلاب يتعاونون
                                    عالمياً باستخدام التكنولوجيا</li>
                            </ul>

                            <div style={{ backgroundColor: '#e8f4f8', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                    💡 الربط بممارستي التعليمية ومشروع WebQuest
                                </h4>
                                <p style={{ marginBottom: '1rem' }}>
                                    تتجلى معايير ISTE بوضوح في ممارستي التعليمية ومشروع WebQuest من خلال:
                                </p>
                                <ul style={{ marginRight: '1.5rem' }}>
                                    <li><strong>كمصمم:</strong> صممت مشروع WebQuest الذي يوفر تجربة تعلم أصيلة
                                        تستخدم موارد الإنترنت بشكل فعال</li>
                                    <li><strong>كميسر:</strong> أشجع الطلاب على الاستقصاء والبحث بدلاً من تلقي
                                        المعلومات بشكل سلبي</li>
                                    <li><strong>كمتعاون:</strong> أدمج العمل الجماعي في WebQuest لتعزيز مهارات
                                        التعاون</li>
                                    <li><strong>كمواطن رقمي:</strong> أعلّم الطلاب أخلاقيات البحث وتوثيق المصادر
                                        والاستخدام المسؤول للتكنولوجيا</li>
                                </ul>
                            </div>

                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <a
                                    href="https://www.iste.org/standards"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ marginLeft: '1rem', textDecoration: 'none' }}
                                >
                                    🌐 زيارة موقع ISTE الرسمي
                                </a>
                                <DownloadButton filePath="references/iste.pdf" label="📥 تحميل مرجع ISTE" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
