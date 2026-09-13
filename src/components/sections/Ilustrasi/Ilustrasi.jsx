import ilustrasi from "../../../assets/image/ilustrasi.png"

const Ilustrasi =()=>{
    return <section>
        <div className="relative bg-cover bg-center bg-no-repeat min-h-125"
        style={{ backgroundImage: `url(${ilustrasi})` }}>
            <div className="flex items-center justify-center px-5 py-24 sm:px-10 sm:py-32 lg:py-35">
            <p className="w-full max-w-6xl text-center font-heading text-3xl font-normal uppercase text-white sm:text-5xl lg:text-[55px]">“mengedepankan profesionalisme, kode etik, dan
            integritas dalam menjalankan profesi untuk
            mempertahankan kepercayaan
            klien sebagai pencari keadilan”
            </p>
            </div>
        </div>
    </section>
}


export default Ilustrasi