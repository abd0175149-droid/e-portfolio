import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'
import cvData from '@/data/cv.json'

export default function CVPage() {
    return (
        <>
            <Navbar />
            <main className="cv-premium">
                <div className="page-header cv-header">
                    <div className="container">
                        <div className="header-flex">
                            <div className="profile-img-container">
                                <img src="/images/profile.jpg" alt={cvData.personalInfo.name} className="profile-img" />
                            </div>
                            <div className="header-text">
                                <h1>{cvData.personalInfo.name}</h1>
                                <h2>{cvData.personalInfo.title}</h2>
                                <div className="contact-pills">
                                    <span>✉️ {cvData.personalInfo.email}</span>
                                    <span>📞 {cvData.personalInfo.phone}</span>
                                    <span>📍 {cvData.personalInfo.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container cv-body">
                    <div className="cv-grid">
                        {/* Right Column (Main content in RTL) */}
                        <div className="cv-main-col">
                            <section className="cv-card shadow-lg">
                                <h3 className="section-title">🔍 نبذة تعريفية</h3>
                                <p className="summary-text">{cvData.summary}</p>
                            </section>

                            <section className="cv-card shadow-lg">
                                <h3 className="section-title">💼 الخبرات العملية</h3>
                                <div className="experience-list">
                                    {cvData.experience.map((exp, index) => (
                                        <div key={index} className="exp-item">
                                            <div className="exp-dot"></div>
                                            <div className="exp-content">
                                                <h4>{exp.title}</h4>
                                                <h5>{exp.company}</h5>
                                                <p className="exp-period">{exp.period}</p>
                                                <ul>
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <li key={idx}>{resp}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="cv-card shadow-lg">
                                <h3 className="section-title">🚀 المشاريع</h3>
                                <div className="projects-grid">
                                    {cvData.projects.map((proj, index) => (
                                        <div key={index} className="project-node">
                                            <h4>{proj.title}</h4>
                                            <p className="proj-year">{proj.year}</p>
                                            <p>{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Left Column (Sidebar-like content in RTL) */}
                        <div className="cv-side-col">
                            <div style={{ marginBottom: '2rem' }}>
                                <DownloadButton filePath="cv/cv.pdf" label="تحميل السيرة الذاتية PDF" />
                            </div>

                            <section className="cv-card glassy-card">
                                <h3 className="section-title-sm">🎓 التعليم</h3>
                                {cvData.education.map((edu, index) => (
                                    <div key={index} className="edu-item">
                                        <h4>{edu.degree}</h4>
                                        <p className="edu-inst">{edu.institution}</p>
                                        <p className="edu-date">{edu.period}</p>
                                        <p className="edu-desc">{edu.description}</p>
                                    </div>
                                ))}
                            </section>

                            <section className="cv-card glassy-card">
                                <h3 className="section-title-sm">🛠️ المهارات</h3>
                                <div className="skills-tags">
                                    <h5 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>تقنية</h5>
                                    <div className="tags-flex">
                                        {cvData.skills.technical.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
                                    </div>
                                    <h5 style={{ color: 'var(--accent)', marginTop: '1rem', marginBottom: '0.5rem' }}>شخصية</h5>
                                    <div className="tags-flex">
                                        {cvData.skills.soft.map((s, i) => <span key={i} className="skill-tag soft">{s}</span>)}
                                    </div>
                                </div>
                            </section>

                            <section className="cv-card glassy-card">
                                <h3 className="section-title-sm">🏅 الشهادات</h3>
                                <div className="certs-list">
                                    {cvData.certificates.map((cert, index) => (
                                        <div key={index} className="cert-item-sm">
                                            <strong>{cert.title}</strong>
                                            <p>{cert.issuer} | {cert.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <style jsx>{`
        .cv-premium {
          background-color: #f0f2f5;
          min-height: 100vh;
        }
        
        .cv-header {
          padding: 8rem 0 5rem;
          background: linear-gradient(135deg, var(--primary) 0%, #1a2a4a 100%);
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }

        .header-flex {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .profile-img-container {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 6px solid var(--accent);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          flex-shrink: 0;
          background: #eee;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .header-text h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
        }

        .header-text h2 {
          color: var(--accent);
          font-weight: 500;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .contact-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .contact-pills span {
          background: rgba(255,255,255,0.1);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .cv-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 2rem;
          margin-top: -3rem;
          position: relative;
          z-index: 10;
        }

        .cv-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .glassy-card {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #f0f2f5;
          color: var(--primary);
        }

        .section-title-sm {
          font-size: 1.3rem;
          margin-bottom: 1.25rem;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .summary-text {
          font-size: 1.2rem;
          line-height: 1.9;
          color: #444;
          text-align: justify;
        }

        /* Experience Timeline */
        .experience-list {
          position: relative;
          padding-right: 1.5rem;
          border-right: 2px solid #eee;
        }

        .exp-item {
          position: relative;
          padding-bottom: 2.5rem;
        }

        .exp-dot {
          position: absolute;
          right: -25px;
          top: 5px;
          width: 18px;
          height: 18px;
          background: var(--accent);
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 0 0 2px var(--accent);
        }

        .exp-content h4 {
          font-size: 1.4rem;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .exp-content h5 {
          color: var(--accent-hover);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .exp-period {
          font-size: 0.9rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .exp-content ul {
          padding-right: 1.2rem;
          list-style: square;
        }

        .exp-content li {
          margin-bottom: 0.5rem;
        }

        /* Sidebar Skills tags */
        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: var(--primary);
          color: white;
          padding: 0.35rem 0.8rem;
          border-radius: 6px;
          font-size: 0.85rem;
        }

        .skill-tag.soft {
          background: #e2e8f0;
          color: var(--primary);
        }

        .edu-item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .edu-item:last-child {
          border-bottom: none;
        }
        
        .edu-item h4 { font-size: 1.1rem; margin-bottom: 0.25rem; }
        .edu-inst { font-weight: 600; color: var(--accent-hover); font-size: 0.95rem; }
        .edu-date { font-size: 0.85rem; color: var(--secondary); }

        .cert-item-sm {
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .project-node {
          padding: 1.25rem;
          background: #f8fafc;
          border-radius: 12px;
          border-right: 4px solid var(--accent);
        }

        .project-node h4 { margin-bottom: 0.5rem; }
        .proj-year { color: var(--accent-hover); font-weight: bold; font-size: 0.85rem; margin-bottom: 0.5rem; }

        @media (max-width: 992px) {
          .cv-grid { grid-template-columns: 1fr; }
          .cv-side-col { order: -1; }
          .header-flex { flex-direction: column; text-align: center; }
          .contact-pills { justify-content: center; }
        }
      `}</style>
        </>
    )
}
