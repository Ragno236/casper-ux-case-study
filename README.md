# Casper · AI Home Agent — User Research

Repository di case study realizzato durante il **Master in UX/UI Design — Talent Garden**.

Sfida di gruppo di 4 giorni su un brief di smart home: progettare un agente domestico AI ("Casper") che passi dal controllo dei dispositivi alla collaborazione con la casa. Tempo ristretto, nessuna ricerca primaria diretta con utenti reali — il panel qualitativo è sintetico, costruito su brief e desk research (vedi metodologia nel deck).

## Contenuto

| File / Cartella | Descrizione |
|---|---|
| `presentazione.html` | Deck di presentazione completo (8 slide) — apri direttamente nel browser |
| `customer-journeys/` | App interattiva con le 3 Customer Journey Map (Marco, Chiara, Pina) |
| `customer-journeys/index.html` | Entry point dell'app journey — apri nel browser |
| `docs/user-journeys.md` | Journey map narrative dettagliate — formato Markdown / handoff Figma |
| `prototipo-iphone17.html` | Prototipo interattivo dell'app in una cornice iPhone 17 |

## Come usarlo

### Presentazione
```bash
# Apri direttamente nel browser (nessuna dipendenza)
open presentazione.html
```

### Prototipo
```bash
open prototipo-iphone17.html
```

### Customer Journey App
```bash
# Avvia un server locale (opzione 1 — Python)
cd customer-journeys
python3 -m http.server 8080
# → apri http://localhost:8080

# oppure con Node (opzione 2)
npx serve .
```

## Struttura del progetto

```
Gewiss_Portfolio/
├── presentazione.html          ← Deck 8 slide (standalone HTML)
├── prototipo-iphone17.html     ← Prototipo interattivo (standalone HTML)
├── customer-journeys/
│   ├── index.html              ← App journey interattiva
│   ├── styles.css              ← Stili
│   └── app.js                  ← Logica e contenuti
├── docs/
│   └── user-journeys.md        ← Journey map narrative (Figma handoff)
└── README.md
```

## Personas (panel sintetico)

- **Marco Ferretti** — Project Manager, 41 anni · Due proprietà · Ottimizzazione energetica
- **Chiara Bellini** — Ricercatrice Ambientale, 34 anni · Bilocale · Sostenibilità e qualità aria
- **Giuseppina "Pina" Conti** — Pensionata, 68 anni · Sola · Sicurezza e continuità offline

## Feature del concept coperte

- Progressive Autonomy (Manual → Assisted → Collaborative → Autonomous)
- Notification Center con gerarchia Insight / Warning / Critical
- Value Center con narrazione settimanale e CO2 evitata
- Modalità Continuità Offline (backup locale RF)
- Onboarding intelligente 10 giorni

## Team

Alessia, Lorenzo, Erica, Simone.

---

*Casper — Master in UX/UI Design, Talent Garden · Research Phase · 2026*
