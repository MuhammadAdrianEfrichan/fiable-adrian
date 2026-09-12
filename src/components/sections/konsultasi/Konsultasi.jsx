import konsultasi from "../../../assets/icons/konsultasi.svg"
import mail from "../../../assets/icons/mail.svg"
import Button from "../../ui/Button"

const Konsultasi = ()=>{
    return <section className="bg-background px-14.75 py-32.75">
        <div className="flex flex-col justify-center items-center gap-10">
            <img src={konsultasi} alt="" />
            <div className="flex gap-8">
                <input type="text" className="p-5 w-129.75 h-16.75 bg-white" placeholder="Name"/>
                <input type="text" className="p-5 w-129.75 h-16.75 bg-white" placeholder="E-mail*"/>
                <input type="text" className="p-5 w-129.75 h-16.75 bg-white" placeholder="No Telepon*"/>
            </div>
            <textarea name="kronologi" id="" className="p-5 w-[1626px] h-74.25 bg-white" placeholder="Kronologi/Posisi Kasus"></textarea>
            <Button className="uppercase w-57.75 flex text-[25px] justify-center gap-4" variant="secondary">kirim <img src={mail} alt="" /></Button>
        </div>
    </section>
}

export default Konsultasi