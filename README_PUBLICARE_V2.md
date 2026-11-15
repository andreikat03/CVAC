# Actualizează repository-ul GitHub Pages existent — V2

Nu crea un repository nou dacă ai deja un URL public pentru aplicație.

1. **Descarcă și dezarhivează** `THE_APPLICATION_ART_FUSION_V2_FIXED.zip`.
2. **Deschide repository-ul existent**, în ramura și directorul selectate în GitHub → **Settings → Pages** (uzual `main` și `/(root)`).
3. Încarcă la rădăcină **conținutul** arhivei, NU un folder exterior numit `THE_APPLICATION...` și nici fișierul ZIP ca atare. Fișierele esențiale sunt `index.html`, `style.css`, `wizard.css`, `wizard.js`, `assets/` și `docs/`.
4. Înlocuiește fișierele existente cu cele din această versiune. Dacă GitHub web nu înlocuiește corect folderele, folosește GitHub Desktop: copiază conținutul peste fișierele locale și fă Commit + Push.
5. Opțional, șterge din repository resursele **vechi nefolosite**, după verificarea paginii noi. Nu șterge `assets/` sau `docs/` actuale.
6. Așteaptă ca deploy-ul să se încheie în tabul **Actions** / **Settings → Pages**. Deschide URL-ul public și fă hard refresh (`Ctrl + Shift + R`).
7. **Dovada versiunii:** în partea dreaptă sus trebuie să apară **`V2 · 15.11`**. În sursa paginii (`Ctrl + U`) trebuie să existe `AF-V2-20261115` și textul `Un bilet pentru alt final`.
8. **Verifică la URL-ul public:** start fără scroll, toate etapele, biletul care își schimbă rolul, 3 Story-uri, redarea videoclipului DetailLane, linkurile PDF și butonul Google Meet.
9. Dacă vezi vechiul AIESEC/Talk→Listen→Connect sau campania „Ce-ai schimba?”, nu ai publicat încă noul `index.html` în directorul potrivit. Verifică branch-ul, folderul Pages și data ultimului deploy. Dacă apare versiunea V2, dar unele resurse nu funcționează, deschide DevTools → Network și caută erori 404 (mai ales pentru `assets/detaillane-demo-v2.mp4`).

**Nu am publicat sau trimis candidatura.** Actualizarea repository-ului și testul de pe GitHub Pages trebuie executate de tine sau cu acordul tău explicit.
