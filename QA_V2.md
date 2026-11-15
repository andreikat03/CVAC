# THE APPLICATION.exe — A.R.T. FUSION V2 · QA & decizii creative

**Release:** `AF-V2-20261115` · **Sursa:** `THE_APPLICATION_ART_FUSION_LAUNCH_READY.zip`

## Probleme raportate și corectate

1. **Hero desktop prea mare:** titlu micșorat, textul și ilustrația mutate în cadru; CTA vizibil fără scroll la 1366×768 și 1920×1080, dar și la 320×700/390×844.
2. **Experiență incompletă:** cardul verde cu toate cele trei etape AIESEC (proiecte educaționale pentru școli/SDG, B2B, recrutare și coordonare). Sunt menționate separat animatorul pentru copii, ucenicia în mecanică și experiența în consultanță financiară, fără durate inventate.
3. **Video negru:** nou poster JPG extras și compus dintr-un cadru real al videoclipului (secunda 12), MP4 H.264/yuv420p cu atom `moov` la început (`faststart`) și **nume nou de fișier** (`detaillane-demo-v2.mp4`), link separat de redare. În browserul de test, video-ul s-a redat efectiv.
4. **Campanie generică:** au fost eliminate din aplicație „Tinerii au o voce. Cine o ascultă?” și „Ce-ai schimba?”. Campania nouă **„Un bilet pentru alt final”** este legată de Teatrul Forum: un bilet interactiv se schimbă din spectator în participant, cu un poster și trei Story-uri SVG originale.
5. **Modificări neafișate în versiunea utilizatorului:** capturile trimise conțin texte care NU sunt prezente în arhiva de intrare `LAUNCH_READY`; sursa diferă de ceea ce utilizatorul vedea. Fără URL-ul public sau acces la repository nu se poate determina exact dacă cauza este o publicare veche, un director greșit ori cache-ul. Noua versiune are identificator **V2 · 15.11** în antet și `VERSION.txt`; CSS/JS au query string de versiune, iar video-ul are nume nou.

## Alegerea conceptului — trei direcții evaluate

- **Scaunul gol** — vizual clar, dar poate părea o campanie civică generică.
- **Ultima replică nu e scrisă** — poetic, dar mai puțin concret și interactiv.
- **Un bilet pentru alt final** — ales pentru că transformă rolul spectatorului printr-o interacțiune inteligibilă și este fidel metodologiei Teatrului Forum.

**Bază verificată:** A.R.T. FUSION descrie proiectul „Forum Theatre – as a tool to stimulate civic involvement” și faptul că spectatorii pot interveni în scena prezentată: https://en.artfusion.ro/portfolio/forum-theatre-during-the-pandemic/ . Propunerea din aplicație este independentă, NU oficială și NU atribuie organizației rezultatele demonstrate fictiv.

## Rezultate QA

| Verificare | Rezultat | Detalii |
|---|---|---|
| Sintaxa JavaScript | **PASS** | `node --check wizard.js` |
| Cinci ecrane Next/Back | **PASS** | navigare Playwright testată, inclusiv la 390px |
| Capturi desktop/tabletă/mobil | **PASS** | 25 capturi, 5 ecrane × 320×700, 390×844, 768×1024, 1366×768, 1920×1080 |
| Hero CTA fără scroll | **PASS** | la toate cele 5 dimensiuni; raportare din DOM |
| Ilustrația desktop încadrată | **PASS** | verificată vizual la 1366 și 1920 px |
| Poster/Stories | **PASS** | ambele taburi funcționează; 3/3 imagini se încarcă la toate cele 5 dimensiuni |
| Schimbarea rolului biletului | **PASS** | click, `aria-pressed`, imagine și mesaj actualizate |
| Video decodabil/redat | **PASS** | browserul Chromium: `readyState=4`, `videoWidth=1920`, `currentTime>1s`, `paused=false` |
| PDF-uri | **PASS** | CV și scrisoare, câte o pagină; linkuri interne valide |
| Servire HTTP a fișierelor | **PASS** | răspuns 200 pentru HTML, CSS, JS, MP4, JPG, SVG, PDF |
| Google Meet și contact | **PASS** | adresele/linkurile există și au sintaxă validă în HTML; destinația externă nu a fost deschisă |
| Zero erori JS în testele Playwright | **PASS** | 5 viewports; niciun `pageerror` |
| Publicare GitHub Pages | **NOT TESTED** | nu s-a publicat; nu avem repository/URL de verificat |
| Navigare HTTP în browser | **NOT TESTED** | `Page.goto(http://localhost/...)` și `file://` blocate de mediul de execuție; pagina a fost testată cu `page.set_content`, cu CSS, JS, SVG și MP4 incluse byte-for-byte |
| Test pe telefon fizic | **NOT TESTED** | capturi de viewport mobil în Chromium, nu dispozitiv mobil real |
| Încărcarea fonturilor Google online | **NOT TESTED** | capturile automate folosesc fonturile fallback; online fonturile pot avea mici diferențe de spațiere |

**Observație:** pașii 3 și 4 pot avea scroll interior pe telefoane mici — păstrăm navigarea Next/Back fixă, fără scroll între capitole. Pe desktop 1366×768, etapa campaniei se încadrează fără scroll.
