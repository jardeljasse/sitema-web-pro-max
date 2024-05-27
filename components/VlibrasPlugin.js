"use client";

import { useEffect } from "react";

export default function VlibrasPlugin() {
  return (
    <>
      <div vw="" className="enabled">
        <div vw-access-button="" className="active"></div>
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      {/* <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script> */}
      <script src="/vlibras-plugin.js"></script>
      <script src="/vlibras-local.js"></script>
    </>
  );
}
