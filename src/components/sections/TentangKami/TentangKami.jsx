import tentangKami from "../../../assets/image/tentangKami.png"
import tentangKamiLine from "../../../assets/icons/tentangKamiLine.svg"



const TentangKami = ()=>{
    return (
        <section className="my-32.75 px-14.75">
            <div className="flex gap-25 justify-center">
                <img src={tentangKami} alt="tentang kami" />
                <div className="mt-16">
                    <div className="flex gap-5">
                        <h1 className="text-oren font-medium text-[25px]">TENTANG KAMI</h1>
                        <img src={tentangKamiLine} alt="" />
                    </div>
                    <h1 className="font-heading text-[55px] w-136.5 my-5 text-heading">SELAMAT DATANG DI
                        FIABLE LAW OFFICE</h1>
                        <div className="text-paragraf text-[25px] w-206.25 leading-6.25 tracking-normal flex flex-col items-center justify-center gap-7">
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