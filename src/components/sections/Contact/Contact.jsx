import location from "../../../assets/icons/location.svg"
import email from "../../../assets/icons/email.svg"
import telepon from "../../../assets/icons/telepon.svg"

const Contact = () => {
    return (
        <section className="bg-background px-5 py-16 font-archivo sm:px-10 lg:px-14.75 lg:py-24">
            <div className="mx-auto grid max-w-249.75 items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
                <div className="h-95 overflow-hidden bg-[#e7edf1] sm:h-110 lg:h-125">
                    <iframe
                        title="Lokasi Fiable Law Office"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=100.345%2C-0.955%2C100.375%2C-0.925&layer=mapnik&marker=-0.94%2C100.36"
                        className="h-full w-full border-0"
                        loading="lazy"
                    />
                </div>

                <div className="flex min-h-95 flex-col justify-center gap-9 bg-white px-8 py-10 sm:min-h-110 sm:px-12 lg:min-h-125 lg:px-16">
                    <div className="flex items-start gap-6">
                      
                        <img src={location} alt="" />
                        <address className="not-italic text-lg leading-[1.35] text-black sm:text-xl">
                            Jalan Padang Pasir IX No. 55,<br />
                            Kel. Padang Pasir, Kec. Padang<br />
                            Barat, Kota Padang,<br />
                            Provinsi Sumatera Barat
                        </address>
                    </div>

                    <a className="flex items-center gap-6 text-lg text-black transition-colors hover:text-oren sm:text-xl" href="mailto:info@fiablelawyers.com">
                        <img src={email} alt="" />
                        info@fiablelawyers.com
                    </a>

                    <a className="flex items-center gap-6 text-lg text-black transition-colors hover:text-oren sm:text-xl" href="tel:085375917227">
                        <img src={telepon} alt="" />
                        085375917227
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact