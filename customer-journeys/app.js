// ==========================================================================
// Casper AI Home Agent Customer Journeys - Interactive Simulator Script
// ==========================================================================

const personaData = {
  marco: {
    name: "Marco Ferretti",
    bio: "41 anni, Project Manager, vive con la compagna e gestisce due immobili.",
    scope: "Aiutare Marco a ridurre i consumi energetici senza fargli perdere controllo sulle decisioni automatiche della casa.",
    goal: "Save Energy",
    goalClass: "energy-text",
    functions: "1. Onboarding intelligente di 10 giorni<br>2. Dashboard intelligente per il miglioramento della casa",
    insights: [
      "Il rifiuto non è dell’automazione, è della perdita di controllo.",
      "Passare dai comandi alle intenzioni non elimina il bisogno di capire cosa farà la casa.",
      "La fiducia nasce prima dell’azione, non dopo l’errore.",
      "Apprendere non significa automatizzare di più: significa sapere quando fermarsi.",
      "L’opportunità più forte è rendere visibile il livello di autonomia."
    ],
    criticalMoment: "Marco deve vedere che l’app rispetta il suo intervento manuale e non interpreta ogni comportamento come pattern.",
    uxOpportunity: "Mostrare sempre “cosa cambierà”, “quanto farà risparmiare” e “quanto controllo resta all’utente” prima di attivare una routine.",
    successMetric: "Riduzione dei consumi, numero di suggerimenti accettati, riduzione degli override manuali, aumento del livello di autonomia scelto nel tempo.",
    steps: [
      {
        number: 1,
        title: "Trigger",
        type: "Action",
        typeBadge: "badge-action",
        body: "Marco riceve una bolletta più alta del previsto e apre l’app per capire da dove arrivano i consumi.",
        message: "Consumi anomali rilevati. Controlla la bolletta e analizza l'andamento.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Bolletta & Consumi</span>
            <div class="widget-main-value" style="color: var(--color-alert); font-size:1.5rem;">€142.00</div>
            <p class="widget-secondary">Consumo energetico in crescita: <strong>+18%</strong> rispetto al mese scorso.</p>
            <div class="app-dialog-card danger" style="margin-top: 0.5rem; padding: 0.5rem;">
              <div class="dialog-heading">Fatturazione Anomala</div>
              <div class="dialog-body" style="font-size:0.7rem;">Rilevati consumi insoliti nelle fasce orarie mattutine.</div>
            </div>
            <button class="widget-action-btn" style="margin-top: 0.5rem;">Analizza Consumi</button>
          </div>
        `
      },
      {
        number: 2,
        title: "Context recognition",
        type: "AI Analysis",
        typeBadge: "badge-ai",
        body: "L’app riconosce che Marco lavora da casa solo alcuni giorni e che alcune stanze restano inutilizzate in determinate fasce orarie.",
        message: "Routine smart working identificata: alcune stanze restano vuote in determinate ore.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Riconoscimento Contesto</span>
            <div class="widget-main-value" style="font-size: 1.25rem;">Routine Rilevata</div>
            <p class="widget-secondary">Presenza stimata in casa: lunedì e mercoledì (Home Office).</p>
            <div style="background-color: var(--bg-color); padding: 0.5rem; border-radius: 6px; margin-top: 0.5rem;">
              <div style="font-size: 0.75rem; font-weight: 600; display:flex; justify-content:space-between;">
                <span>Studio</span> <strong style="color:var(--color-outcome);">Occupato (9:00 - 18:00)</strong>
              </div>
              <div style="font-size: 0.75rem; font-weight: 600; display:flex; justify-content:space-between; margin-top:0.25rem;">
                <span>Soggiorno / Cucina</span> <strong style="color:var(--text-muted);">Inutilizzati (9:30 - 13:00)</strong>
              </div>
            </div>
          </div>
        `
      },
      {
        number: 3,
        title: "Insight from the home",
        type: "AI Insight",
        typeBadge: "badge-ai",
        body: "La dashboard mostra che lo studio e il soggiorno vengono riscaldati contemporaneamente anche quando Marco usa solo lo studio.",
        message: "Studio e soggiorno riscaldati insieme. Riscaldamento superfluo rilevato.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Analisi Riscaldamento</span>
            <div class="widget-main-value" style="color: var(--accent-color); font-size: 1.25rem;">Spreco Energetico</div>
            <p class="widget-secondary">Studio e Soggiorno riscaldati contemporaneamente pur rilevando presenza solo in Studio.</p>
            <div class="energy-graph-mock" style="margin-top: 0.5rem;">
              <div class="graph-bar" style="height: 20%"></div>
              <div class="graph-bar" style="height: 35%"></div>
              <div class="graph-bar active" style="height: 80%; background-color: var(--accent-color);"></div>
              <div class="graph-bar" style="height: 25%"></div>
            </div>
            <div style="font-size:0.65rem; color:var(--text-muted); text-align:center; margin-top:0.25rem;">
              Consumo termico anomalo: 9:30 - 13:00
            </div>
          </div>
        `
      },
      {
        number: 4,
        title: "AI proposal",
        type: "AI Suggestion",
        typeBadge: "badge-ai",
        body: "L’app propone una routine temporanea: ridurre riscaldamento nelle stanze non utilizzate (9:30-13:00). Risparmio: 18€/mese.",
        message: "Proposta: Riduci riscaldamento nelle stanze vuote. Risparmio stimato: 18€/mese.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Proposta Risparmio AI</span>
            <div class="widget-main-value" style="color: var(--color-outcome); font-size:1.35rem;">Risparmio: €18/mese</div>
            <p class="widget-secondary">"Riduco riscaldamento a 17°C nelle stanze non utilizzate dalle 9:30 alle 13:00 nei giorni di smart working."</p>
            <div class="app-dialog-card success" style="margin: 0.5rem 0; padding:0.5rem;">
              <div class="dialog-heading">Cosa Cambierà</div>
              <div class="dialog-body" style="font-size:0.7rem;">Soggiorno e Cucina ridotti a 17°C. Studio mantenuto a 21°C. Controllo utente attivo.</div>
            </div>
            <button class="widget-action-btn">Vedi Dettagli Routine</button>
          </div>
        `
      },
      {
        number: 5,
        title: "User control",
        type: "User Decision",
        typeBadge: "badge-decision",
        body: "Marco vede prima cosa cambierà e sceglie il livello di autonomia: solo suggerimento, chiedi conferma, automatico.",
        message: "Scegli il livello di autonomia desiderato per questa routine.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Livello di Autonomia</span>
            <p class="widget-secondary">Scegli come l'AI deve gestire questa routine energetica.</p>
            <div class="onboarding-list" style="margin-top:0.5rem;">
              <div class="onboarding-option">
                <span>Solo suggerimento (Manuale)</span>
                <span class="radio-indicator"></span>
              </div>
              <div class="onboarding-option selected">
                <span>Chiedi conferma (Consigliato)</span>
                <span class="radio-indicator"></span>
              </div>
              <div class="onboarding-option">
                <span>Automatico (Autonomia completa)</span>
                <span class="radio-indicator"></span>
              </div>
            </div>
            <button class="widget-action-btn" style="margin-top:0.75rem;">Conferma Autonomia</button>
          </div>
        `
      },
      {
        number: 6,
        title: "Real-life exception",
        type: "Action",
        typeBadge: "badge-action",
        body: "Una sera Marco lavora fino a tardi in soggiorno e modifica manualmente la temperatura.",
        message: "Rilevato intervento manuale. Cambio temperatura Soggiorno a 21.5°C.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Controllo Clima</span>
            <div class="widget-main-value" style="display:flex; justify-content:space-between; align-items:center;">
              <span>21.5 °C</span>
              <span class="type-badge badge-decision" style="font-size:0.6rem;">Modifica Manuale</span>
            </div>
            <p class="widget-secondary">Temperatura soggiorno alzata manualmente alle ore 22:30.</p>
            <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.5rem; text-align:center; padding:0.25rem; background:#f1f5f9; border-radius:4px;">
              Rilevamento presenza attiva in Soggiorno
            </div>
          </div>
        `
      },
      {
        number: 7,
        title: "System response",
        type: "AI Suggestion",
        typeBadge: "badge-ai",
        body: "L’app non trasforma subito l’eccezione in una nuova regola. Chiede se si tratta di un'eccezione temporanea.",
        message: "Modifica manuale rilevata. Vuoi mantenerla solo per oggi?",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Gestione Eccezioni AI</span>
            <div class="widget-main-value" style="font-size: 1.1rem; color: var(--color-decision);">Sembra un'eccezione</div>
            <p class="widget-secondary">"Ho rilevato una modifica manuale insolita stasera."</p>
            <div class="app-dialog-card info" style="margin: 0.5rem 0; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">"Vuoi mantenere questa modifica solo per oggi o aggiornare la routine abituale?"</div>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="widget-action-btn" style="flex: 1; font-size:0.7rem;">Solo per oggi</button>
              <button class="widget-action-btn widget-action-btn-secondary" style="flex: 1; font-size:0.7rem;">Aggiorna routine</button>
            </div>
          </div>
        `
      },
      {
        number: 8,
        title: "Outcome",
        type: "Outcome",
        typeBadge: "badge-outcome",
        body: "Dopo un mese, Marco vede un riepilogo: risparmio stimato 23€, 4 picchi evitati, routine modificata solo con conferma.",
        message: "Riepilogo mensile: Risparmio stimato di 23€. Controllo garantito.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Riepilogo Energetico</span>
            <div class="widget-main-value" style="color: var(--color-outcome); font-size: 1.5rem;">Risparmio: €23.00</div>
            <div class="progress-bar-container" style="height: 10px; margin: 0.5rem 0;">
              <div class="progress-bar-fill" style="width: 85%; background-color: var(--color-outcome);"></div>
            </div>
            <div class="app-dialog-card success" style="margin-top: 0.5rem; padding: 0.5rem;">
              <div class="dialog-heading" style="font-size:0.75rem;">Obiettivi Raggiunti</div>
              <div class="dialog-body" style="font-size:0.7rem;">
                • Picchi di consumo evitati: <strong>4</strong><br>
                • Nessuna routine modificata senza autorizzazione.
              </div>
            </div>
          </div>
        `
      }
    ],
    branches: [
      { tag: "Branch A", text: "Se Marco rifiuta la proposta, l’app mantiene il suggerimento come insight e non insiste." },
      { tag: "Branch B", text: "Se Marco modifica manualmente una routine, l’app chiede se si tratta di un’eccezione." },
      { tag: "Branch C", text: "Se i dati non sono sufficienti, l’app continua a osservare invece di proporre automazioni premature." }
    ]
  },
  chiara: {
    name: "Chiara Bellini",
    bio: "34 anni, ricercatrice in ambito ambientale, vive da sola in un bilocale.",
    scope: "Aiutare Chiara a prendere decisioni domestiche più sostenibili, trasformando dati frammentati in indicazioni ambientali comprensibili.",
    goal: "Improve Sustainability",
    goalClass: "sustainability-text",
    functions: "1. Dashboard intelligente per il miglioramento della casa<br>2. Widget dinamici sulla schermata di blocco",
    insights: [
      "Il valore non è solo ciò che la casa fa, ma ciò che evita all’utente.",
      "La frammentazione dell’ecosistema è percepita come fatica mentale, non come problema tecnico.",
      "Il centro notifiche non deve essere un flusso di avvisi, ma una gerarchia dell’attenzione.",
      "L’opportunità più forte è rendere visibile il livello di autonomia."
    ],
    criticalMoment: "La qualità dell’aria peggiora durante la cena. L’app deve bilanciare sostenibilità, comfort e attenzione, senza trasformarsi in un flusso di alert.",
    uxOpportunity: "Tradurre la complessità dei dati ambientali in una decisione semplice, contestuale e misurabile.",
    successMetric: "CO₂ evitata, riduzione uso non necessario dei dispositivi, numero di azioni contestuali accettate, percezione di affidabilità dei dati.",
    steps: [
      {
        number: 1,
        title: "Trigger",
        type: "Action",
        typeBadge: "badge-action",
        body: "Chiara controlla la casa prima dell’arrivo degli ospiti e nota che qualità dell’aria, temperatura e consumi sono distribuiti in app e dispositivi diversi.",
        message: "Stato sensori frammentato: dati distribuiti su interfacce e sistemi diversi.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Dispositivi Connessi</span>
            <p class="widget-secondary">Stato sensori prima della cena:</p>
            <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.4rem; font-size:0.75rem;">
              <div style="display:flex; justify-content:space-between; background:#f1f5f9; padding:0.35rem 0.5rem; border-radius:4px;">
                <span>Sensore Aria</span> <strong style="color:var(--primary-color);">85 AQI (Accettabile)</strong>
              </div>
              <div style="display:flex; justify-content:space-between; background:#f1f5f9; padding:0.35rem 0.5rem; border-radius:4px;">
                <span>Purificatore</span> <strong style="color:var(--color-automation);">Attivo (Livello 2)</strong>
              </div>
              <div style="display:flex; justify-content:space-between; background:#f1f5f9; padding:0.35rem 0.5rem; border-radius:4px;">
                <span>Termostato</span> <strong style="color:var(--primary-color);">20.0°C (In riscaldamento)</strong>
              </div>
            </div>
          </div>
        `
      },
      {
        number: 2,
        title: "Context recognition",
        type: "AI Analysis",
        typeBadge: "badge-ai",
        body: "La dashboard unifica i dati e capisce che il soggiorno sarà usato più del solito nelle prossime ore.",
        message: "Rilevamento scenario cena: prevista presenza di più persone in soggiorno.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Rilevamento Contesto</span>
            <div class="widget-main-value" style="font-size:1.15rem; color:#047857;">Preparazione Ospiti</div>
            <p class="widget-secondary">Previsto picco di presenze in Soggiorno dalle 19:30 alle 23:30.</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">Sistemi climatico e purificazione integrati per ottimizzazione di gruppo.</div>
            </div>
          </div>
        `
      },
      {
        number: 3,
        title: "Environmental insight",
        type: "AI Insight",
        typeBadge: "badge-ai",
        body: "L’app rileva che purificatore e ventilazione stanno lavorando in sovrapposizione, generando consumo non necessario.",
        message: "Conflitto rilevato: purificatore e ventilazione attiva lavorano in sovrapposizione.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Sovrapposizione Risorse</span>
            <div class="widget-main-value" style="color:var(--color-alert); font-size:1.15rem;">Spreco Rilevato: 120W</div>
            <p class="widget-secondary">Purificatore e ventilazione meccanica stanno lavorando contemporaneamente in Soggiorno.</p>
            <div style="border-left:3px solid var(--color-alert); padding-left:0.5rem; font-size:0.7rem; color:var(--text-muted); margin-top:0.5rem;">
              I due sistemi stanno agendo sugli stessi volumi d'aria, raddoppiando il consumo.
            </div>
          </div>
        `
      },
      {
        number: 4,
        title: "AI proposal",
        type: "AI Suggestion",
        typeBadge: "badge-ai",
        body: "L’app suggerisce: spegnendo il purificatore e aprendo la ventilazione naturale per 20 minuti puoi mantenere stabile la qualità dell’aria.",
        message: "Consiglio: usa ventilazione naturale 20m ed evita purificatore stasera.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Raccomandazione Verde</span>
            <div class="widget-main-value" style="color:#047857; font-size:1.15rem;">Ventilazione Naturale</div>
            <p class="widget-secondary">"Apri la finestra per 20 min ora. Ridurrai l'uso del purificatore stasera."</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">Impatto: <strong>CO₂ evitata ~ 0.4kg</strong>. Consumo stasera dimezzato.</div>
            </div>
            <button class="widget-action-btn" style="background:#047857;">Applica Ottimizzazione</button>
          </div>
        `
      },
      {
        number: 5,
        title: "Contextual action",
        type: "Automation",
        typeBadge: "badge-automation",
        body: "Quando Chiara entra in soggiorno, il widget sulla schermata di blocco mostra solo i dati rilevanti.",
        message: "Widget di blocco attivo: mostra dati e controlli rilevanti del soggiorno.",
        mockup: `
          <div class="iphone-screen lockscreen-bg">
            <div class="lockscreen-header">
              <div class="lockscreen-time">19:15</div>
              <div class="lockscreen-date">Sabato, 1 Luglio</div>
            </div>
            <div style="padding: 0 1rem;">
              <span class="widget-title" style="color:#e2e8f0; font-size:0.6rem;">WIDGET CONTESTUALI SOGGIORNO</span>
              <div class="lockscreen-widget-area" style="margin-top:0.25rem;">
                <div class="lockscreen-widget" style="background:rgba(15,23,42,0.6); padding:0.4rem; border-radius:6px;">
                  <span class="w-lbl" style="color:#94a3b8; font-size:0.55rem;">Aria Soggiorno</span>
                  <div class="w-val" style="color:#10b981; font-size:0.8rem; font-weight:700;">Ottima (62)</div>
                </div>
                <div class="lockscreen-widget" style="background:rgba(15,23,42,0.6); padding:0.4rem; border-radius:6px;">
                  <span class="w-lbl" style="color:#94a3b8; font-size:0.55rem;">Consumo</span>
                  <div class="w-val" style="font-size:0.8rem; font-weight:700; color:white;">85 W</div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        number: 6,
        title: "Quick decision",
        type: "User Decision",
        typeBadge: "badge-decision",
        body: "Chiara accetta dal widget una modifica temporanea per ridurre il purificatore per 1 ora.",
        message: "Decisione rapida dal blocco schermo: riduzione purificatore accettata.",
        mockup: `
          <div class="iphone-screen lockscreen-bg">
            <div class="lockscreen-header">
              <div class="lockscreen-time">19:17</div>
              <div class="lockscreen-date">Sabato, 1 Luglio</div>
            </div>
            <div style="padding: 0 1rem;">
              <div class="lockscreen-notification" style="border-left: 3px solid var(--accent-color); background-color: rgba(15,23,42,0.85); color:white; padding:0.6rem; border-radius:8px;">
                <div class="notif-title" style="font-weight:700; font-size:0.75rem; color:var(--accent-color);">Ottimizzazione Rapida</div>
                <div class="notif-desc" style="font-size:0.68rem; margin:0.25rem 0;">"Riduci il purificatore per 1 ora? La qualità dell'aria è ottima."</div>
                <div style="display:flex; gap:0.4rem; margin-top:0.35rem;">
                  <button class="widget-action-btn" style="padding:0.25rem; font-size:0.65rem; background:#047857; border:none; border-radius:4px; color:white; flex:1;">Accetta</button>
                  <button class="widget-action-btn" style="padding:0.25rem; font-size:0.65rem; background:rgba(255,255,255,0.15); border:none; border-radius:4px; color:white; flex:1;">Ignora</button>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        number: 7,
        title: "Branching moment",
        type: "Alert",
        typeBadge: "badge-alert",
        body: "Durante la cena, la qualità dell’aria peggiora più del previsto a causa della presenza degli ospiti.",
        message: "Qualità dell'aria in calo per affollamento. Parametro AQI a 105.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Monitoraggio Qualità Aria</span>
            <div class="widget-main-value" style="color:var(--color-decision); font-size:1.25rem;">AQI: 105 (Moderato)</div>
            <p class="widget-secondary">Presenza rilevata: 6 persone. Livello di CO₂ in crescita.</p>
            <div class="energy-graph-mock" style="height:40px; margin-top:0.5rem;">
              <div class="graph-bar" style="height: 30%"></div>
              <div class="graph-bar" style="height: 40%"></div>
              <div class="graph-bar" style="height: 60%"></div>
              <div class="graph-bar active" style="height: 90%; background-color: var(--color-decision);"></div>
            </div>
          </div>
        `
      },
      {
        number: 8,
        title: "System response",
        type: "AI Suggestion",
        typeBadge: "badge-ai",
        body: "L’app non manda una serie di alert. Mostra una notifica prioritaria discreta per riattivare il purificatore.",
        message: "Notifica non allarmante: Posso riattivare il purificatore per 30 minuti?",
        mockup: `
          <div class="widget-card" style="border-color: var(--color-decision);">
            <span class="widget-title">Gestione Qualità Aria</span>
            <div class="widget-main-value" style="font-size: 1.15rem; color: var(--color-decision);">Qualità aria in calo</div>
            <p class="widget-secondary">Nessun allarme acustico. Notifica discreta inviata sul blocco schermo.</p>
            <div class="app-dialog-card info" style="margin: 0.5rem 0; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">"Qualità dell'aria in calo. Posso riattivare il purificatore per 30 minuti?"</div>
            </div>
            <div style="display:flex; gap:0.5rem;">
              <button class="widget-action-btn" style="flex:1;">Riattiva 30m</button>
              <button class="widget-action-btn widget-action-btn-secondary" style="flex:1;">Ignora</button>
            </div>
          </div>
        `
      },
      {
        number: 9,
        title: "Outcome",
        type: "Outcome",
        typeBadge: "badge-outcome",
        body: "La dashboard mostra l'impatto: 3.2 kg di CO₂ stimata evitata, purificatore ridotto di 5 ore, qualità dell'aria salvaguardata.",
        message: "Risultato: 3.2 kg CO₂ evitata. Comfort e salute tutelati.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Impatto Ambientale</span>
            <div class="widget-main-value" style="color: #047857; font-size:1.4rem;">3.2 kg CO₂ Evitata</div>
            <p class="widget-secondary">Risultati delle ottimizzazioni ecologiche di ieri sera:</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">
                • Uso purificatore ridotto di <strong>5 ore</strong>.<br>
                • Qualità aria media: <strong>Buona (72 AQI)</strong>.
              </div>
            </div>
          </div>
        `
      }
    ],
    branches: [
      { tag: "Branch A", text: "Se Chiara ignora il suggerimento, l’app continua a monitorare senza aumentare la frequenza degli avvisi." },
      { tag: "Branch B", text: "Se la qualità dell’aria peggiora, l’app dà priorità al comfort e propone una correzione temporanea." },
      { tag: "Branch C", text: "Se i dati dei dispositivi sono incoerenti, l’app segnala l’incertezza invece di presentare una stima falsa." }
    ]
  },
  pina: {
    name: 'Giuseppina "Pina" Conti',
    bio: "68 anni, pensionata, vive sola. Il figlio è caregiver remoto.",
    scope: "Proteggere Pina durante una possibile emergenza domestica, mantenendo comunicazione chiara e continuità del sistema anche se la connessione cade.",
    goal: "Safety",
    goalClass: "safety-text",
    functions: "1. Dashboard intelligente per il miglioramento della casa<br>2. Modalità continuità in assenza di Wi-Fi",
    insights: [
      "La fiducia nasce prima dell’azione, non dopo l’errore.",
      "Il centro notifiche non deve essere un flusso di avvisi, ma una gerarchia dell’attenzione.",
      "Il valore non è solo ciò che la casa fa, ma ciò che evita all’utente.",
      "Il fallimento offline è un punto di rottura della fiducia, non solo un bug.",
      "Il rifiuto non è dell’automazione, è della perdita di controllo."
    ],
    criticalMoment: "Il Wi-Fi cade durante un possibile rischio gas. La casa deve continuare a proteggere Pina proprio nel momento più delicato.",
    uxOpportunity: "Progettare comunicazioni differenziate per chi vive l’evento e per chi lo monitora da remoto.",
    successMetric: "Tempo di comprensione dell’alert, tempo di risposta del caregiver, corretta attivazione della modalità continuità, riduzione di falsi allarmi e panico.",
    steps: [
      {
        number: 1,
        title: "Trigger",
        type: "Alert",
        typeBadge: "badge-alert",
        body: "Pina sta cucinando e il sensore rileva una possibile presenza di gas in cucina.",
        message: "Anomalia rilevata: possibile presenza di gas in cucina.",
        mockup: `
          <div class="widget-card" style="border-color: var(--color-alert);">
            <span class="widget-title" style="color:var(--color-alert);">Sensore Gas</span>
            <div class="widget-main-value" style="color: var(--color-alert); font-size:1.25rem;">Rilevamento Anomalia</div>
            <p class="widget-secondary">Sensore cucina rileva concentrazione sospetta.</p>
            <div class="app-dialog-card danger" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">Livello misurato superiore alla soglia di sicurezza. Avvio analisi di criticità.</div>
            </div>
          </div>
        `
      },
      {
        number: 2,
        title: "Risk classification",
        type: "AI Analysis",
        typeBadge: "badge-ai",
        body: "La dashboard classifica l’evento come critico, distinguendolo da manutenzioni o anomalie non urgenti.",
        message: "Classificazione AI: minaccia confermata come critica. Protocollo sicurezza avviato.",
        mockup: `
          <div class="widget-card" style="border-color: var(--color-alert);">
            <span class="widget-title" style="color:var(--color-alert);">Classificazione Rischio</span>
            <div class="widget-main-value" style="font-size:1.15rem; color:var(--color-alert);">RISCHIO CRITICO: GAS</div>
            <p class="widget-secondary">Esclusa falsa lettura o anomalia minore. Avvio azioni protettive.</p>
            <div style="font-size:0.7rem; color:var(--text-muted); background:#fee2e2; padding:0.35rem; border-radius:4px; margin-top:0.5rem;">
              ⚡ Livello di gravità: <strong>Livello 3 (Emergenza)</strong>
            </div>
          </div>
        `
      },
      {
        number: 3,
        title: "Clear instruction",
        type: "Alert",
        typeBadge: "badge-alert",
        body: "Pina riceve un messaggio semplice: 'Possibile gas rilevato. Apri la finestra. Non accendere luci. Sto avvisando tuo figlio.'",
        message: "Notifica Pina: istruzioni salvavita in formato chiaro e leggibile.",
        mockup: `
          <div class="iphone-screen" style="background-color: var(--color-alert-bg);">
            <div style="padding: 2rem 1.25rem; text-align: center; color: var(--color-alert); display:flex; flex-direction:column; gap:0.75rem; height:100%;">
              <div style="font-size: 2.5rem;">⚠️</div>
              <h2 style="font-family: var(--font-headings); font-weight:800; font-size: 1.35rem; margin:0;">ATTENZIONE GAS</h2>
              <div class="app-dialog-card danger" style="text-align:left; border: 1px solid #fecaca; margin-top:0.5rem;">
                <div class="dialog-body" style="font-size:0.8rem; line-height:1.5; color:#7f1d1d;">
                  1. <strong>Apri la finestra.</strong><br>
                  2. <strong>Non accendere luci</strong> o interruttori.<br>
                  3. Esci all'aperto.
                </div>
              </div>
              <p style="font-size:0.7rem; color:#7f1d1d; margin-top:auto; font-weight:600;">
                Stiamo contattando tuo figlio.
              </p>
            </div>
          </div>
        `
      },
      {
        number: 4,
        title: "Protective action",
        type: "Automation",
        typeBadge: "badge-automation",
        body: "Il sistema spegne i dispositivi elettrici non essenziali nella zona a rischio per evitare scintille.",
        message: "Automazione: prese elettriche della cucina disattivate per prevenzione inneschi.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Protocollo di Emergenza</span>
            <div class="widget-main-value" style="color:var(--color-alert); font-size:1.15rem;">Alimentazione Disattivata</div>
            <p class="widget-secondary">Interruzione elettrica automatica per messa in sicurezza.</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">
                • Zona: <strong>Cucina</strong><br>
                • Elettrodomestici spenti: <strong>Forno, Frigo, Prese</strong>
              </div>
            </div>
          </div>
        `
      },
      {
        number: 5,
        title: "Caregiver update",
        type: "Action",
        typeBadge: "badge-action",
        body: "Il figlio riceve una notifica dettagliata con lo stato dei sensori e delle automazioni attive.",
        message: "Notifica caregiver: inviati dettagli tecnici sulla situazione a casa di Pina.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Notifica Caregiver</span>
            <div class="widget-main-value" style="color:var(--color-alert); font-size:1.15rem;">Allarme Gas Generato</div>
            <p class="widget-secondary">Rilevamento gas a casa di Giuseppina Conti.</p>
            <div class="app-dialog-card danger" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-heading">Dettaglio per Caregiver</div>
              <div class="dialog-body" style="font-size:0.7rem;">
                - Gas rilevato in cucina.<br>
                - Elettrodomestici disattivati.<br>
                - Pina avvisata via app e notifica ad alta visibilità.
              </div>
            </div>
          </div>
        `
      },
      {
        number: 6,
        title: "Connection issue",
        type: "Alert",
        typeBadge: "badge-alert",
        body: "Durante l’evento, il Wi-Fi domestico si interrompe, minacciando il collegamento remoto.",
        message: "Avviso: Wi-Fi di casa interrotto. Il sistema passa in modalità locale.",
        mockup: `
          <div class="widget-card" style="border-color: var(--color-alert); background-color: var(--color-alert-bg);">
            <span class="widget-title" style="color:var(--color-alert);">Stato Connessione</span>
            <div class="widget-main-value" style="color: var(--color-alert); font-size:1.15rem;">Wi-Fi Interrotto</div>
            <p class="widget-secondary" style="color:#7f1d1d;">Rete domestica offline durante l'emergenza.</p>
            <div style="font-size:0.65rem; color:#7f1d1d; font-weight:600; text-align:center; margin-top:0.5rem;">
              ⚠️ Tentativo di switch su protocollo locale...
            </div>
          </div>
        `
      },
      {
        number: 7,
        title: "Continuity mode",
        type: "Automation",
        typeBadge: "badge-automation",
        body: "La modalità continuità si attiva e mantiene operativi sensori, valvole e comunicazioni radio locali.",
        message: "Attivazione Continuity Mode: sicurezza locale garantita offline.",
        mockup: `
          <div class="widget-card" style="border-color:#10b981;">
            <span class="widget-title" style="color:#047857;">Casper Local Continuity</span>
            <div class="widget-main-value" style="color:#047857; font-size:1.15rem;">Offline Backup Attivo</div>
            <p class="widget-secondary">Sensori e valvole di sicurezza comunicano via frequenza radio locale.</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">Stato: <strong>Protetto.</strong> Elettrovalvola gas chiusa localmente. Sensori operativi.</div>
            </div>
          </div>
        `
      },
      {
        number: 8,
        title: "Resolution",
        type: "Outcome",
        typeBadge: "badge-outcome",
        body: "Il rischio rientra. L’app comunica a Pina che la situazione è sotto controllo ed il figlio è informato.",
        message: "Sicurezza ripristinata. Rischio gas azzerato.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Stato Casa</span>
            <div class="widget-main-value" style="color:#10b981; font-size:1.35rem;">✓ Situazione Sicura</div>
            <p class="widget-secondary">Livello di gas tornato a valori normali.</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.7rem;">"La situazione è sotto controllo. Tuo figlio è stato aggiornato."</div>
            </div>
          </div>
        `
      },
      {
        number: 9,
        title: "Outcome",
        type: "Outcome",
        typeBadge: "badge-outcome",
        body: "Il figlio riceve il riepilogo: rischio gas gestito, 3 prese spente, sensori attivi offline.",
        message: "Log di chiusura inviato al caregiver. Caso chiuso positivamente.",
        mockup: `
          <div class="widget-card">
            <span class="widget-title">Riepilogo Evento</span>
            <div class="widget-main-value" style="color:#047857; font-size:1.35rem;">Log Emergenza</div>
            <p class="widget-secondary">Resoconto dell'anomalia gestita offline:</p>
            <div class="app-dialog-card success" style="margin-top:0.5rem; padding:0.5rem;">
              <div class="dialog-body" style="font-size:0.68rem; line-height:1.4;">
                • Rilevamento gas in cucina (Risolto)<br>
                • 3 prese disattivate per prevenzione<br>
                • Sensori attivi in Modalità Continuità
              </div>
            </div>
          </div>
        `
      }
    ],
    branches: [
      { tag: "Branch A", text: "Se Pina non conferma di aver letto il messaggio, il sistema aumenta la priorità verso il caregiver." },
      { tag: "Branch B", text: "Se il Wi-Fi cade, la modalità continuità mantiene attivi i dispositivi essenziali." },
      { tag: "Branch C", text: "Se il rischio rientra rapidamente, l’app evita allarmismi e comunica la risoluzione in modo semplice." }
    ]
  }
};

let currentPersona = "marco";
let currentStepIndex = 0;

// DOM Elements
const btnPersonaMarco = document.getElementById("btn-persona-marco");
const btnPersonaChiara = document.getElementById("btn-persona-chiara");
const btnPersonaPina = document.getElementById("btn-persona-pina");

const metaName = document.getElementById("metaName");
const metaBio = document.getElementById("metaBio");
const metaScope = document.getElementById("metaScope");
const metaGoal = document.getElementById("metaGoal");
const metaFunctions = document.getElementById("metaFunctions");
const insightList = document.getElementById("insightList");

const timelineSteps = document.getElementById("timelineSteps");
const uxCritical = document.getElementById("uxCritical");
const uxOpportunity = document.getElementById("uxOpportunity");
const uxMetric = document.getElementById("uxMetric");

const deviceUser = document.getElementById("deviceUser");
const screenContent = document.getElementById("screenContent");
const screenTime = document.getElementById("screenTime");
const appHeader = document.getElementById("appHeader");

// Set active persona and load details
function selectPersona(personaId) {
  currentPersona = personaId;
  currentStepIndex = 0;
  
  // Update selection UI buttons
  document.querySelectorAll(".persona-card").forEach(card => {
    card.classList.remove("active");
  });
  document.getElementById(`btn-persona-${personaId}`).classList.add("active");
  
  const data = personaData[personaId];
  
  // Update metadata fields
  metaName.textContent = data.name;
  metaBio.textContent = data.bio;
  metaScope.textContent = data.scope;
  metaGoal.textContent = data.goal;
  
  // Handle goal styling color class
  metaGoal.className = "meta-value " + data.goalClass;
  
  metaFunctions.innerHTML = data.functions;
  
  // Populate key insights
  insightList.innerHTML = "";
  data.insights.forEach(insight => {
    const li = document.createElement("li");
    li.textContent = insight;
    insightList.appendChild(li);
  });
  
  // Populate bottom details
  uxCritical.textContent = data.criticalMoment;
  uxOpportunity.textContent = data.uxOpportunity;
  uxMetric.textContent = data.successMetric;
  
  // Populate mobile device user name
  deviceUser.textContent = data.name.split(" ")[0]; // Get first name
  
  // Populate steps list
  renderTimelineSteps(data.steps, data.branches);
  
  // Select the first step
  selectStep(0);
}

// Render the timeline steps list
function renderTimelineSteps(steps, branches) {
  timelineSteps.innerHTML = "";
  
  steps.forEach((step, index) => {
    const stepEl = document.createElement("div");
    stepEl.className = "timeline-step";
    stepEl.dataset.index = index;
    
    // Create type icon or badge
    const badgeText = step.type;
    
    stepEl.innerHTML = `
      <div class="step-header">
        <div class="step-title-group">
          <div class="step-number">${step.number}</div>
          <span class="step-title">${step.title}</span>
        </div>
        <span class="type-badge ${step.typeBadge}">
          ${badgeText}
        </span>
      </div>
      <p class="step-body">${step.body}</p>
      <div class="step-message">"${step.message}"</div>
    `;
    
    // Add click handler
    stepEl.addEventListener("click", () => {
      selectStep(index);
    });
    
    timelineSteps.appendChild(stepEl);
  });

  // Render branches block at the end of the steps
  if (branches && branches.length > 0) {
    const branchesEl = document.createElement("div");
    branchesEl.className = "step-branches";
    branchesEl.innerHTML = `<span class="branch-title">Alternative Branches & Exceptions</span>`;
    
    branches.forEach(branch => {
      const branchItem = document.createElement("div");
      branchItem.className = "branch-item";
      branchItem.innerHTML = `<span class="branch-tag">${branch.tag}</span> <span>${branch.text}</span>`;
      branchesEl.appendChild(branchItem);
    });
    
    timelineSteps.appendChild(branchesEl);
  }
}

// Select a specific step in the current journey
function selectStep(stepIndex) {
  currentStepIndex = stepIndex;
  
  // Toggle active class on steps
  document.querySelectorAll(".timeline-step").forEach((el, idx) => {
    if (idx === stepIndex) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  
  // Update simulator phone mockup content
  const stepData = personaData[currentPersona].steps[stepIndex];
  
  // Format simulated system time based on step
  let stepTime = "15:40";
  if (stepIndex === 4) stepTime = "15:45";
  if (stepIndex === 5) stepTime = "16:00";
  screenTime.textContent = stepTime;

  // Render simulated screen contents
  screenContent.innerHTML = stepData.mockup;
  
  // Apply contextual colors to the header and body wrapper based on the layout type
  const isLockscreen = stepData.mockup.includes("lockscreen-bg");
  if (isLockscreen) {
    appHeader.style.display = "none";
    screenContent.style.padding = "0";
    screenContent.style.backgroundColor = "transparent";
  } else {
    appHeader.style.display = "flex";
    screenContent.style.padding = "1rem";
    screenContent.style.backgroundColor = "#f8fafc";
  }
}

// Persona selection event listeners
btnPersonaMarco.addEventListener("click", () => selectPersona("marco"));
btnPersonaChiara.addEventListener("click", () => selectPersona("chiara"));
btnPersonaPina.addEventListener("click", () => selectPersona("pina"));

// Initialize with Marco
window.addEventListener("DOMContentLoaded", () => {
  selectPersona("marco");
});
