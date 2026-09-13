

const ArtikelCart = ({item})=>{
    return ( 
    <div className="flex h-auto min-h-96 w-full max-w-128.25 flex-col overflow-hidden bg-white font-artikel lg:h-153 lg:min-h-0">
        <div className="">
        <img src={item.photo} alt={item.judul} className="w-full object-cover" />
        <h1 className="p-5 text-xl font-bold sm:text-[28px]">{item.judul}</h1>
        <p className="px-5 pb-5 text-lg font-normal text-paragraf sm:text-[24px]">{item.keterangan}</p>
        </div>

    </div>
    )
}

export default ArtikelCart