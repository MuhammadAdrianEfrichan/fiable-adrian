import fiableFooter from "../../../assets/icons/fiableFooter.svg"
import paradiLogo from "../../../assets/icons/paradiLogo.svg"
import linkindFooter from "../../../assets/icons/linkindFooter.svg"
import igFooter from "../../../assets/icons/igFooter.svg"

const Footer =()=>{
    return(
        <footer className="footer bg-footer text-white font-archivo">
            <div className="mx-auto grid h-98.75 w-[calc(100%-180px)] grid-cols-[minmax(0,1fr)_200px_404px] items-center gap-x-12 max-[700px]:h-auto max-[700px]:w-[min(calc(100%-40px),420px)] max-[700px]:grid-cols-2 max-[700px]:gap-x-7 max-[700px]:gap-y-8.5 max-[700px]:py-9.5">
                <div className="self-center max-[700px]:col-span-2">
                    <img className="block w-75.75 max-[700px]:w-full max-[700px]:max-w-75.75" src={fiableFooter} alt="Fiable Law Office" />
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

                <address className="flex flex-col self-center" id="kontak">
                    <h2>INFO KANTOR</h2>
                    <p>Jalan Padang Pasir IX No. 55,<br />Kel. Padang Pasir, Kec. Padang<br />Barat, Kota Padang,<br />Provinsi Sumatera Barat</p>
                    <a href="mailto:info@fiablelawyers.com">info@fiablelawyers.com</a>
                    <a href="tel:085375917227">085375917227</a>
                </address>
            </div>
            <div className="flex h-19.25 items-center justify-center bg-btm-footer px-5 max-[700px]:min-h-19.25 max-[700px]:py-5">
                <p>&copy; 2024 Fiable Law Office | Powered by PT Metro Indonesian Software</p>
            </div>
        </footer>
    )
}

export default Footer