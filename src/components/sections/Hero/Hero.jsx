import hero from "../../../assets/image/hero.png"
import heroLine from "../../../assets/icons/heroLine.svg"
import ilustrasiHero from "../../../assets/image/ilustrasiHero.svg"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"

const Hero = ()=>{
    const navigate = useNavigate()

    return <section>
        <div className="relative">
            <img src={hero} alt="hero" className="min-h-[32rem] w-full object-cover object-center sm:min-h-[38rem] lg:min-h-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <img src={heroLine} alt="" className="w-48 sm:w-72 lg:w-auto" />
            <img src={ilustrasiHero} alt="" className="w-full max-w-2xl py-10 sm:py-15"/>
            <Button className="cursor-pointer" onClick={() => navigate("/kontak")}>Hubungi Kami</Button>
            </div>
        </div>
    </section>
}

export default Hero