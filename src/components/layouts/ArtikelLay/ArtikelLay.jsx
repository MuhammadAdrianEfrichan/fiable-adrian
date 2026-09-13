import { artikelData } from "../../../data/artikelData"
import ArtikelCart from "../../ArtikelCart"

const ArtikelLay = ()=>{
    const articles = [...artikelData, ...artikelData]

    return(
        <section className="bg-[#f5f5f5] px-5 py-16 sm:px-10 sm:py-24 lg:px-14.75 lg:py-32.75">
            <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {articles.map((item, index) => (
                    <ArtikelCart key={`${item.id}-${index}`} item={item} />
                ))}
            </div>
        </section>
    )
}

export default ArtikelLay