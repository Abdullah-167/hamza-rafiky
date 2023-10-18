import useTranslation from '@/hooks/useTranslation'


const Summary = () => {

    const { t } = useTranslation();

    return (
        <div className='max-w-[1000px] m-auto px-5'>
            <div className='py-20'>
                <p className='text-[#666666] py-2'>
                    {t("refundPolicyparaOne")}
                    <br /><br />
                    L’utente può riprogrammare o sospendere la consegna dei Servizi notificandocelo. L’utente accetta che possiamo addebitargli una parte dei Servizi che gli abbiamo consegnato prima della riprogrammazione o della sospensione dei Servizi più una tassa amministrativa di £59,00 al giorno lavorativo mentre i Servizi sono sospesi. I Servizi possono essere sospesi dall’utente solo per un periodo massimo di cinque (5) giorni lavorativi consecutivi a partire dal giorno lavorativo successivo che cade immediatamente dopo la data di consegna originale specificata nell’Ordine.
                    <br /><br />
                    Eventuali spese amministrative da noi aggiunte al Suo Ordine faranno parte del prezzo finale.
                    <br /><br />
                    Spese di annullamento
                    <br /><br />
                    Se desiderate annullare il nostro servizio, allora:
                    <br /><br />
                    Per tutti i Servizi, ad eccezione dell’interpretazione, se l’Utente annulla i Servizi dopo l’accettazione dell’Ordine da parte nostra, si impegna a pagarci il 50% del prezzo totale dell’Ordine entro il giorno lavorativo successivo alla data di annullamento dell’Ordine e a pagarci il saldo dell’Ordine entro due (2) giorni lavorativi dalla data in cui l’Ordine è stato annullato.
                    <br />
                    Solo per i Servizi di interpretariato, Vi indicheremo nel Preventivo le spese di annullamento che saranno applicate nel caso in cui cancelliate il Vostro Ordine con noi. Accettando un Preventivo che include i Servizi di interpretazione, l’Utente accetta di essere vincolato da eventuali spese di cancellazione che abbiamo specificato nel relativo Preventivo.


                    <br /><br /><br />
                    DIRITTO DI CANCELLAZIONE
                    <br /><br />
                    Se l’utente termina/cancella il contratto per un motivo indicato ai punti da (a) a (e) di seguito, il contratto terminerà immediatamente e l’utente sarà rimborsato per tutti i Servizi che non sono stati forniti o che non sono stati forniti correttamente. I motivi sono
                    <br /><br />
                    Vi abbiamo informato di una prossima modifica dei Servizi o delle presenti Condizioni che non accettate;
                    <br />
                    Vi abbiamo informato di un errore nel prezzo o nella descrizione dei Servizi che avete ordinato e non desiderate procedere;
                    <br />
                    Vi abbiamo comunicato che intendiamo trasferire i nostri diritti ai sensi del Contratto a qualcun altro e che non desiderate procedere;
                    c’è il rischio che la fornitura dei Servizi possa essere significativamente ritardata a causa di eventi al di fuori del nostro controllo; o
                    <br />
                    Abbiamo sospeso la fornitura dei Servizi per motivi tecnici, oppure Vi comunichiamo che li sospenderemo per motivi tecnici, in ogni caso per un periodo di più di un (1) mese.
                    <br /><br />
                    Per la cancellazione potete contattarci alla nostra e-mail info@rafiky.net. In caso di cancellazione, il rimborso è applicabile solo a nostra esclusiva discrezione.
                    <br /><br />
                    Tutti i rimborsi saranno emessi secondo la nostra politica di rimborso. Vi preghiamo di contattarci via e-mail, vi risponderemo entro 3 (Tre) giorni lavorativi.
                    <br /><br />
                    Prendiamo molto seriamente il feedback degli utenti e lo usiamo per migliorare costantemente i nostri prodotti e la qualità del servizio.


                    <br /><br /><br /><br />
                    CANCELLAZIONE PARZIALE
                    <br /><br />
                    Le cancellazioni parziali sono consentite previa conferma da parte del nostro personale di back office. Il rimborso parziale sarà effettuato in caso di cancellazione parziale.
                    <br /><br />
                    ORDINE NON ETICO E POLITICA DI CANCELLAZIONE
                    <br /><br />
                    In caso di acquisto effettuato con mezzi non etici; approfittando di un inconveniente tecnico; o utilizzando in modo improprio / le condizioni di offerta / linee guida / codici – www.rafiky.net l’ordine o gli ordini particolari saranno cancellati in qualsiasi modo e non saremo responsabili di pagare alcun rimborso a voi in tutti questi casi.
                    <br /><br />
                    POLITICA DI RIMBORSO
                    <br /><br /><br /><br />


                    Le nostre politiche di rimborso sono semplici. È possibile richiedere un rimborso da:
                    <br /><br />
                    Inviaci un’e-mail a info@rafiky.net oppure;
                    <br /><br />
                    Siamo lieti di aiutarvi se c’è qualche problema potete contattare il nostro team di back-office per qualsiasi richiesta o problema.
                    <br /><br />
                    Se per qualsiasi motivo, il nostro personale di back office vi darà conferma del rimborso. In tal caso, il rimborso verrà effettuato di conseguenza.
                    <br /><br />
                    Nota: Ci riserviamo il diritto di eventuali modifiche alla politica di rimborso. Qualsiasi cambiamento sarà aggiornato sul nostro sito web.
                    <br /><br />
                    Metodi di pagamento e rimborso
                    <br /><br />
                    Vi rimborseremo il vostro ordine al metodo di pagamento originale, una volta che sarà stato elaborato.
                    <br /><br />
                    Ciclo di rimborso:
                    <br /><br />
                    Il processo di rimborso completo richiede normalmente circa 5-15 giorni lavorativi dalla data di conferma del rimborso.
                </p>
            </div>
        </div>
    )
}

export default Summary

