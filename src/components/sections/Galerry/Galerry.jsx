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
    return <section className="relative  px-14.75 py-32.75 bg-cover bg-center bg-no-repeat h-161.25 flex flex-col justify-center items-center gap-15"
            style={{ backgroundImage: `url(${galeriHero})` }}>
                <img src={galeri} alt="" className="" />
                <div className="flex gap-5 h-full justify-center items-center">
                    {GalerryData.map((item)=>{
                        return <img key={item.id} src={item.photo} alt="foto" />
                    })}
                </div>
    </section>
}

export default Galerry