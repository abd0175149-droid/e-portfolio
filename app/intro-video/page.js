import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DownloadButton from '@/components/DownloadButton'

export default function IntroVideoPage() {
    return (
        <>
            <Navbar />
            <main className="main-content">
                <div className="page-header">
                    <div className="container">
                        <h1>فيديو تعريفي</h1>
                        <p>تعرف علي من خلال هذا الفيديو القصير</p>
                    </div>
                </div>

                <div className="container">
                    <div className="video-container">
                        <video controls>
                            <source src="/hasoob/video/intro.mp4" type="video/mp4" />
                            المتصفح لا يدعم عرض الفيديو
                        </video>

                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <DownloadButton filePath="video/intro.mp4" label="📥 تحميل الفيديو" />
                        </div>
                    </div>

                    <div className="card" style={{ marginTop: '2rem' }}>
                        <h3 className="card-title">نبذة عن الفيديو</h3>
                        <p className="card-content">
                            في هذا الفيديو التعريفي، أقدم نفسي وأشارككم رحلتي في مجال تقنيات التعليم،
                            أهدافي الأكاديمية والمهنية، وشغفي بدمج التكنولوجيا في التعليم لتحسين تجربة التعلم.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
