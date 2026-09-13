import { artikelData } from "../../../data/artikelData";
import ArtikelCart from "../../ArtikelCart";
import Button from "../../ui/Button";
import layananBg from "../../../assets/image/LayananBg.png"
import { useNavigate } from "react-router-dom"


const Artikel = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-background bg-cover px-5 py-16 sm:px-10 sm:py-24 lg:px-14.75 lg:py-32.75"
     style={{ backgroundImage: `url(${layananBg})`}}>
      <div className="mb-10 flex items-center justify-center gap-3 sm:mb-16">
        <span className="h-2 w-2 rotate-45 bg-oren" />
        <span className="hidden h-px w-25 bg-oren sm:block" />
        <h1 className="text-center font-heading text-4xl uppercase tracking-widest text-heading sm:text-[55px]">
          Artikel
        </h1>
        <span className="hidden h-px w-25 bg-oren sm:block" />
        <span className="h-2 w-2 rotate-45 bg-oren" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {artikelData.map((item) => {
        return <ArtikelCart key={item.id} item={item} />
        })}
        <div className="">
            <Button onClick={() => navigate("/artikel")} className="cursor-pointer uppercase text-paragraf hover:text-white">selengkapnya</Button>
        </div>
      </div>
    </section>
  );
};

export default Artikel;