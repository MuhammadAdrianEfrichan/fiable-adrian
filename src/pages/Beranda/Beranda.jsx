import layanan from "../../assets/icons/layanan.svg"
import Artikel from "../../components/sections/Artikel"
import Footer from "../../components/sections/Footer"
import Galerry from "../../components/sections/Galerry"
import Hero from "../../components/sections/Hero"
import Ilustrasi from "../../components/sections/Ilustrasi"
import Konsultasi from "../../components/sections/konsultasi"
import Layanan from "../../components/sections/Layanan"
import Navbar from "../../components/sections/Navbar"
import TentangKami from "../../components/sections/TentangKami"
import TimKami from "../../components/sections/TimKami"

const Beranda = ()=>{
    return( 
        <>
        <Navbar />
        <Hero />
        <TentangKami />
        <Ilustrasi />
        <Layanan />
        <TimKami />
        <Artikel />
        <Galerry />
        <Konsultasi />
        <Footer />
        </>
    )
}

export default Beranda