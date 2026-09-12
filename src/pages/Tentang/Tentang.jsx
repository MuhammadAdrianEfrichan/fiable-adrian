import Head from "../../components/Head"
import Footer from "../../components/sections/Footer"
import Navbar from "../../components/sections/Navbar"
import TentangKami from "../../components/sections/TentangKami"



const Tentang = ()=>{
    return (
        <>
            <Navbar />
            <Head>tentang kami</Head>
            <TentangKami />
            <Footer />
        </>
    )
}

export default Tentang