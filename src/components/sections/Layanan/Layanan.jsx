import layanan from "../../../assets/icons/layanan.svg"
import litigasi from "../../../assets/icons/litigasi.svg"
import general from "../../../assets/icons/general.svg"
import arrow from "../../../assets/icons/arrow.svg"
import layananBg from "../../../assets/image/LayananBg.png"
const Layanan = ()=>{
    return <section className="bg-background bg-cover bg-center px-5 py-16 sm:px-10 sm:py-24 lg:h-220 lg:px-14.75 lg:py-32.75"
    style={{ backgroundImage: `url(${layananBg})` }}>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-15">
            <img src={layanan} alt="" className="
            "/>
            <div className="grid w-full max-w-7xl gap-5 lg:grid-cols-2">
                <div className="w-full bg-white p-6 sm:p-8 lg:h-116 lg:p-11">
                    <div className="flex items-center gap-4 font-medium sm:gap-8">
                        <img src={litigasi} alt="" />
                        <h1 className="text-xl text-biru sm:text-2xl lg:text-[30px]">Litigasi & Non Litigasi</h1>
                    </div>
                    <p className="my-8 text-paragraf lg:my-11.75">Fiable Law Office memiliki tim pengacara yang berpengalaman dalam memberikan jasa hukum berupa konsultasi hukum, bantuan hukum, dan pendampingan hukum yang menyangkut perkara Perdata (PMH & Wanprestasi), Pidana, Tata Usaha Negara, Hukum Keluarga, termasuk sengketa tanah ulayat dan lain sebagainya.</p>
                    <a href="#" className="uppercase flex text-oren">selengkapnya <img src={arrow} alt="" /></a>
                </div>
                <div className="w-full bg-white p-6 sm:p-8 lg:h-116 lg:p-11">
                    <div className="flex items-center gap-4 font-medium sm:gap-8">
                        <img src={general} alt="" />
                        <h1 className="text-xl text-biru sm:text-2xl lg:text-[30px]">General Corporate,Commercial, & Compliance</h1>
                    </div>
                    <p className="my-8 text-paragraf lg:my-11.75">Fiable Law Office memiliki legal consultant berlisensi pengacara yang memiliki pengalaman dalam memberikan jasa berupa, Perancangan Kontrak Bisnis, Uji Tuntas dan Penerbitan Opini Hukum, Perizinan usaha berbasis OSS-RBA dan manintenance kewajiban pelaporan intansi, Penunjukan sebagai Konsultan Hukum Tetap, Corporate Restructuring dan lain sebagainya.</p>
                    <a href="#" className="uppercase flex text-oren">selengkapnya <img src={arrow} alt="" /></a>
                </div>
                
            </div>
        </div>
    </section>
}

export default Layanan