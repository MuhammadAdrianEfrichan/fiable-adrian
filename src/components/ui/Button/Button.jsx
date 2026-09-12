
const variantClasses = {
  primary: "bg-oren text-biru hover:bg-orange-600 shadow-[0_8px_18px_rgba(249,160,0,0.35)]",
  secondary: "bg-footer text-oren hover:bg-navy-800",
  link: "text-oren hover:underline p-0",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-9 py-4 text-lg",
};

const Button = (props)=>{
  const {children, variant = "primary", size = "md", className = "", onClick} = props;
    return (
     <button type="button" onClick={onClick} className={`${sizeClasses[size]} ${variantClasses[variant]} ${className} rounded-md font-bold transition-all duration-200`}>
            {children}
        </button>
    )
}

export default Button 