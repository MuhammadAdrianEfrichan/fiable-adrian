import layanan from "../../../assets/icons/layanan.svg"
import litigasi from "../../../assets/icons/litigasi.svg"
import general from "../../../assets/icons/general.svg"
import arrow from "../../../assets/icons/arrow.svg"
import layananBg from "../../../assets/image/layananBg.png"
const Layanan = ()=>{
    return <section className="bg-background px-14.75 py-32.75 h-220"
    style={{ backgroundImage: `url(${layananBg})` }}>
        <div className="flex flex-col justify-center items-center gap-15">
            <img src={layanan} alt="" className="
            "/>
            <div className="flex gap-5">
                <div className="w-198.5 h-116 bg-white p-11 ">
                    <div className="flex items-center gap-8 font-medium">
                        <img src={litigasi} alt="" />
                        <h1 className="text-biru text-[30px]">Litigasi & Non Litigasi</h1>
                    </div>
                    <p className="w-177.5 my-11.75 text-paragraf">Fiable Law Office memiliki tim pengacara yang berpengalaman dalam memberikan jasa hukum berupa konsultasi hukum, bantuan hukum, dan pendampingan hukum yang menyangkut perkara Perdata (PMH & Wanprestasi), Pidana, Tata Usaha Negara, Hukum Keluarga, termasuk sengketa tanah ulayat dan lain sebagainya.</p>
                    <a href="#" className="uppercase flex text-oren">selengkapnya <img src={arrow} alt="" /></a>
                </div>
                <div className="w-198.5 h-116 bg-white p-11 ">
                    <div className="flex items-center gap-8 font-medium">
                        <img src={general} alt="" />
                        <h1 className="text-biru text-[30px]">General Corporate,Commercial, & Compliance</h1>
                    </div>
                    <p className="w-177.5 my-11.75 text-paragraf">Fiable Law Office memiliki legal consultant berlisensi pengacara yang memiliki pengalaman dalam memberikan jasa berupa, Perancangan Kontrak Bisnis, Uji Tuntas dan Penerbitan Opini Hukum, Perizinan usaha berbasis OSS-RBA dan manintenance kewajiban pelaporan intansi, Penunjukan sebagai Konsultan Hukum Tetap, Corporate Restructuring dan lain sebagainya.</p>
                    <a href="#" className="uppercase flex text-oren">selengkapnya <img src={arrow} alt="" /></a>
                </div>
                
            </div>
        </div>
    </section>
}

export default Layanan