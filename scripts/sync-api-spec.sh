#!/usr/bin/env bash
# sync-api-spec.sh — Atualiza a referência da API publicada no site de docs.
#
# Por que existe: o site de docs publica SÓ a versão PÚBLICA do OpenAPI (sem os
# endpoints de gerência/cross-tenant). Essa versão é gerada a partir do spec
# interno completo do api-v2 e COPIADA para cá. Como o Cloudflare Pages só enxerga
# este repo (docs), a geração+cópia NÃO roda no build do CF — roda AQUI (local/CI),
# e o arquivo copiado é o que vai pro git e deploya.
#
# Fluxo:
#   api-v2/docs/openapi/openapi.yaml  (interno, completo)
#        └─ _gen-public.mjs  →  openapi.public.yaml  (sem gerência)
#                                   └─ (este script copia) →  docs/static/openapi/sl-api-v5.yaml
#                                                                  └─ Scalar em /api/  →  deploy
#
# Uso:
#   ./scripts/sync-api-spec.sh      # regenera, verifica e copia
#   depois: git add static/openapi/sl-api-v5.yaml && git commit && (merge p/ main = publica)
set -euo pipefail

API_REPO="${API_REPO:-/Users/tiagofelipe/src/sl/v5/api-v2}"
GEN="$API_REPO/docs/openapi/_gen-public.mjs"
PUBLIC_SPEC="$API_REPO/docs/openapi/openapi.public.yaml"
DEST="$(cd "$(dirname "$0")/.." && pwd)/static/openapi/sl-api-v5.yaml"

echo "1) Regenerando o spec público (remove gerência) ..."
[ -f "$GEN" ] || { echo "⛔ gerador não encontrado: $GEN"; exit 1; }
( cd "$API_REPO" && node docs/openapi/_gen-public.mjs )

echo "2) Verificação anti-gerência (deve ser 0) ..."
# Tokens de operationId (cliente_/console_/gerencia_) ancorados no campo "operationId"
# para NÃO casar com propriedades de schema de body (ex.: "cliente_id"). Os checks por
# path (/api/gerencia, /api/console, /api/clientes...) seguem sendo a proteção forte.
HITS=$(grep -cE '/api/console|/api/gerencia|"operationId": "(cliente|console|gerencia)_|/api/clientes|/api/planos|/api/servidores|/api/licencas|/api/notas-fiscais|/api/log/find|/g/command' "$PUBLIC_SPEC" || true)
if [ "$HITS" != "0" ]; then
  echo "⛔ ABORTADO: $HITS ocorrência(s) de endpoint de gerência no spec público. NÃO copiado."
  grep -nE '/api/console|/api/gerencia|/api/clientes|/api/planos|/api/servidores|/api/licencas|/api/notas-fiscais|/api/log/find|/g/command' "$PUBLIC_SPEC" | head
  exit 1
fi
echo "   OK: 0 endpoints de gerência."

echo "3) Copiando para o site de docs ..."
mkdir -p "$(dirname "$DEST")"
cp "$PUBLIC_SPEC" "$DEST"
echo "   $PUBLIC_SPEC -> $DEST"
echo
echo "Pronto. Revise e: git add static/openapi/sl-api-v5.yaml && git commit -m 'api: sync spec' "
echo "(publicar = merge na branch main; o CF Pages faz o deploy)."
