import ilustrasi from "../../../assets/image/ilustrasi.png"

const Ilustrasi =()=>{
    return <section>
        <div className="relative bg-cover bg-center bg-no-repeat min-h-125"
        style={{ backgroundImage: `url(${ilustrasi})` }}>
            <div className="flex py-35 items-center justify-center ">
            <p className="font-heading text-white text-[55px] text-center font-normal uppercase w-374.25">“mengedepankan profesionalisme, kode etik, dan
            integritas dalam menjalankan profesi untuk
            mempertahankan kepercayaan
            klien sebagai pencari keadilan”
            </p>
            </div>
        </div>
    </section>
}


export default Ilustrasi