import heading from "../../assets/image/heading.png"

const Head = (props)=>{
    const {children} = props;

    return (
        <div className="relative flex min-h-52 w-full items-center justify-center bg-biru bg-cover bg-center bg-no-repeat px-5 py-12 sm:min-h-64 lg:h-83.75"
        style={{ backgroundImage: `url(${heading})` }}>
            <h1 className="text-center font-heading text-4xl uppercase text-white sm:text-6xl lg:text-[80px]">{children}</h1>
        </div>
    )

}

export default Head