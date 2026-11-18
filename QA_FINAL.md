# QA — două idei pentru A.R.T. FUSION (18 noiembrie 2026)

## Rezultat

**36 din 36 verificări automatizate PASS**, pe viewport-uri 1440×900, 390×844 și 320×680.

Verificări: cinci etape păstrate, navigare către secțiunea de idei, două taburi accesibile, încărcare bonuri, comutarea proiectelor, actualizarea cifrelor și surselor, schimbarea între cele două idei, absența overflow-ului orizontal, Next/Back, zero excepții JavaScript.

Asset-urile relative ale pachetului au fost verificate static. `node --check wizard.js` trece.

## Limitarea mediului de test

Chromium blochează în acest mediu atât încărcarea `file://`, cât și navigarea normală locală. Pentru a testa comportamentul, HTML-ul a fost încărcat direct în pagină, CSS/JS au fost injectate din fișierele reale, iar cele trei PNG-uri au fost injectate ca data URI **doar în fixture-ul QA**. Site-ul livrat păstrează referințele reale către `assets/` și `docs/`. Nu am testat un deploy live sau Safari/iPhone real.

## Observații

- Campania #1 este **exclusiv pentru social media**: carusele, reel-uri, stories despre proiecte și rezultate documentate.
- Butonul din macheta de website pentru Ideea #2 este doar vizual, fără să simuleze un contact oficial.
- Bonurile sunt demo și au surse; nu atribuie impact social nedemonstrat.
- CV-ul PDF și scrisoarea PDF nu au fost modificate; schimbările sunt în CV-ul interactiv.
- Nu au fost publicate modificări pe GitHub Pages.
