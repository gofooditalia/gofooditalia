# GO!Food Italia – sito gofood.it

Sito statico (una pagina, `index.html`) della ditta individuale GO!Food Italia di Giorgio Di Martino,
pubblicato su Vercel (progetto `gofooditalia`) con il dominio gofood.it. Rispondere in italiano.

## Regole sui nomi
- **bemyrider** si scrive SEMPRE tutto minuscolo (mai "BeMyRider", "Bemyrider" o simili).
- Go!Food Menù è il menu digitale (gofoodmenu.it); GO!Food Italia è la ditta.
- La ditta si scrive **GO!Food Italia**: "GO" maiuscolo, nessuno spazio tra "!" e "Food" (mai "GO! Food" o "Go!Food Italia").
- Il logotipo GO!Food usa il font **Alegreya** (Google Fonts, peso 800): immagini `logotipo.png` (trasparente, intestazione del sito) e `firma/logotipo.png` (fondo bianco, firma email). Favicon: "GO!" bianco in Alegreya su quadrato arancione `#e9580c` (`favicon.ico`, `favicon-32.png`, `icon-192/512.png`, `apple-touch-icon.png`).
- Logo quadrato (senza "Italia"): "GO!" sopra e "FOOD" sotto, dal vettoriale originale del titolare (`brand/gofood-logo-originale.svg`, arancione #ff9900), ricolorato nei colori del sito in `brand/gofood-logo-{orange,cream,dark,trasparente}.{svg,png}` (1024×1024, adatti al ritaglio circolare dei social). `brand/gofood-logo-chiaro.svg` (GO! bianco, FOOD arancione, senza sfondo, ritagliato) è quello dei credits "Sito realizzato da" sui siti dei clienti, con link a https://gofood.it. Formato approvato (vedi maropizzeria, `src/components/Footer.astro`): fascia sottile in fondo al footer sotto una riga `border-white/10`, centrata, testo 10px grigio tenue, logo alto 20px.

## Dati aziendali
GO!Food Italia di Giorgio Di Martino · P.IVA 06955440828 · Via Mariano Stabile 160, 90139 Palermo
· tel. 338 377 9151 · info@gofood.it
- Email pubblica: **info@gofood.it**. Sui siti (nostri e dei clienti) sostituire ovunque possibile italiagofood@gmail.com.
- Email dai moduli dei siti: Resend, dominio gofood.it verificato, mittente noreply@gofood.it → info@gofood.it. Chiave `RESEND_API_KEY` come variabile condivisa del team Vercel (collegata a mondelloholiday e scjavuru-holiday; gofooditalia ha ancora la sua variabile di progetto). Modello: `api/contact.js` (funzione Vercel). Mondello Holiday (→ info@gofood.it) e Scjavuru (→ scjavuruhosteria@libero.it, il gestore): Formspree rimosso il 17/10/2026. Credits nuovi su tutti i siti del portfolio (MaRò, Cilea, Villa Pensabene, Sunset, Mondello, Scjavuru) e sulla landing di gofoodmenu.it.

## Sito gofood.it (stato al 17/10/2026)
- `index.html` unico: intestazione fissa con `logotipo.png`, titolo a macchina da scrivere (Software → Siti web →
  Soluzioni digitali → per le attività locali, testo intero `sr-only` per Google), collage animato, fascia
  scorrevole, progetti (Go!Food Menù, bemyrider → https://bemyrider.it/app/), servizi + "Come lavoriamo",
  portfolio (`portfolio/`, 6 siti), modulo contatti (`api/contact.js`), footer scuro con social.
- Animazioni solo CSS/JS nella pagina (niente video), tutte disattivate con `prefers-reduced-motion`.

## Siti dei clienti (repo gofooditalia/*, deploy Vercel da `main`)
- maropizzeria, osteriacilea (commit in inglese, conventional), villapensabene (pilota modifiche via WhatsApp:
  l'agente automatico tocca solo `data/site.config.ts`), sunset-barcarello, mondelloholiday (bilingue, Bun),
  scjavuru-holiday (bilingue, Bun, modulo → gestore scjavuruhosteria@libero.it).
- Credits approvati applicati a tutti il 17/10/2026. File logo: `public/gofood.svg` o `public/credits/gofood.svg`
  (copia di `brand/gofood-logo-chiaro.svg`).
- Nei repo clonati in modo shallow serve `remote.origin.fetch` con `+refs/heads/*:refs/remotes/origin/*`
  perché i branch remoti risultino tracciati. Non posso cancellare branch remoti (403): lo fa il titolare.

## Video e grafica
- HyperFrames (HeyGen) per video scaricabili: storia verticale 1080×1920 di 14 s "Siamo online!" fatta il
  17/10/2026 (progetto locale, non salvato in un repo). Firma email Gmail con `firma/logotipo.png`.

## Da fare
- gofood.it: spostare `RESEND_API_KEY` dalla variabile di progetto a quella condivisa del team (poi Redeploy).
- Eliminare i moduli Formspree `meedkgev` (Mondello) e `xdajbqyb` (Scjavuru).
- Vercel: valutare se eliminare il vecchio progetto `scjavuru-of-home`.
- Facebook: rinominare la pagina "GoFood Italia" in "GO!Food Italia"; LinkedIn: nome "GO!Food Italia".
- Metà dicembre 2026: richiesta API Google Business Profile da info@gofood.it.

