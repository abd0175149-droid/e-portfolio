import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CVSection from '@/components/CVSection'
import DownloadButton from '@/components/DownloadButton'
import cvData from '@/data/cv.json'

export default function CVPage() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>السيرة الذاتية</h1>
                        <p>{cvData.personalInfo.name} - {cvData.personalInfo.title}</p>
                    </div>
                </div>

                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <DownloadButton filePath="cv/cv.pdf" label="📥 تحميل نسخة PDF من السيرة الذاتية" />
                    </div>

                    <CVSection title="نبذة تعريفية" defaultOpen={true}>
                        <p>{cvData.summary}</p>
                        <div style={{ marginTop: '1rem' }}>
                            <p><strong>البريد الإلكتروني:</strong> {cvData.personalInfo.email}</p>
                            <p><strong>الجوال:</strong> {cvData.personalInfo.phone}</p>
                            <p><strong>الموقع:</strong> {cvData.personalInfo.location}</p>
                        </div>
                    </CVSection>

                    <CVSection title="التعليم">
                        {cvData.education.map((edu, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                                <p><strong>{edu.institution}</strong></p>
                                <p style={{ color: '#7f8c8d' }}>{edu.period}</p>
                                <p>{edu.description}</p>
                            </div>
                        ))}
                    </CVSection>

                    <CVSection title="الخبرات العملية">
                        {cvData.experience.map((exp, index) => (
                            <div key={index} style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{exp.title}</h4>
                                <p><strong>{exp.company}</strong></p>
                                <p style={{ color: '#7f8c8d' }}>{exp.period}</p>
                                <ul style={{ marginTop: '0.5rem', marginRight: '1.5rem' }}>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CVSection>

                    <CVSection title="المهارات">
                        <div>
                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>المهارات التقنية</h4>
                            <ul style={{ marginRight: '1.5rem', marginBottom: '1rem' }}>
                                {cvData.skills.technical.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>المهارات الشخصية</h4>
                            <ul style={{ marginRight: '1.5rem' }}>
                                {cvData.skills.soft.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </CVSection>

                    <CVSection title="الشهادات">
                        {cvData.certificates.map((cert, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{cert.title}</h4>
                                <p><strong>{cert.issuer}</strong> - {cert.year}</p>
                            </div>
                        ))}
                    </CVSection>

                    <CVSection title="المشاريع">
                        {cvData.projects.map((project, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{project.title}</h4>
                                <p>{project.description}</p>
                                <p style={{ color: '#7f8c8d' }}>السنة: {project.year}</p>
                            </div>
                        ))}
                    </CVSection>

                    <CVSection title="اللغات">
                        {cvData.languages.map((lang, index) => (
                            <p key={index}><strong>{lang.language}:</strong> {lang.level}</p>
                        ))}
                    </CVSection>
                </div>
            </main>
            <Footer />
        </>
    )
}
