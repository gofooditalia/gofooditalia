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
- Email dai moduli dei siti: Resend, dominio gofood.it verificato, mittente noreply@gofood.it → info@gofood.it. Chiave `RESEND_API_KEY` come variabile condivisa del team Vercel (collegata a mondelloholiday; gofooditalia ha ancora la sua variabile di progetto). Modello: `api/contact.js` (funzione Vercel). Mondello Holiday: Formspree rimosso il 17/10/2026.
