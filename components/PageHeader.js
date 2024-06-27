
export default function PageHeader({title, children: description}){
   
    return(
        <header>
        <h2 className="text-2xl font-bold text-skin-cl500
        sm:text-base md:text-lg lg:text-xl xl:text-2xl">{title}</h2>
        <p>{description}</p>
        </header>  
    )
}