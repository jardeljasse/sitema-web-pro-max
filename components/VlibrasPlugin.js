
export default function VlibrasPlugin() {
  return (
    <div>
      <div vw className="enabled bg-red-800 w-[100px]">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>

      <script src="../public/vlibras-local.js"></script>
    </div>
  );
}
