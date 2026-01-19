'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'
import styles from './webquest.module.css'

const teacherGoals = [
    'تعريف طرق انتقال الحرارة الثلاث: التوصيل، الحمل، والإشعاع.',
    'التمييز بين طرق انتقال الحرارة في مواقف حياتية مختلفة.',
    'تفسير ظواهر يومية اعتمادًا على نوع انتقال الحرارة المناسب.',
    'استخدام مصادر رقمية موثوقة لجمع معلومات علمية.',
    'توظيف أدوات تكنولوجية (عروض تقديمية، فيديو، محاكاة) لعرض النتائج.'
]

const teacherMethods = [
    'استراتيجية الويب كويست (WebQuest)',
    'التعلم القائم على البحث والاستقصاء',
    'التعلم التعاوني',
    'التعلم المدعوم بالتكنولوجيا'
]

const teacherResources = [
    'فيديوهات تعليمية تفاعلية (YouTube – Khan Academy)',
    'محاكاة علمية رقمية (PhET Interactive Simulations)',
    'عروض تقديمية رقمية (Google Slides / PowerPoint)',
    'مواقع علمية تعليمية موثوقة'
]

const teacherReferences = [
    'PhET Interactive Simulations. (n.d.). Energy Forms and Changes. University of Colorado Boulder.',
    'Khan Academy. (n.d.). Heat transfer.',
    'NASA. (n.d.). Thermal energy and heat transfer.',
    'BBC Bitesize. (n.d.). Conduction, convection and radiation.'
]

const studentTasks = [
    'البحث عن طريقة واحدة من طرق انتقال الحرارة (التوصيل أو الحمل أو الإشعاع).',
    'شرح المفهوم بأسلوب مبسط مدعوم بصور أو فيديو.',
    'تقديم مثالين من الحياة اليومية.',
    'إعداد عرض تقديمي رقمي أو فيديو قصير يوضح النتائج.'
]

const studentJourneySteps = [
    {
        id: 1,
        title: 'محطة الانطلاق',
        lead: 'ابدأوا بفهم الفكرة العامة واختيار موضوع المجموعة.',
        actions: [
            'اقرأوا المقدمة معًا وحددوا ما تفهمونه عن انتقال الحرارة.',
            'اختاروا طريقة واحدة فقط (التوصيل أو الحمل أو الإشعاع).',
            'دوّنوا سؤالين تريدون الإجابة عنهما خلال الرحلة.'
        ],
        resources: [
            'Khan Academy. Heat transfer.',
            'BBC Bitesize – Heat transfer.'
        ]
    },
    {
        id: 2,
        title: 'محطة البحث والاستقصاء',
        lead: 'ابحثوا عن المفهوم والأمثلة اليومية بدقة.',
        actions: [
            'ابحثوا عن تعريف الطريقة المختارة بأسلوب مبسط.',
            'استخرجوا مثالين من الحياة اليومية.',
            'سجلوا المعلومة والمصدر المستخدم بدقة.'
        ],
        resources: [
            'NASA – Thermal Energy Resources.',
            'Khan Academy. Heat transfer.',
            'BBC Bitesize – Heat transfer.'
        ]
    },
    {
        id: 3,
        title: 'محطة التجربة والمحاكاة',
        lead: 'جرّبوا الظواهر عبر المحاكاة الرقمية لتثبيت الفهم.',
        actions: [
            'ادخلوا إلى محاكاة PhET الخاصة بالطاقة والحرارة.',
            'نفّذوا تجربة واحدة على الأقل وسجّلوا الملاحظات.',
            'التقطوا صورة/لقطة شاشة لاستخدامها في العرض.'
        ],
        resources: [
            'PhET Interactive Simulations – Energy and Heat.'
        ]
    },
    {
        id: 4,
        title: 'محطة بناء الشرح',
        lead: 'حوّلوا نتائجكم إلى شرح واضح مدعوم بالأمثلة.',
        actions: [
            'اكتبوا شرحًا مبسطًا للمفهوم المختار.',
            'أضيفوا مثالين واقعيين مع توضيح السبب العلمي.',
            'راجعوا لغتكم ودقة المعلومات قبل الانتقال للمنتج النهائي.'
        ],
        resources: [
            'Khan Academy. Heat transfer.',
            'NASA – Thermal Energy Resources.'
        ]
    },
    {
        id: 5,
        title: 'محطة المنتج الرقمي',
        lead: 'اصنعوا عرضًا يوضح ما تعلّمتموه.',
        actions: [
            'اختاروا عرضًا تقديميًا أو فيديو قصير كمنتج نهائي.',
            'أدرجوا الصور، الأمثلة، ونتائج المحاكاة.',
            'احرصوا على ترتيب المحتوى بشكل واضح وجذاب.'
        ],
        resources: [
            'Google Slides / PowerPoint لعرض النتائج.',
            'صور أو فيديوهات تعليمية داعمة من المصادر السابقة.'
        ]
    },
    {
        id: 6,
        title: 'محطة التقويم والتسليم',
        lead: 'تأكدوا من استيفاء المعايير قبل التسليم.',
        actions: [
            'تحققوا من وضوح الفكرة ودقة الأمثلة.',
            'راجِعوا جودة التقديم الرقمي والعمل الجماعي.',
            'قدّموا المنتج النهائي في الوقت المحدد.'
        ],
        resources: [
            'اطّلعوا على معايير التقويم في الجدول أدناه.',
            'قائمة التحقق الخاصة بالمجموعة قبل التسليم.'
        ],
        showRubric: true
    },
    {
        id: 7,
        title: 'محطة الخلاصة والتأمل',
        lead: 'اختتموا الرحلة بتوثيق ما تعلمتموه.',
        actions: [
            'اكتبوا فقرة قصيرة عمّا تعلمتموه من التجربة.',
            'اذكروا كيف ساعدتكم التكنولوجيا على الفهم.',
            'شاركوا أهم فكرة خرجتم بها كفريق.'
        ],
        resources: [
            'ملاحظاتكم أثناء البحث والمحاكاة.',
            'المنتج النهائي كمرجع للخلاصة.'
        ]
    }
]

