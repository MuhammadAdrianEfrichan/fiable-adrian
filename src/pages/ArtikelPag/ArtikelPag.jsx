import ArtikelCart from "../../components/ArtikelCart"
import Head from "../../components/Head"
import Footer from "../../components/sections/Footer"
import Navbar from "../../components/sections/Navbar"
import ArtikelLay from "../../components/layouts/ArtikelLay"

const ArtikelPag = ()=>{
    return(
    <>
            <Navbar />
            <Head>Artikel</Head>
            <ArtikelLay />
            <Footer />
        </>
    )
}

export default ArtikelPag