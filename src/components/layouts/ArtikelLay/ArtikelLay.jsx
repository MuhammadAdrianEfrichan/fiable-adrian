import { artikelData } from "../../../data/artikelData"
import ArtikelCart from "../../ArtikelCart"

const ArtikelLay = ()=>{
    return(
        <section className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-6 px-5 py-16 sm:gap-8 sm:px-10 sm:py-24 lg:py-32.75">
            {artikelData.map((item) => {
        return <ArtikelCart key={item.id} item={item} />
        })}
            {artikelData.map((item) => {
        return <ArtikelCart key={item.id} item={item} />
        })}
        </section>
    )
}

export default ArtikelLay