import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'

export default function TeachingMethodPage() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>طريقة التدريس المفضلة</h1>
                        <p>التعلم بالمشاريع (Project-Based Learning)</p>
                    </div>
                </div>

                <div className="container">
                    <div className="card">
                        <h3 className="card-title">🎯 طريقة التدريس المفضلة</h3>

                        <div className="card-content" style={{ lineHeight: '2' }}>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                ما هو التعلم بالمشاريع؟
                            </h4>

                            <p style={{ marginBottom: '1.5rem' }}>
                                التعلم بالمشاريع (Project-Based Learning - PBL) هو أسلوب تعليمي يتمحور حول
                                المتعلم، حيث يقوم الطلاب باستكشاف مشاكل حقيقية ومعقدة من خلال العمل على مشاريع
                                طويلة الأمد. هذا الأسلوب يشجع على التفكير النقدي، التعاون، والإبداع.
                            </p>

                            <h4 style={{ color: 'var(--accent-color)', marginTop: '1.5rem', marginBottom: '1rem' }}>
                                📋 المبررات (Rationale)
                            </h4>

                            <div style={{ backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <p style={{ marginBottom: '1rem' }}><strong>1. الارتباط بالواقع:</strong></p>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1.5rem' }}>
                                    التعلم بالمشاريع يربط المحتوى التعليمي بمواقف حياتية حقيقية، مما يجعل التعلم
                                    أكثر معنى وأهمية للطلاب. عندما يرى الطلاب التطبيق العملي لما يتعلمونه، يزداد
                                    دافعهم للتعلم.
                                </p>

                                <p style={{ marginBottom: '1rem' }}><strong>2. تنمية مهارات القرن الحادي والعشرين:</strong></p>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1.5rem' }}>
                                    هذا الأسلوب يطور مهارات حيوية مثل التفكير النقدي، حل المشكلات، التعاون،
                                    والتواصل الفعال - وهي مهارات أساسية في سوق العمل الحديث.
                                </p>

                                <p style={{ marginBottom: '1rem' }}><strong>3. المتعلم النشط:</strong></p>
                                <p style={{ marginRight: '1.5rem', marginBottom: '1.5rem' }}>
                                    بدلاً من التلقي السلبي للمعلومات، يصبح الطلاب صانعي المعرفة، مما يعزز
                                    الفهم العميق والاحتفاظ بالمعلومات على المدى الطويل.
                                </p>

                                <p style={{ marginBottom: '1rem' }}><strong>4. التقييم الأصيل:</strong></p>
                                <p style={{ marginRight: '1.5rem' }}>
                                    التعلم بالمشاريع يوفر فرصاً للتقييم الأصيل من خلال منتجات ملموسة وعروض
                                    تقديمية، بدلاً من الاقتصار على الاختبارات التقليدية.
                                </p>
                            </div>

                            <h4 style={{ color: 'var(--accent-color)', marginTop: '1.5rem', marginBottom: '1rem' }}>
                                🔧 كيف أطبقها؟
                            </h4>

                            <ul style={{ marginRight: '2rem', marginBottom: '1.5rem' }}>
                                <li style={{ marginBottom: '0.8rem' }}>
                                    <strong>تحديد سؤال قيادي:</strong> أبدأ بسؤال محفز يستثير فضول الطلاب ويتطلب بحثاً وتفكيراً
                                </li>
                                <li style={{ marginBottom: '0.8rem' }}>
                                    <strong>التخطيط المشترك:</strong> أشرك الطلاب في تخطيط المشروع وتحديد المهام والأدوار
                                </li>
                                <li style={{ marginBottom: '0.8rem' }}>
                                    <strong>البحث والاستقصاء:</strong> أوفر موارد متنوعة وأدعم الطلاب في عملية البحث
                                </li>
                                <li style={{ marginBottom: '0.8rem' }}>
                                    <strong>الإنتاج والتطوير:</strong> أشجع الطلاب على إنتاج حلول إبداعية ومبتكرة
                                </li>
                                <li style={{ marginBottom: '0.8rem' }}>
                                    <strong>العرض والمشاركة:</strong> أتيح فرصاً للطلاب لعرض أعمالهم وتلقي التغذية الراجعة
                                </li>
                                <li style={{ marginBottom: '0.8rem' }}>
                                    <strong>التأمل والتقييم:</strong> أساعد الطلاب على التفكير في ما تعلموه وكيف تعلموه
                                </li>
                            </ul>

                            <h4 style={{ color: 'var(--accent-color)', marginTop: '1.5rem', marginBottom: '1rem' }}>
                                📚 المراجع (References)
                            </h4>

                            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem' }}>
                                <p style={{ marginBottom: '0.8rem' }}>
                                    1. Larmer, J., & Mergendoller, J. R. (2015). Gold Standard PBL: Essential Project
                                    Design Elements. Buck Institute for Education.
                                </p>
                                <p style={{ marginBottom: '0.8rem' }}>
                                    2. Thomas, J. W. (2000). A review of research on project-based learning. The
                                    Autodesk Foundation.
                                </p>
                                <p style={{ marginBottom: '0.8rem' }}>
                                    3. Krajcik, J. S., & Blumenfeld, P. C. (2006). Project-based learning. In R. K.
                                    Sawyer (Ed.), The Cambridge handbook of the learning sciences (pp. 317-334).
                                </p>
                                <p>
                                    4. Bell, S. (2010). Project-based learning for the 21st century: Skills for the
                                    future. The Clearing House, 83(2), 39-43.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <DownloadButton filePath="teaching_method/preferred_method.pdf" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
