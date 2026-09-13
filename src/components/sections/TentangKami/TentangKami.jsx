import tentangKami from "../../../assets/image/tentangKami.png"
import tentangKamiLine from "../../../assets/icons/tentangKamiLine.svg"



const TentangKami = ()=>{
    return (
        <section className="my-16 px-5 sm:my-24 sm:px-10 lg:my-32.75 lg:px-14.75">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-center lg:gap-25">
                <img src={tentangKami} alt="tentang kami" className="h-auto w-full object-cover lg:max-w-[42%]" />
                <div className="mt-0 lg:mt-16">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                        <h1 className="text-oren font-medium text-[25px]">TENTANG KAMI</h1>
                        <img src={tentangKamiLine} alt="" />
                    </div>
                    <h1 className="my-5 w-full font-heading text-4xl text-heading sm:text-5xl lg:w-136.5 lg:text-[55px]">SELAMAT DATANG DI
                        FIABLE LAW OFFICE</h1>
                        <div className="flex w-full flex-col justify-center gap-7 text-lg leading-relaxed tracking-normal text-paragraf sm:text-xl lg:w-206.25 lg:text-[25px] lg:leading-6.25">
                    <p>Fiable Law Office, berbasis di Kota Padang, Sumatera Barat, Indonesia, adalah firma hukum yang didedikasikan untuk memberikan solusi tepat dan mendalam bagi kepentingan hukum individu, kelompok masyarakat, dan perusahan. Dengan tim Pengacara dan Legal Consultant berpengalaman, kami menawarkan keahlian yang beragam, sehingga memberikan "warna" khusus dalam menyelesaikan berbagai permasalahan hukum.</p>
                    <p>Di tengah dinamika dunia hukum yang terus berkembang, kami hadir dengan komitmen untuk memberikan panduan hukum yang tidak hanya memahami kompleksitas regulasi, tetapi juga menciptakan solusi yang tepat dan inovatif untuk setiap tantangan yang dihadapi klien kami.</p>
                    <p>Fiable Law Office juga dikenal atas keterlibatan kami dalam lintas profesional dan komunitas. Kami aktif menjalin kemitraan dengan berbagai lembaga masyarakat sipil, perguruan tinggi, dan lembaga pemerintahan. Hal ini bukan hanya demi kepentingan advokasi klien, tetapi juga untuk memberikan kontribusi positif pada perkembangan hukum dan masyarakat secara lebih luas. Karena kami percaya bahwa kolaborasi yang baik merupakan kunci kesuksesan bersama.</p>
                    <p>Transparansi, kejujuran, dan komunikasi yang efektif adalah inti dari hubungan baik dengan klien. Selain memberikan perlindungan hukum yang andal, kami melihat setiap klien merupakan mitra kami dalam perjalanan menuju masa depan yang kokoh dan penuh makna. Kami bersedia dan bersemangat untuk membantu Anda menavigasi menghadapi kompleksitas hukum, memberikan solusi yang memberdayakan, dan menciptakan dampak positif yang berkelanjutan.</p>
                    <p>
                    Selamat datang di Fiable Law Office, tempat di mana kepercayaan dan keberlanjutan menjadi landasan dari setiap layanan kami.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TentangKami