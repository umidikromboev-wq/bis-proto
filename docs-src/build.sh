#!/usr/bin/env bash
# Сборка PDF-материалов из HTML-исходников рядом.
#
# Исходники лежат в репозитории намеренно: первая версия файлов собиралась во
# временной папке, и правка текста означала вёрстку заново. Теперь правится
# HTML, а PDF пересобирается этой командой.
#
#   bash docs-src/build.sh
#
# Требуется Google Chrome (headless print-to-pdf) и установленный шрифт Manrope.

set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$SRC/../public/docs/uz"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

mkdir -p "$OUT"

render() {
  local html="$1" pdf="$2"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --allow-file-access-from-files \
    --print-to-pdf="$OUT/$pdf" "file://$SRC/$html" 2>/dev/null
  echo "→ public/docs/uz/$pdf"
}

render uz-chek-list.html bis-joriy-etishga-tayyorlik-chek-listi.pdf
render uz-guide.html     bis-business-one-yoki-s4hana.pdf
render uz-smeta.html     bis-smeta-tuzilmasi.pdf
