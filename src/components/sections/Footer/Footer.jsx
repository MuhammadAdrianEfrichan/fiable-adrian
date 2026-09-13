import fiableFooter from "../../../assets/icons/fiableFooter.svg"
import paradiLogo from "../../../assets/icons/paradiLogo.svg"
import linkindFooter from "../../../assets/icons/linkindFooter.svg"
import igFooter from "../../../assets/icons/igFooter.svg"

const Footer =()=>{
    return(
        <footer className="footer bg-footer text-white font-archivo">
            <div className="mx-auto grid h-auto w-[calc(100%-40px)] max-w-7xl grid-cols-1 items-center gap-8 py-10 sm:grid-cols-2 lg:h-98.75 lg:w-[calc(100%-180px)] lg:grid-cols-[minmax(0,1fr)_200px_404px] lg:gap-x-12 lg:py-0">
                <div className="self-center sm:col-span-2 lg:col-span-1">
                    <img className="block w-full max-w-75.75" src={fiableFooter} alt="Fiable Law Office" />
                    <div className="mt-9.5 flex items-center gap-4" aria-label="Media sosial Fiable Law Office">
                        <a className="inline-flex" href="#" aria-label="Instagram Fiable Law Office">
                            <img className="h-9 w-9" src={igFooter} alt="" />
                        </a>
                        <a className="inline-flex" href="#" aria-label="LinkedIn Fiable Law Office">
                            <img className="h-9 w-9" src={linkindFooter} alt="" />
                        </a>
                        <img className="ml-0.75 w-47.75" src={paradiLogo} alt="Peradi" />
                    </div>
                </div>

                <nav className="flex flex-col self-center" aria-label="Navigasi footer">
                    <h2>HALAMAN</h2>
                    <a href="#beranda">Beranda</a>
                    <a href="#tentang-kami">Tentang Kami</a>
                    <a href="#layanan">Layanan</a>
                    <a href="#tim-kami">Tim Kami</a>
                    <a href="#kontak">Kontak</a>
                </nav>

                <address className="flex flex-col self-center text-sm sm:text-base" id="kontak">
                    <h2>INFO KANTOR</h2>
                    <p>Jalan Padang Pasir IX No. 55,<br />Kel. Padang Pasir, Kec. Padang<br />Barat, Kota Padang,<br />Provinsi Sumatera Barat</p>
                    <a href="mailto:info@fiablelawyers.com">info@fiablelawyers.com</a>
                    <a href="tel:085375917227">085375917227</a>
                </address>
            </div>
            <div className="flex min-h-19.25 items-center justify-center bg-btm-footer px-5 py-5 text-center">
                <p className="text-sm">&copy; 2024 Fiable Law Office | Powered by PT Metro Indonesian Software</p>
            </div>
        </footer>
    )
}

export default Footer