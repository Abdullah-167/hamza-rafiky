import useTranslation from "@/hooks/useTranslation";

const Summary = () => {
  const { t } = useTranslation();

  const data = [
    {
      text: t("lastUpdated_Title"),
    },
    {
      text: t("lastUpdated_para"),
    },
    {
      text: "Quando visitate il nostro sito web www.rafiky.net (“Sito”), e utilizzate i nostri servizi, ci affidate le vostre informazioni personali. Prendiamo molto seriamente la vostra privacy. In questa informativa sulla privacy, descriviamo la nostra politica sulla privacy. Cerchiamo di spiegarvi nel modo più chiaro possibile quali informazioni raccogliamo, come le utilizziamo e quali diritti avete in relazione ad esse. Ci auguriamo che vi prendiate un po’ di tempo per leggerla con attenzione, perché è importante. Se ci sono dei termini in questa politica sulla privacy con cui non siete d’accordo, vi preghiamo di interrompere l’uso del nostro sito e dei nostri servizi.",
    },
    {
      text: "La presente informativa sulla privacy si applica a tutte le informazioni raccolte attraverso il nostro sito web e/o a qualsiasi servizio, vendita, marketing o evento correlato (nella presente informativa sulla privacy ci riferiamo a loro collettivamente come “Sito”).",
    },
    {
      text: t("aboutUs_Title"),
    },
    {
      text: t("aboutUs_Titlepara"),
    },
    {
      text: `Attraverso la piattaforma di Rafiky, gli interpreti possono lavorare da qualsiasi luogo, eliminando la necessità per gli organizzatori di eventi di noleggiare e distribuire hardware specializzato, cabine di interpretariato o pagare le spese di viaggio e soggiorno degli interpreti.`,
    },
    {
      text: `I partecipanti all’evento possono usufruire di un servizio di interpretariato a livello di conferenza ascoltando la lingua di loro scelta in un audio cristallino attraverso l’applicazione Rafiky o le cuffie della radio.`,
    },
    {
      text: `Il nostro ufficio si trova nel Regno Unito.`,
    },
    {
      text: `Vi preghiamo di leggere attentamente la presente informativa sulla privacy in quanto vi aiuterà a prendere decisioni informate sulla condivisione dei vostri dati personali con noi.`,
    },
    {
      text: t("aboutUs_FirstSubTitle"),
    },
    {
      text: t("aboutUs_FirstSubTitlepara"),
    }, 
    {
      text: `Le informazioni personali che raccogliamo dipendono dal contesto delle vostre interazioni con noi e con il Sito, dalle scelte che fate e dai prodotti e dalle caratteristiche che utilizzate. Le informazioni personali che raccogliamo possono includere quanto segue:`,
    },
    {
      text: `Nome e dati di contatto. Raccogliamo il vostro nome e cognome, indirizzo e-mail, indirizzo postale, numero di telefono, indirizzo e-mail e altri dati di contatto simili.`,
    },
    {
      text: `Credenziali. Raccogliamo password, suggerimenti per le password e simili informazioni di sicurezza utilizzate per l’autenticazione e l’accesso all’account.        `,
    },
    {
      text: `Dati di pagamento. Raccogliamo i dati necessari per elaborare il vostro pagamento in caso di acquisti, come il numero dello strumento di pagamento (ad esempio il numero della carta di credito) e il codice di sicurezza associato allo strumento di pagamento. Tutti i dati di pagamento vengono memorizzati dal nostro elaboratore di pagamento e si consiglia di rivedere le sue politiche sulla privacy e di contattare direttamente l’elaboratore di pagamento per rispondere alle vostre domande.`,
    },
    {
      text: `Informazioni sulla posizione: Rintracceremo la posizione del dispositivo inviando le coordinate GPS alla nostra applicazione. Possiamo anche determinare la posizione utilizzando altri dati del vostro dispositivo mobile, come le informazioni sulle reti wireless o i ripetitori di cella vicino al vostro dispositivo. Utilizziamo e memorizziamo le informazioni sulla vostra posizione per attivare molte funzioni del prodotto e del servizio che dipendono dal rilevamento della posizione. Possiamo anche utilizzare le informazioni raccolte per risolvere i problemi del software, per condurre analisi dei dati, per fare test, ricerche e per monitorare e analizzare le tendenze di utilizzo e di attività per migliorare e personalizzare i servizi.`,
    },
    {
      text: `Informazioni raccolte automaticamente`,
    },
    {
      text: `Raccogliamo automaticamente alcune informazioni quando visitate, utilizzate o navigate il Sito. Queste informazioni non rivelano la vostra identità specifica (come il vostro nome o le informazioni di contatto) ma possono includere informazioni sul dispositivo e sull’utilizzo, come l’indirizzo IP, le caratteristiche del browser e del dispositivo, il sistema operativo, le preferenze linguistiche, gli URL di riferimento, il nome del dispositivo, il paese, la posizione, informazioni su come e quando utilizzate il nostro Sito e altre informazioni tecniche. Se accedete al nostro sito con il vostro dispositivo mobile, potremmo raccogliere automaticamente informazioni sul dispositivo (come l’ID del vostro dispositivo mobile, il modello e il produttore), il sistema operativo, le informazioni sulla versione e l’indirizzo IP. Queste informazioni sono`,
    },
    {
      text: `Raccogliamo automaticamente alcune informazioni quando visitate, utilizzate o navigate il Sito. Queste informazioni non rivelano la vostra identità specifica (come il vostro nome o le informazioni di contatto) ma possono includere informazioni sul dispositivo e sull’utilizzo, come l’indirizzo IP, le caratteristiche del browser e del dispositivo, il sistema operativo, le preferenze linguistiche, gli URL di riferimento, il nome del dispositivo, il paese, la posizione, informazioni su come e quando utilizzate il nostro Sito e altre informazioni tecniche. Se accedete al nostro sito con il vostro dispositivo mobile, potremmo raccogliere automaticamente informazioni sul dispositivo (come l’ID del vostro dispositivo mobile, il modello e il produttore), il sistema operativo, le informazioni sulla versione e l’indirizzo IP. Queste informazioni sono`,
    },
    {
      text: `Come molte aziende, anche noi raccogliamo informazioni attraverso i cookie e tecnologie simili. Potete saperne di più nella nostra Politica sui cookie.

        `,
    },
    {
      text: `Come molte aziende, anche noi raccogliamo informazioni attraverso i cookie e tecnologie simili. Potete saperne di più nella nostra Politica sui cookie.

        `,
    },
    {
      text: `Potremmo ottenere informazioni su di voi da altre fonti, come banche dati pubbliche, partner di marketing congiunti, piattaforme di social media (come Facebook), così come da altre terze parti.
        `,
    },
    {
      text: t("aboutUs_SecSubTitle"),
    },
    {
      text: t("aboutUs_SecSubTitlepara"),
    },
    {
      text: `Utilizziamo le informazioni che raccogliamo o riceviamo:`,
    },
    {
      text: `– Per inviarvi informazioni amministrative relative al vostro conto, ai nostri scopi commerciali e/o per motivi legali. Possiamo utilizzare le vostre informazioni personali per inviarvi informazioni su prodotti, servizi e nuove funzionalità e/o informazioni sulle modifiche ai nostri termini, condizioni e politiche.`,
    },
    {
      text: `– Per inviarvi pubblicità mirata per i nostri scopi commerciali e/o con il vostro consenso. Possiamo utilizzare le vostre informazioni per sviluppare e visualizzare contenuti e pubblicità (e lavorare con terzi che lo fanno) su misura per i vostri interessi e/o la vostra posizione e per misurarne l’efficacia. [Per ulteriori informazioni, consultare la nostra Cookie Policy.

            `,
    },
    {
      text: `– Richiedi un feedback per i nostri scopi commerciali e/o con il tuo consenso. Possiamo utilizzare le vostre informazioni per richiedere un feedback e per contattarvi in merito all’utilizzo del nostro Sito.

      `,
    },
    {
      text: `– Per proteggere il nostro sito per scopi commerciali e/o per motivi legali. Possiamo utilizzare le vostre informazioni come parte dei nostri sforzi per mantenere il nostro Sito sicuro e protetto (ad esempio, per il monitoraggio e la prevenzione delle frodi).
        `,
    },
    {
        text: `– Per consentire le comunicazioni da utente a utente con il vostro consenso. Possiamo utilizzare le vostre informazioni per consentire le comunicazioni da utente a utente con il consenso di ciascun utente.
          `,
      },{
        text: `– Per far rispettare i nostri termini, condizioni e politiche per i nostri scopi commerciali e come richiesto dalla legge.
        `,
      },
      {
        text: `– Per rispondere a richieste legali e prevenire danni come richiesto dalla legge. Se riceviamo un mandato di comparizione o un’altra richiesta legale, potremmo avere bisogno di ispezionare i dati in nostro possesso per determinare come rispondere.
        `,
      },
      {
        text:`– Per altri scopi commerciali. Potremmo utilizzare le vostre informazioni per altri scopi commerciali, come l’analisi dei dati, l’identificazione delle tendenze d’uso, la determinazione dell’efficacia delle nostre campagne promozionali e per valutare e migliorare il nostro Sito, i prodotti, i servizi, il marketing e la vostra esperienza. Ad esempio, conserviamo i record di elaborazione delle immagini per conto degli utenti in modo che possano visualizzarli e scaricarli come desiderano. Di tanto in tanto, possiamo anche utilizzarli per migliorare gli algoritmi di elaborazione delle immagini che sono alla base dei servizi che offriamo.
        `
      },
    {
      text: t("aboutUs_ThirdSubTitlepara"),
    },
    {
        text: t("aboutUs_ThirdSubTitlepara1"),
      },{
        text: t("aboutUs_ThirdSubTitlepara2"),
      },{
        text: t("aboutUs_ThirdSubTitlepara3"),
      },{
        text: t("aboutUs_ThirdSubTitlepara4"),
      },{
        text: t("aboutUs_ThirdSubTitlepara5"),
      },{
        text: t("aboutUs_ThirdSubTitlepara6"),
      },
      {
        text: t("aboutUs_ThirdSubTitlepara7"),
      },
      {
        text: t("aboutUs_ThirdSubTitlepara8"),
      },
    {
      text: t("aboutUs_FourSubTitle"),
    },
    {
      text: t("aboutUs_FourSubTitlepara"),
    },
    {
      text: t("aboutUs_FiveSubTitle"),
    },
    {
      text: t("aboutUs_FiveSubTitlepara"),
    },
    {
      text: t("aboutUs_SixSubTitle"),
    },
    {
      text: t("aboutUs_SixSubTitlepara"),
    },
    {
      text: t("aboutUs_SevenSubTitle"),
    },
    {
      text: t("aboutUs_SevenSubTitlepara"),
    },
    {
        text: t("aboutUs_SevenSubTitlepara1"),
      },
    {
      text: t("aboutUs_EightSubTitle"),
    },
    {
      text: t("aboutUs_EightSubTitlepara"),
    },
    {
      text: t("aboutUs_NineSubTitle"),
    },
    {
      text: t("aboutUs_NineSubTitlepara"),
    },
    {
      text: t("aboutUs_TenSubTitle"),
    },
    {
      text: t("aboutUs_TenSubTitlepara"),
    },
    {
        text: t("aboutUs_TenSubTitlepara1"),
      }, {
        text: t("aboutUs_TenSubTitlepara2"),
      }, {
        text: t("aboutUs_TenSubTitlepara3"),
      }, {
        text: t("aboutUs_TenSubTitlepara4"),
      }, {
        text: t("aboutUs_TenSubTitlepara5"),
      },
    {
      text: t("aboutUs_ElevenSubTitle"),
    },
    {
      text: t("aboutUs_ElevenSubTitlepara"),
    },
    {
      text: t("aboutUs_TwelevSubTitle"),
    },
    {
      text: t("aboutUs_TwelevSubTitlepara"),
    },
   
  ];

  return (
    <div className="max-w-[1000px] m-auto">
      <div className="py-20">
        <div className="text-[#666666]">
          {data.map((item, index) => {
            return (
              <p className="py-2" key={index}>
                {" "}
                {item.text}{" "}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
