
export default function PageHeader({title, children: description}){
   
    return(
        <header>
        <h2 className="text-2xl font-bold text-skin-cl500">{title}</h2>
        <p>{description}</p>
        </header>  
    )
}