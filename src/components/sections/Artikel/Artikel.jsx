import { artikelData } from "../../../data/artikelData";
import ArtikelCart from "../../ArtikelCart";
import Button from "../../ui/Button";
import layananBg from "../../../assets/image/layananBg.png"


const Artikel = () => {
  return (
    <section className="bg-background px-14.75 py-32.75"
     style={{ backgroundImage: `url(${layananBg})`}}>
      <div className="flex items-center justify-center gap-3 mb-16">
        <span className="w-2 h-2 bg-oren rotate-45" />
        <span className="w-25 h-px bg-oren" />
        <h1 className="text-heading text-[55px] tracking-widest uppercase font-heading">
          Artikel
        </h1>
        <span className="w-25 h-px bg-oren" />
        <span className="w-2 h-2 bg-oren rotate-45" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {artikelData.map((item) => {
        return <ArtikelCart key={item.id} item={item} />
        })}
        <div className="">
            <Button className="uppercase text-paragraf cursor-pointer hover:text-white">selengkapnya</Button>
        </div>
      </div>
    </section>
  );
};

export default Artikel;