const rubricRows = [
    {
        criterion: 'الفهم العلمي',
        levels: ['فهم ضعيف', 'فهم جزئي', 'شرح صحيح مع نقص بسيط', 'شرح دقيق وواضح للمفهوم']
    },
    {
        criterion: 'الأمثلة',
        levels: ['أمثلة غير صحيحة', 'مثال واحد', 'أمثلة مناسبة', 'أمثلة واقعية ومتنوعة']
    },
    {
        criterion: 'استخدام التكنولوجيا',
        levels: ['غياب التوظيف', 'استخدام محدود', 'استخدام جيد', 'توظيف مميز للتكنولوجيا']
    },
    {
        criterion: 'العمل الجماعي',
        levels: ['ضعف التعاون', 'مشاركة محدودة', 'تعاون جيد', 'تعاون فعّال وواضح']
    }
]

export default function WebQuestPage() {
    const [activeTab, setActiveTab] = useState('teacher')

    return (
        <>
            <Navbar />
            <main className="main-content">
                <section className={`page-header ${styles.webquestHeader}`}>
                    <div className="container">
                        <div className={styles.headerContent}>
                            <span className={styles.headerBadge}>WebQuest</span>
                            <h1>طرق انتقال الحرارة (التوصيل – الحمل – الإشعاع)</h1>
                            <p>
                                نموذج تعليمي تفاعلي يوظف الويب كويست لفهم انتقال الحرارة وربط المفاهيم العلمية بالحياة
                                اليومية.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`container ${styles.tabsWrap}`}>
                    <div className={styles.tabBar}>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'teacher' ? styles.tabButtonActive : ''}`}
                            onClick={() => setActiveTab('teacher')}
                        >
                            صفحة المعلم
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'student' ? styles.tabButtonActive : ''}`}
                            onClick={() => setActiveTab('student')}
                        >
                            صفحة الطالب
                        </button>
                    </div>

                    {activeTab === 'teacher' && (
                        <div className={styles.sectionStack}>
                            <div className={`card ${styles.heroCard}`}>
                                <div className={styles.heroHeader}>
                                    <div>
                                        <p className={styles.heroLabel}>صفحة المعلم</p>
                                        <h2>تصميم: عبدالرزاق الخطيب</h2>
                                        <span className={styles.heroMeta}>abdulrzaqalkhatib2@gmail.com</span>
                                    </div>
                                    <div className={styles.metaGrid}>
                                        <div className={styles.metaItem}>
                                            <span>المتعلمون</span>
                                            <strong>طلبة الصف الثامن الأساسي</strong>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span>طريقة التدريس</span>
                                            <strong>الويب كويست</strong>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span>نمط التعلم</span>
                                            <strong>بحث واستقصاء تعاوني</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>المقدمة</h3>
                                <p className={styles.sectionText}>
                                    تُعد الحرارة من أشكال الطاقة الأساسية التي تؤثر في حياتنا اليومية، حيث تنتقل من جسم إلى
                                    آخر بطرق مختلفة. يهدف هذا الدرس إلى تمكين الطلبة من فهم طرق انتقال الحرارة الثلاث
                                    (التوصيل، الحمل، الإشعاع) وربطها بتطبيقات حياتية واقعية، من خلال التعلم الاستقصائي
                                    والبحث الموجّه باستخدام أسلوب الويب كويست، بما يعزز التفكير العلمي والتعلم الذاتي.
                                </p>
                            </section>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>الأهداف التعليمية</h3>
                                <ul className={styles.list}>
                                    {teacherGoals.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>طريقة التدريس</h3>
                                <ul className={styles.list}>
                                    {teacherMethods.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>المصادر التعليمية</h3>
                                <ul className={styles.list}>
                                    {teacherResources.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>التقويم</h3>
                                <p className={styles.sectionText}>
                                    تقويم بنائي أثناء تنفيذ المهام (ملاحظات، أسئلة شفوية، تفاعل) وتقويم ختامي باستخدام Rubric
                                    لقياس الفهم، ودقة المعلومات، واستخدام التكنولوجيا، والعمل التعاوني.
                                </p>
                            </section>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>الخلاصة</h3>
                                <p className={styles.sectionText}>
                                    يسهم هذا الويب كويست في تعزيز الفهم العميق لمفهوم انتقال الحرارة من خلال التعلم النشط،
                                    ويُنمّي مهارات القرن الحادي والعشرين مثل البحث الرقمي، والتفكير العلمي، والعمل الجماعي،
                                    والتواصل باستخدام التكنولوجيا.
                                </p>
                            </section>

                            <section className={`card ${styles.sectionCard}`}>
                                <h3 className={styles.sectionTitle}>المراجع التعليمية</h3>
                                <ul className={styles.list}>
                                    {teacherReferences.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <div className={styles.downloadWrap}>
                                <DownloadButton filePath="webquest/teacher_page.docx" label="تحميل صفحة المعلم (Word)" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'student' && (
                        <div className={styles.sectionStack}>
                            <div className={`card ${styles.heroCard}`}>
                                <div className={styles.heroHeader}>
                                    <div>
                                        <p className={styles.heroLabel}>صفحة الطالب</p>
                                        <h2>كيف تنتقل الحرارة من جسم إلى آخر؟</h2>
                                        <span className={styles.heroMeta}>تصميم: عبدالرزاق الخطيب</span>
                                        <span className={styles.heroMeta}>abdulrzaqalkhatib2@gmail.com</span>
                                    </div>
                                    <div className={styles.metaGrid}>
                                        <div className={styles.metaItem}>
                                            <span>الوصف</span>
                                            <strong>موقع تعليمي لطلاب الصف الثامن / علوم</strong>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span>طبيعة المهمة</span>
                                            <strong>رحلة تعلّم تعاونية وتنفيذ رقمي</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.journey}>
                                {studentJourneySteps.map((step) => (
                                    <div key={step.id} className={`card ${styles.journeyCard}`}>
                                        <span className={styles.stepBadge}>{step.id}</span>
                                        <div className={styles.stepContent}>
                                            <h3>{step.title}</h3>
                                            <p className={styles.stepLead}>{step.lead}</p>
                                            <div className={styles.stepGrid}>
                                                <div className={styles.stepBox}>
                                                    <h4 className={styles.stepSubtitle}>المطلوب منك</h4>
                                                    <ul className={styles.list}>
                                                        {step.actions.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className={styles.stepBox}>
                                                    <h4 className={styles.stepSubtitle}>مصادر مساعدة</h4>
                                                    <ul className={styles.list}>
                                                        {step.resources.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            {step.showRubric && (
                                                <div className={styles.rubricBlock}>
                                                    <p className={styles.sectionText}>
                                                        سيتم تقييم عملكم وفق المعايير التالية، لذا احرصوا على وضوح الشرح
                                                        ودقة الأمثلة وجودة التقديم الرقمي.
                                                    </p>
                                                    <div className={styles.tableWrap}>
                                                        <table className={styles.rubricTable}>
                                                            <thead>
                                                                <tr>
                                                                    <th>المعيار</th>
                                                                    <th>يحتاج تحسين (1)</th>
                                                                    <th>جيد (2)</th>
                                                                    <th>جيد جدًا (3)</th>
                                                                    <th>ممتاز (4)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {rubricRows.map((row) => (
                                                                    <tr key={row.criterion}>
                                                                        <td>{row.criterion}</td>
                                                                        {row.levels.map((level) => (
                                                                            <td key={level}>{level}</td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.downloadWrap}>
                                <DownloadButton filePath="webquest/student_page.docx" label="تحميل صفحة الطالب (Word)" />
                            </div>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}
