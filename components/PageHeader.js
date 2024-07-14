
export default function PageHeader({ title, children: description }) {

    return (
        <header>
            <h2 className="font-bold text-skin-cl500 sm:text-base md:text-lg lg:text-lg ">{title}</h2>
            <p>{description}</p>
        </header>
    )
}