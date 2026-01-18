import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import resourcesData from '@/data/resources.json'

export default function ResourcesPage() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>المواقع والموارد المفضلة</h1>
                        <p>مجموعة من الموارد التعليمية المفيدة</p>
                    </div>
                </div>

                <div className="container">
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h3 className="card-title">🌐 عن هذه الصفحة</h3>
                        <p className="card-content">
                            هذه مجموعة منتقاة من المواقع والمنصات التعليمية التي أستخدمها بانتظام في
                            التعليم والتعلم. تتنوع هذه الموارد بين منصات التعلم الإلكتروني، أدوات تعليمية،
                            ومراجع أكاديمية.
                        </p>
                    </div>

                    <div className="grid">
                        {resourcesData.map((resource, index) => (
                            <div key={index} className="card">
                                <h3 className="card-title">{resource.title}</h3>
                                <p className="card-content" style={{ marginBottom: '1rem' }}>
                                    {resource.description}
                                </p>
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    🔗 زيارة الموقع
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
