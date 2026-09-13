import logo from "../../../assets/image/logo.svg"
import dropdown from "../../../assets/icons/dropdown.svg"
import Button from "../../ui/Button"
import { useState } from "react"
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom"

const menuClass = ({ isActive }) =>
    `transition-colors duration-200 ${isActive ? "text-oren" : "text-black hover:text-oren"}`

const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const isTeamActive = location.pathname.startsWith("/tim-kami")

    return(
        <>
        <nav className="fixed top-0 left-0 right-0 mx-auto z-1000 w-full bg-white px-5 py-4 lg:px-14.75 lg:py-6">
            <div className="flex items-center justify-between gap-4">
            <Link to="/" aria-label="Beranda">
                <img src={logo} alt="Fiable Law Office" className="w-44 lg:w-auto" />
            </Link>
            <button type="button" aria-label="Buka menu navigasi" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-biru text-biru lg:hidden">
                <span className="h-0.5 w-6 bg-current" />
                <span className="h-0.5 w-6 bg-current" />
                <span className="h-0.5 w-6 bg-current" />
            </button>
            <ul className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-5 border-t border-gray-100 bg-white px-5 py-6 text-lg font-semibold shadow-lg lg:static lg:flex lg:w-[70%] lg:flex-row lg:items-center lg:justify-around lg:border-0 lg:p-0 lg:text-[26px] lg:shadow-none`}>
                <li><NavLink to="/" end className={menuClass}>Beranda</NavLink></li>
                <li><NavLink to="/tentang-kami" className={menuClass}>Tentang Kami</NavLink></li>
                <li><NavLink to="/layanan" className={menuClass}>Layanan</NavLink></li>
                <li className="relative group">
                    <button
                        type="button"
                        className={`flex items-center gap-1 mt-2 transition-colors duration-200 ${isTeamActive ? "text-oren" : "text-black hover:text-oren"}`}
                    >
                        Tim Kami
                        <img src={dropdown} alt="" className="w-4 h-2" />
                    </button>
                    <ul className="absolute z-10 left-1/2 hidden w-52 -translate-x-1/2 bg-white py-2 text-base font-normal shadow-md group-hover:block group-focus-within:block">
                        <li><NavLink to="/tim-kami/partner-profile" className={({ isActive }) => `block px-3 py-2 hover:bg-gray-100 ${isActive ? "text-oren" : "text-black"}`}>Partner Profile</NavLink></li>
                        <li><NavLink to="/tim-kami/legal-consultant-profile" className={({ isActive }) => `block px-3 py-2 hover:bg-gray-100 ${isActive ? "text-oren" : "text-black"}`}>Legal Consultant Profile</NavLink></li>
                        <li><NavLink to="/tim-kami/lawyer-profile" className={({ isActive }) => `block px-3 py-2 hover:bg-gray-100 ${isActive ? "text-oren" : "text-black"}`}>Lawyer Profile</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/artikel" className={menuClass}>Artikel</NavLink></li>
                <li><NavLink to="/kontak" className={menuClass}>Kontak</NavLink></li>
            </ul>
            <Button
                variant="secondary"
                className="hidden cursor-pointer px-3 py-2 text-white hover:text-oren lg:block"
                onClick={() => { setIsMenuOpen(false); navigate("/konsultasi") }}
            >
                Konsultasi Sekarang
            </Button>
            
            </div>
        </nav>
        <div className="h-20 lg:h-42" aria-hidden="true" />
        </>
    )
}

export default Navbar