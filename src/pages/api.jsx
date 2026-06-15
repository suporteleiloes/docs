import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Referência da API renderizada com Scalar, DENTRO do SPA do Docusaurus
// (rota /api). Assim o clique no menu não dá 404 e o "voltar" do navegador
// funciona. Serve só o spec PÚBLICO filtrado (sem endpoints de gerência).
function ScalarRef() {
  useEffect(() => {
    const SCRIPT = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference';
    // remove instância anterior (re-navegação) e re-injeta pra reinicializar
    document.getElementById('sl-scalar-script')?.remove();
    const s = document.createElement('script');
    s.id = 'sl-scalar-script';
    s.src = SCRIPT;
    s.async = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, []);
  return (
    <div
      id="api-reference"
      data-url="/openapi/sl-api-v5.yaml"
      data-configuration='{"theme":"default","hideDownloadButton":false}'
    />
  );
}

export default function ApiPage() {
  return (
    <Layout title="API" description="Referência da API do ERP Suporte Leilões (TI do leiloeiro)" noFooter>
      <BrowserOnly fallback={<div style={{ padding: 48, textAlign: 'center' }}>Carregando referência da API…</div>}>
        {() => <ScalarRef />}
      </BrowserOnly>
    </Layout>
  );
}
