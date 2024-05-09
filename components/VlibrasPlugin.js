
export default function VlibrasPlugin({title}) {
  return (
    <div>
      <div vw className="enabled bg-red-800 w-[100px]">
        <div>
          {title}
        </div>
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>

      <script src="/vlibras-local.js"></script>
    </div>
  );
}
