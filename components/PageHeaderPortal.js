
export default function PageHeaderPortal({title, children: description}) {
    return(
        <div>
            <h1 className="text-skin-cl500 font-bold text-5xl   relative mt-4">{title}<span className="title-underline absolute"></span></h1>
            <p className="text-xl mt-7 text-r">
                {description}
            </p>
        </div>
    )
}
