import { artikelData } from "../../../data/artikelData"
import ArtikelCart from "../../ArtikelCart"

const ArtikelLay = ()=>{
    return(
        <section className="flex flex-wrap gap-8 justify-center py-32.75">
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