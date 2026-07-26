# Исходники PDF-материалов

Лид-магниты из блока «заберите материалы без разговора» (`src/content/**/playbook.ts`).

```
docs-src/
├── pdf.css            общий слой: токены сайта, A4, печатные стили
├── uz-chek-list.html  Joriy etishga tayyorlik: 12 band
├── uz-guide.html      Business One yoki S/4HANA
├── uz-smeta.html      Joriy etish smetasining tuzilmasi
└── build.sh           HTML → public/docs/uz/*.pdf
```

Сборка:

```bash
bash docs-src/build.sh
```

Требуется Google Chrome и установленный шрифт Manrope (`~/Library/Fonts`).

Русские файлы в `public/docs/*.pdf` собраны раньше во временной папке, их
HTML-исходники не сохранились. При следующей правке русской версии её нужно
пересобрать по этому же шаблону — вёрстка страниц совпадает, отличается только
текст и ссылки (`/uz#lead` вместо `/#lead`).
