export default function PageHeaderPortal({ title, children: description }) {
  return (
    <div>
      {/* <h1 className="text-skin-cl500 font-bold text-5xl   relative"> */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-2 text-skin-cl500">
        {title}
        <span className="title-underline absolute"></span>
      </h1>
      <p className="text-xl mt-7 text-r">{description}</p>
    </div>
  );
}
