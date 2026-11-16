# QA — AF-V3-RC-20261115

## Modificări implementate
- Istoric capitole: `pushState` la navigare, `popstate` și `hashchange` pentru restaurare; inițializare `replaceState`.
- Indicator contextual de scroll în capitole lungi; ascuns când se ajunge la final.
- Zone de apăsare mai mari pentru punctele de progres pe desktop/mobil.
- Mini-plan demonstrativ pentru campania „Un bilet pentru alt final” (public, mesaj, distribuție, KPI); fără rezultate inventate.
- Finalul candidaturii reformulat pentru a evidenția experiența și motivația.
- Marcaje V2 eliminate din interfață; identificator V3 păstrat în meta și VERSION.txt.
- Menținute cele cinci capitole, designul, MP4, SVG-urile, CV-ul și scrisoarea.

## Testare efectuată
- `node --check wizard.js`: PASS.
- Chromium headless, 5 viewporturi: 320×700, 390×844, 768×1024, 1366×768, 1920×1080.
- 50/50 verificări automate PASS: inițializare, Next, schimbări de hash, navigare directă, interacțiune bilet, tab Stories, lipsa overflow-ului orizontal și erori JS.
- Testele Chromium au folosit `page.set_content` cu CSS/JS injectate local, deoarece navigarea HTTP către localhost este blocată în mediu. Prin urmare nu reprezintă un test end-to-end al deploy-ului.
- `history.back()`/`history.forward()` real în browser, linkurile externe, fonturile Google și redarea video după publicare: NECONFIRMATE.
- Telefon fizic, cititor de ecran și GitHub Pages: NECONFIRMATE.

## Verificări înainte de publicare
1. Confirmă denumirea postului („Coordonator Comunicare”, „Comunicare part-time”) în raport cu anunțul actual.
2. Confirmă disponibilitatea pentru relocare din ianuarie 2027.
3. Verifică adresa de e-mail, telefonul și linkul Google Calendar printr-un test real.
4. Publică întregul conținut al arhivei în rădăcina GitHub Pages; verifică toate cele cinci capitole și PDF-urile.
5. Testează Back/Forward, videoclipul, indicatorul de scroll și butoanele pe un telefon fizic.

## Decizii
- `noindex,nofollow` păstrat intenționat pentru o candidatură personală transmisă direct; elimină-l doar dacă dorești indexare publică.
- PDF-urile originale nu au fost modificate; orice schimbare a experienței profesionale trebuie validată de candidat.
