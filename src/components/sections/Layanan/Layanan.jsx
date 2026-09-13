import layanan from "../../../assets/icons/layanan.svg"
import litigasi from "../../../assets/icons/litigasi.svg"
import general from "../../../assets/icons/general.svg"
import arrow from "../../../assets/icons/arrow.svg"
import layananBg from "../../../assets/image/LayananBg.png"
import { useNavigate } from "react-router-dom"

const ServiceCard = ({ icon, title, children, isDetailPage, onMore }) => (
    <article className={`${isDetailPage ? "lg:min-h-145" : "lg:h-116"} w-full bg-white p-6 sm:p-8 lg:p-11`}>
        <div className="flex items-center gap-4 font-medium sm:gap-8">
            <img src={icon} alt="" className="h-16 w-16 shrink-0 sm:h-20 sm:w-20 lg:h-27.25 lg:w-27.25" />
            <h2 className="text-xl text-biru sm:text-2xl lg:text-[30px]">{title}</h2>
        </div>
        <div className={`${isDetailPage ? "mt-8 text-sm leading-[1.15] sm:text-base lg:mt-7" : "my-8 lg:my-11.75"} text-justify text-paragraf`}>
            {children}
        </div>
        {!isDetailPage && (
            <button type="button" onClick={onMore} className="flex items-center uppercase text-oren">
                selengkapnya <img src={arrow} alt="" />
            </button>
        )}
    </article>
)

const Layanan = ({ isDetailPage = false })=>{
    const navigate = useNavigate()

    return <section className={`${isDetailPage ? "bg-[#f5f5f5]" : "bg-background bg-cover bg-center lg:h-220"} px-5 py-12 sm:px-10 sm:py-16 lg:px-14.75 lg:py-12`}
    style={!isDetailPage ? { backgroundImage: `url(${layananBg})` } : undefined}>
        <div className={`${isDetailPage ? "mx-auto" : "flex flex-col items-center justify-center gap-10 lg:gap-15"} w-full max-w-[1700px]`}>
            {!isDetailPage && <img src={layanan} alt="" />}
            <div className="grid w-full gap-5 lg:grid-cols-2">
                <ServiceCard icon={litigasi} title="Litigasi & Non Litigasi" isDetailPage={isDetailPage} onMore={() => navigate("/layanan")}>
                    {isDetailPage ? (
                        <>
                            <p><strong>Fiable Law Office</strong>, didukung oleh tim pengacara yang berpengalaman, menyediakan layanan hukum yang komprehensif, meliputi konsultasi hukum, bantuan hukum, dan pendampingan hukum. Tim kami memiliki keahlian khusus dalam menangani perkara Perdata (PMH & Wanprestasi), Pidana, Tata Usaha Negara, Hukum Keluarga, maupun penyelesaian sengketa tanah ulayat dan berbagai masalah hukum lainnya.</p>
                            <p className="mt-5">Dengan pendekatan yang berfokus pada kebutuhan klien, kami berkomitmen untuk memberikan solusi hukum yang tepat dan efektif. Setiap anggota tim kami memahami kompleksitas hukum dan memberikan perhatian yang mendalam dalam menangani perkara klien, membantu klien mengatasi tantangan hukum yang dihadapi.</p>
                            <p className="mt-5">Kami percaya bahwa penyelesaian sengketa hukum yang efektif memerlukan pemahaman yang mendalam dan strategi yang tepat, sehingga kami siap membantu Anda menghadapi berbagai permasalahan hukum dengan penuh integritas.</p>
                        </>
                    ) : (
                        <p>Fiable Law Office memiliki tim pengacara yang berpengalaman dalam memberikan jasa hukum berupa konsultasi hukum, bantuan hukum, dan pendampingan hukum yang menyangkut perkara Perdata (PMH & Wanprestasi), Pidana, Tata Usaha Negara, Hukum Keluarga, termasuk sengketa tanah ulayat dan lain sebagainya.</p>
                    )}
                </ServiceCard>
                <ServiceCard icon={general} title="General Corporate, Commercial, & Compliance" isDetailPage={isDetailPage} onMore={() => navigate("/layanan")}>
                    {isDetailPage ? (
                        <>
                            <p><strong>Fiable Law Office</strong> memiliki tim legal consultant berlisensi pengacara yang menghadirkan keahlian dalam berbagai aspek hukum korporat, perdagangan, dan kepatuhan. Layanan kami meliputi:</p>
                            <ol className="mt-4 list-decimal space-y-3 pl-5">
                                <li><strong>Perancangan, Peninjauan, dan/atau Negosiasi Kontrak Bisnis</strong> (Contract Drafting): Kami menghadirkan keahlian dalam merancang, meninjau, dan bernegosiasi kontrak bisnis yang sesuai dengan kebutuhan dan kepentingan klien.</li>
                                <li><strong>Uji Tuntas</strong> di Segi Hukum dan Penerbitan Opini Hukum (Legal Due Diligence & Legal Opinion): Menyediakan penelitian mendalam terhadap aspek hukum, serta memberikan opini hukum yang solid untuk memastikan keamanan dan kepatuhan terhadap peraturan yang berlaku.</li>
                                <li><strong>Perizinan Usaha Berbasis OSS-RBA dan Maintenance Kewajiban Pelaporan Instansi Terkait:</strong> Membantu klien dalam perizinan usaha berbasis OSS-RBA dan menjaga kewajiban pelaporan kepada instansi terkait untuk memastikan kelancaran operasional perusahaan.</li>
                                <li><strong>Penunjukan sebagai Konsultan Hukum Tetap (Retainer Lawyer):</strong> Menyediakan layanan konsultasi hukum berkelanjutan, memastikan klien mendapatkan dukungan hukum yang konsisten dan tepat waktu.</li>
                                <li><strong>Corporate Restructuring</strong> seperti Merger, Consolidation, Acquisition, Split-Up, Spin-Off, dan Lain Sebagainya: Menyediakan panduan hukum dalam proses restrukturisasi perusahaan.</li>
                            </ol>
                            <p className="mt-5">Kami percaya bahwa keberhasilan suatu perusahaan sangat tergantung pada fondasi hukum yang kuat. Dengan tim legal consultant berpengalaman, Fiable Law Office siap menjadi mitra strategis yang dapat membantu mengoptimalkan potensi dan mengelola risiko hukum.</p>
                        </>
                    ) : (
                        <p>Fiable Law Office memiliki legal consultant berlisensi pengacara yang memiliki pengalaman dalam memberikan jasa berupa perancangan kontrak bisnis, uji tuntas dan penerbitan opini hukum, perizinan usaha berbasis OSS-RBA, penunjukan sebagai konsultan hukum tetap, corporate restructuring dan lain sebagainya.</p>
                    )}
                </ServiceCard>
            </div>
        </div>
    </section>
}

export default Layanan