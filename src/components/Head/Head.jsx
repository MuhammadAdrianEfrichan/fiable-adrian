import heading from "../../assets/image/heading.png"

const Head = (props)=>{
    const {children} = props;

    return (
        <div className="relative  w-full bg-biru h-83.75 bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${heading})` }}>
            <h1 className="font-heading text-[80px] uppercase text-white">{children}</h1>
        </div>
    )

}

export default Head