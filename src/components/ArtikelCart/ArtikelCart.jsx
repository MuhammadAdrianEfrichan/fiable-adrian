

const ArtikelCart = ({item})=>{
    return ( 
    <div className="w-128.25 h-153 flex flex-col font-artikel bg-white">
        <div className="">
        <img src={item.photo} alt={item.judul} className="w-full object-cover" />
        <h1 className="text-[28px] font-bold p-5">{item.judul}</h1>
        <p className="text-[24px] px-5 font-normal text-paragraf">{item.keterangan}</p>
        </div>

    </div>
    )
}

export default ArtikelCart