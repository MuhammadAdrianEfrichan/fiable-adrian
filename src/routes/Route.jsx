import { Routes, Route } from "react-router-dom"
import Beranda from "../pages/Beranda"
import Layan from "../pages/Layan"
import Tentang from "../pages/Tentang"
import Partner from "../pages/Partner"
import Consultan from "../pages/Consultan"
import Lawyer from "../pages/Lawyer"
import Footer from "../components/sections/Footer"
import Head from "../components/Head"
import Navbar from "../components/sections/Navbar"
import Kontak from "../pages/Kontak"
import ArtikelPag from "../pages/ArtikelPag"
import Konsul from "../pages/Konsul/Konsul"

const PlaceholderPage = ({ title }) => (
    <>
        <Navbar />
        <Head>{title}</Head>
        <Footer />
    </>
)

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami" element={<Tentang />} />
        <Route path="/layanan" element={<Layan />} />
        <Route path="/tim-kami/partner-profile" element={<Partner />} />
        <Route path="/tim-kami/legal-consultant-profile" element={<Consultan />} />
        <Route path="/tim-kami/lawyer-profile" element={<Lawyer />} />
        <Route path="/artikel" element={<ArtikelPag />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/konsultasi" element={<Konsul />} />
    </Routes>
)

export default AppRoutes