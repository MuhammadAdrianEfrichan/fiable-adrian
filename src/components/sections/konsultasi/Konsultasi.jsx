import konsultasi from "../../../assets/icons/konsultasi.svg"
import mail from "../../../assets/icons/mail.svg"
import Button from "../../ui/Button"

const Konsultasi = ()=>{
    return <section className="bg-background px-5 py-16 sm:px-10 sm:py-24 lg:px-14.75 lg:py-32.75">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 lg:gap-10">
            <img src={konsultasi} alt="" className="max-w-full" />
            <div className="grid w-full gap-5 lg:grid-cols-3 lg:gap-8">
                <input type="text" className="h-16.75 w-full bg-white p-5" placeholder="Name"/>
                <input type="text" className="h-16.75 w-full bg-white p-5" placeholder="E-mail*"/>
                <input type="text" className="h-16.75 w-full bg-white p-5" placeholder="No Telepon*"/>
            </div>
            <textarea name="kronologi" className="h-64 w-full bg-white p-5 lg:h-74.25" placeholder="Kronologi/Posisi Kasus"></textarea>
            <Button className="flex w-full max-w-57.75 justify-center gap-4 text-xl uppercase sm:text-[25px]" variant="secondary">kirim <img src={mail} alt="" /></Button>
        </div>
    </section>
}

export default Konsultasi