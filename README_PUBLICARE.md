# THE APPLICATION.exe — AF-FINAL-20261117

**Este un website static, nu un program care trebuie instalat.**

## Conținutul corect al proiectului
```
CVAC/
├── index.html
├── style.css
├── wizard.css
├── wizard.js
├── assets/
│   ├── detaillane-demo-v2.mp4
│   ├── detaillane-poster-v2.jpg
│   ├── favicon.svg
│   └── (restul imaginilor și SVG-urilor)
├── docs/
│   ├── CV_Andrei_Catana_ART_FUSION.pdf
│   └── Scrisoare_Motivatie_ART_FUSION.pdf
└── (fișierele README și rapoartele QA)
```

## Publicare în https://github.com/andreikat03/CVAC
1. Descarcă și extrage `THE_APPLICATION_ART_FUSION_FINAL.zip`.
2. În GitHub, verifică ramura `main`. Încarcă **conținutul arhivei**, nu arhiva ZIP ca atare. Păstrează obligatoriu directoarele `assets/` și `docs/`.
3. În interfața GitHub poți folosi **Add file → Upload files** și poți trage fișierele/directoarele din folderul extras. Verifică, înainte de commit, că GitHub afișează căile `assets/detaillane-demo-v2.mp4` și `docs/CV_Andrei_Catana_ART_FUSION.pdf`.
4. Apasă **Commit changes**. Dacă vrei să folosești Git local, copiază fișierele în checkout-ul CVAC și rulează `git add -A`, `git commit -m "Final A.R.T. Fusion CV"`, `git push origin main`.
5. În **Settings → Pages**, folosește **Deploy from a branch**, ramura `main`, directorul `/(root)`.
6. Verifică în mod privat / incognito, pe PC și pe telefon:
   - `https://andreikat03.github.io/CVAC/`
   - `https://andreikat03.github.io/CVAC/#proiecte`
   - `https://andreikat03.github.io/CVAC/assets/detaillane-demo-v2.mp4`
   - `https://andreikat03.github.io/CVAC/docs/CV_Andrei_Catana_ART_FUSION.pdf`
   - `https://andreikat03.github.io/CVAC/docs/Scrisoare_Motivatie_ART_FUSION.pdf`
7. Verifică navigarea, posterul, taburile, videoclipul de la prima vizită (fără refresh), apoi linkul Google Meet cu un cont de test.

### Important despre repository-ul actual
În momentul comparației, fișierele media și PDF-urile erau prezente la rădăcina repository-ului. **Nu încerca să repari doar un link**: publică structura de directoare din acest ZIP. Fișierele vechi de la rădăcină pot rămâne temporar, dar aplicația finală folosește `assets/` și `docs/`.

### Note
- Nu există build npm, instalator sau server backend. Se poate deschide local cu `index.html`, dar pentru un test concludent al redării video și linkurilor recomand GitHub Pages.
- Linkul Google Meet și denumirea exactă a rolului au nevoie de confirmare manuală înainte de trimitere.
- Raportul QA este transparent privind testele care nu au putut fi executate în site-ul public.
