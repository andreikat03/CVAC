# A.R.T. FUSION — raport QA final

Testat: **14 noiembrie 2026**. Pachet: `THE_APPLICATION_ART_FUSION_LAUNCH_READY.zip`.

## Modificări livrate
- Navigation Next/Back + progres păstrate; indicatorii au zone de click mai mari, utile pe mobil.
- Corectat comportamentul tastaturii: săgețile nu mai schimbă capitolul dacă utilizatorul interacționează cu un tab, video sau buton; taburile suportă ← / → / Home / End.
- Video DetailLane cu thumbnail real, fallback direct MP4 și pauză automată la schimbarea capitolului.
- Proiectul HypeCollections adăugat concis la „Proof of Work”, fără rezultate inventate.
- Ajustări pentru vizibilitatea focusului, contrastul textelor mici și fontul butoanelor.
- Favicon local și `noindex` pentru descurajarea indexării căutărilor, fără a promite confidențialitate.
- Păstrate cele cinci capitole, identitatea vizuală și campania independentă „Ce-ai schimba?”.

## PASS — verificări executate
- **25 randări reale în Chromium** (5 capitole × 5 viewporturi: 320×700, 390×844, 768×1024, 1366×768, 1920×1080), încărcate cu `page.set_content()` și CSS/JS/media incluse în pagina de test. Erori JavaScript: **0**.
- **Next / Back / puncte de navigare / tastatură**: treceri corecte; capitolul final ascunde Next.
- **Poster / Stories**: comutare și navigare prin tastatură funcționale.
- **MP4 H.264 1920×1080, 46 secunde**: metadate valide; browserul a ajuns în `readyState=4`; `play()` a progresat până la 0.85s fără eroare, iar schimbarea capitolului l-a pus pe pauză. Cadre video extrase separat cu FFmpeg.
- **CV și scrisoare PDF**: ambele intacte, câte o pagină, renderizate în imagini pentru inspecție.
- **Resurse locale**: toate referințele `src`/`href` către fișiere din pachet există; structură compatibilă cu rădăcina GitHub Pages.
- **Sintaxă JS**: `node --check wizard.js` PASS.
- **Buton Google Meet**: atributul `href` corespunde linkului furnizat; buton e-mail și documente prezente.
- **Fără scroll orizontal utilizabil** în primul ecran: SVG-ul decorativ depășește geometric containerul, dar este decupat prin `overflow-x:hidden`.

## NOT TESTED / limitări
- Navigarea reală prin HTTP în browserul automatizat a fost blocată de mediu (`ERR_BLOCKED_BY_ADMINISTRATOR`), chiar și prin server local. Capturile sunt randări **reale Chromium** cu resurse incluse în pagină, nu capturi ale unui deploy GitHub Pages.
- Nu s-a testat pe un telefon fizic; nu s-a testat funcționarea URL-urilor externe după click (Google Calendar poate avea propriile reguli de acces).
- Testarea autoplay/audio integrală pe mobile reale și verificarea redirect-urilor Google Meet rămân de făcut după publicare.
- Pe ecrane mici, capitolele cu text și media necesită **scroll vertical în interiorul etapei**, conform designului; butoanele Next/Back rămân fixe. Nu a fost observată decuparea conținutului principal fără posibilitatea de scroll.

## Simulare recruiter
- Cine este candidatul: clar din prima pagină; AIESEC la etapa a doua.
- Dovada: video DetailLane, proiect HypeCollections și propunerea creativă, etichetată corect.
- Contact: disponibil în final și CV-ul este accesibil și de la început.
- Limitare de conținut: fără fotografii/materiale AIESEC autentice suplimentare furnizate, portofoliul rămâne mai puternic pe partea digitală decât pe exemple de campanii implementate.
- Confirmarea eligibilității la rol (studii încheiate, date de început, prezență la birou) trebuie discutată direct cu A.R.T. FUSION.
