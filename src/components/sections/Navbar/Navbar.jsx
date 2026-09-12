import logo from "../../../assets/image/logo.svg"
import dropdown from "../../../assets/icons/dropdown.svg"
import Button from "../../ui/Button"
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom"

const menuClass = ({ isActive }) =>
    `transition-colors duration-200 ${isActive ? "text-oren" : "text-black hover:text-oren"}`

const Navbar = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const isTeamActive = location.pathname.startsWith("/tim-kami")

    return(
        <>
        <nav className="fixed top-0 left-0 right-0 mx-auto bg-white z-1000 px-14.75 w-full h-42">
            <div className="flex justify-between items-center">
            <Link to="/" aria-label="Beranda">
                <img src={logo} alt="Fiable Law Office" />
            </Link>
            <ul className="flex justify-around w-[70%] h-8 text-[26px] font-semibold ">
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
                className="py-2 px-3 cursor-pointer text-white hover:text-oren"
                onClick={() => navigate("/konsultasi")}
            >
                Konsultasi Sekarang
            </Button>
            
            </div>
        </nav>
        <div className="h-42" aria-hidden="true" />
        </>
    )
}

export default Navbar