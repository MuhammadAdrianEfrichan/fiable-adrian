import galeriSatu from "../../../assets/image/galeri/galeriSatu.png"
import galeriDua from "../../../assets/image/galeri/galeriDua.png"
import galeriTiga from "../../../assets/image/galeri/galeriTiga.png"
import galeriHero from "../../../assets/image/galeriHero.png"
import galeri from "../../../assets/icons/galeri.svg"

const GalerryData = [
    {
        id:1,
        photo:galeriSatu,
    },
    {
        id:2,
        photo:galeriDua,
    },
    {
        id:3,
        photo:galeriTiga,
    }
]


const Galerry = ()=>{
    return <section className="relative flex min-h-[32rem] flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat px-5 py-16 sm:px-10 sm:py-24 lg:h-161.25 lg:gap-15 lg:px-14.75 lg:py-32.75"
            style={{ backgroundImage: `url(${galeriHero})` }}>
                <img src={galeri} alt="" className="" />
                <div className="grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-3">
                    {GalerryData.map((item)=>{
                        return <img key={item.id} src={item.photo} alt="foto" />
                    })}
                </div>
    </section>
}

export default Galerry