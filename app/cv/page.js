import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CVSection from '@/components/CVSection'
import DownloadButton from '@/components/DownloadButton'
import cvData from '@/data/cv.json'

export default function CVPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="page-header">
                    <div className="container">
                        <h1>السيرة الذاتية</h1>
                        <p>{cvData.personalInfo.name} | {cvData.personalInfo.title}</p>
                    </div>
                </div>

                <div className="container" style={{ paddingBottom: '4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <DownloadButton filePath="cv/cv.pdf" label="تحميل السيرة الذاتية (PDF)" />
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <CVSection title="👤 نبذة تعريفية" defaultOpen={true}>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>{cvData.summary}</p>
                            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                <p><strong>✉️ البريد الإلكتروني:</strong> {cvData.personalInfo.email}</p>
                                <p><strong>📞 الجوال:</strong> {cvData.personalInfo.phone}</p>
                                <p><strong>📍 الموقع:</strong> {cvData.personalInfo.location}</p>
                            </div>
                        </CVSection>

                        <CVSection title="🎓 التعليم">
                            {cvData.education.map((edu, index) => (
                                <div key={index} style={{ marginBottom: '2rem', paddingRight: '1rem', borderRight: '3px solid var(--accent)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.4rem' }}>{edu.degree}</h4>
                                    <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>{edu.institution}</p>
                                    <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>{edu.period}</p>
                                    <p style={{ marginTop: '0.5rem' }}>{edu.description}</p>
                                </div>
                            ))}
                        </CVSection>

                        <CVSection title="💼 الخبرات العملية">
                            {cvData.experience.map((exp, index) => (
                                <div key={index} style={{ marginBottom: '2.5rem' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.4rem' }}>{exp.title}</h4>
                                    <p style={{ fontWeight: '700', color: 'var(--accent-hover)' }}>{exp.company}</p>
                                    <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{exp.period}</p>
                                    <ul style={{ marginRight: '1.5rem', listStyleType: 'square' }}>
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} style={{ marginBottom: '0.4rem' }}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CVSection>

                        <CVSection title="🛠️ المهارات">
                            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
                                <div className="card" style={{ padding: '1.5rem' }}>
                                    <h4 style={{ color: 'var(--accent-hover)', marginBottom: '1rem' }}>المهارات التقنية</h4>
                                    <ul style={{ marginRight: '1.2rem' }}>
                                        {cvData.skills.technical.map((skill, index) => (
                                            <li key={index} style={{ marginBottom: '0.3rem' }}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="card" style={{ padding: '1.5rem' }}>
                                    <h4 style={{ color: 'var(--accent-hover)', marginBottom: '1rem' }}>المهارات الشخصية</h4>
                                    <ul style={{ marginRight: '1.2rem' }}>
                                        {cvData.skills.soft.map((skill, index) => (
                                            <li key={index} style={{ marginBottom: '0.3rem' }}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CVSection>

                        <CVSection title="🏅 الشهادات">
                            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: '0' }}>
                                {cvData.certificates.map((cert, index) => (
                                    <div key={index} className="card" style={{ padding: '1.25rem', borderRight: '4px solid var(--accent)' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{cert.title}</h4>
                                        <p style={{ fontSize: '0.9rem' }}><strong>{cert.issuer}</strong></p>
                                        <p style={{ fontSize: '0.85rem', color: var(--secondary) }}>{cert.year}</p>
                  </div>
                ))}
                    </div>
                </CVSection>
            </div>
        </div >
      </main >
        <Footer />
    </>
  )
}
