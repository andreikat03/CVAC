# THE APPLICATION.exe — A.R.T. FUSION / MASTER FINAL

## Ce am schimbat
1. Am păstrat aplicația originală cu 5 ecrane și navigare Next / Back, fără scroll între capitole.
2. Am transformat capitolul „One Idea” în două moduri interactive: **Poster** și **Stories**, fără capitole noi.
3. Am scurtat introducerea microcampaniei și am păstrat marcajul explicit „propunere personală, neoficială”.
4. Am adăugat acces la CV și scrisoare în ultimul ecran; CV-ul rămâne accesibil și din introducere.
5. Am îmbunătățit spațierea, stările de focus, responsive CSS și suportul `prefers-reduced-motion`.

## Cercetare / autenticitate
- A.R.T. FUSION confirmă pe https://en.artfusion.ro/projects/ proiectul „Dialogue for the Future!” ca spațiu de dialog și reprezentare între tineri și autorități.
- Informațiile despre AIESEC, DetailLane și studiile candidatului provin din materialele furnizate, nu dintr-o verificare externă independentă.
- Nu s-au adăugat realizări, angajări sau campanii oficiale fictive.
- Nu am inclus HypeCollections ca proiect demonstrat în lipsa unor materiale verificabile în arhiva sursă.

## Teste efectuate
- `node --check wizard.js` și `node --check app.js`: PASS.
- Verificare structurală HTML: exact 5 capitole, 5 controale de progres și 2 taburi în microcampanie: PASS.
- Toate țintele locale `href` și `src`: PASS.
- Toate imaginile PNG: decodare/verificare PASS.
- PDF CV și scrisoare: câte o pagină, fișiere valide: PASS.
- Video demo DetailLane: `ffprobe` confirmă 46 secunde: PASS.
- Contactul și relocarea din ianuarie 2027: prezente: PASS.

## Teste neefectuate / limitări
- Chromium/Playwright blochează `file://` și `data:` cu `ERR_BLOCKED_BY_ADMINISTRATOR`, deci **nu pot certifica testarea vizuală reală** la 320, 390, 768, 1366 și 1920 px.
- Nu sunt incluse capturi de website noi, deoarece nu pot fi generate ca randări reale în acest mediu.
- Nu s-a verificat redarea video sau animațiile într-un browser real.
- Linkurile externe trebuie confirmate după publicare.
- Condițiile de eligibilitate privind studiile și domiciliul rămân de clarificat cu angajatorul.

## Autocritică
- Recruiter: candidatura e scurtă, dar materialele AIESEC autentice ar întări dovada experienței.
- Creative Director: ideea e distinctă și coerentă; două formate de prezentare sunt suficiente.
- UX: navigarea e clară în cod, dar testarea efectivă pe dispozitive rămâne obligatorie.

## Publicare GitHub Pages
1. Creează un repository public pe GitHub, ex. `art-fusion-application`.
2. Încarcă **conținutul ZIP-ului**, nu arhiva ZIP, în rădăcina repository-ului.
3. Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
4. Deschide `https://USERNAME.github.io/art-fusion-application/`.
5. Testează pe telefon și PC: Start, Next/Back, punctele de progres, taburile Poster/Stories, CV, scrisoare, e-mail și video.
6. Adaugă URL-ul public în CV înainte de trimiterea candidaturii.
7. Nu publica și nu trimite candidatura fără acordul candidatului.
