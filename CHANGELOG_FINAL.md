# CHANGELOG — THE APPLICATION.exe · AF-FINAL-20261117

Sursă: arhiva originală `THE_APPLICATION_ART_FUSION_V3_RELEASE_CANDIDATE.zip`.
Identitate vizuală: Soft Slate, cinci capitole, stil editorial și interacțiunile posterului păstrate.

## `index.html`
- Capitolul „Despre”: mențiune naturală a experienței B2B (~6 luni), colaborării internaționale și contribuției echipei la relocarea a 3 persoane; prezentarea pentru ~200 de participanți a fost păstrată.
- Capitolul „Proiecte”: explică problema abordată de DetailLane, demonstrarea produsului către firme și feedbackul utilizat.
- Playerul video primește un ID stabil, surse declarate în `data-*` pentru inițializare la afișarea capitolului, `preload="none"`, link de rezervă și mesajul solicitat: „Videoclipul nu pornește? Reîncarcă pagina și încearcă din nou.”
- Capitolul „Idee”: mini-strategie completată cu problema de comunicare, acțiunea așteptată de la public și justificarea conceptului de participare.
- Ultimul capitol: CTA și motivație orientate către contribuția la organizație; București/ianuarie 2027 menținute.
- URL-urile CSS/JS folosesc versiunea `AF-FINAL-20261117` pentru invalidarea cache-ului la publicare.

## `wizard.js`
- Videoclipul își primește sursa și execută `load()` **după** ce secțiunea „Proiecte” devine vizibilă, inclusiv când pagina pornește cu `#proiecte`.
- Dacă `assets/detaillane-demo-v2.mp4` dă eroare, se încearcă o singură dată `detaillane-demo-v2.mp4` pentru repository-uri cu fișierele publicate direct în rădăcină; actualizează și linkul alternativ.
- La erori persistente apare un mesaj scurt, accesibil prin `role=status`.
- Scroll hint-ul se mută în bara de navigare, nu mai acoperă video sau campania.
- Restul fluxului Next/Back, URL hash, poster, taburi și oprirea video la plecare au rămas active.

## `wizard.css`
- Textul de asistență video și mesajele de stare au stil discret.
- Indicatorul de scroll a fost mutat în partea de jos a barei de navigare pe mobil și desktop.
- Mini-strategia conține o explicație scurtă, fără elemente decorative noi.

## `VERSION.txt`, `README_PUBLICARE.md`, `QA_FINAL.md`, `QA_RESULTS.json`
- Identificatorul de release actualizat și documentația de publicare și QA refăcută.
- Fișierele vechi de raportare V3 au fost scoase din ZIP-ul final pentru a nu crea confuzii.

## Păstrate neschimbate
- `style.css`, media originale (inclusiv MP4 de 46 secunde), SVG-urile campaniei, imaginile și ambele PDF-uri.
- Nu au fost adăugate vânzări, conversii sau rezultate neconfirmate.
- Fără deployment automat în repository-ul public; versiunea GitHub Pages existentă nu este suprascrisă de acest ZIP.
