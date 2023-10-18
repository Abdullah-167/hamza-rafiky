import Button from "@/Components/Button";
import useTranslation from "@/hooks/useTranslation";
import GetLocale from "@/hooks/getLocale";
import { freeQuoteSlug } from "@/utils";
import Link from "next-translate-routes/link";

const Text = () => {
  const { t } = useTranslation();
  const locale = GetLocale();
  //@ts-ignore
  const slug = `/${locale}/${freeQuoteSlug[locale]}`;
  const text = [
   
    {
      heading: t("italianFrench_Heading"),
      para: t("italianFrench_para"),
      btnText: t("italianFrench_Btn"),
    },
    {
      heading: t("whyChoose_Heading"),
      para: t("whyChoose_para"),
      btnText: t("whyChoose_Btn"),
    },
    {
      heading: t("frenchInterpreter_Heading"),
      para: t("frenchInterpreter_para"),
      btnText: t("frenchInterpreter_Btn"),
    },
  ];
  return (
    <div className="container">
      <div className="py-24">
        {text.map((item, index) => {
          return (
            <Link href={slug} key={index}>
              <div className="py-10">
                <strong className="text-2xl font-semibold pb-3">{item.heading}</strong>
                <p className="text-base font-normal pb-4 leading-8">
                  {item.para}
                </p>
                <Button
                  text={item.btnText}
                  color={"white"}
                  backgroundColor={"#8624E1"}
                  minWidth={undefined}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Text;

const text = [
  {
    heading:
      " Servizi di Interpretariato Italiano Francese per la Tua Azienda!         ",
    para: (
      <p>
        Sei alla ricerca di un interprete francese che ti garantisca una
        traduzione affidabile e in tempi brevi? Rafiky seleziona i migliori
        professionisti di madrelingua francese per aiutarti a trovare una rapida
        soluzione.
        <p className="py-4">
          Il francese è più complesso del previsto, e può risultare difficile
          per chi non conosce i segreti della sua grammatica. Gli intepreti di
          Rafiky, abituati a lavorare velocemente e con dedizione, si impegnano
          per offrirti un servizio fuori dal comune.
        </p>
        <p>
          Qualsiasi sia la tua richiesta, proveremo ad accontentarti con la
          dovuta attenzione e professionalità.
        </p>
        <p className="py-4">
          Su Rafiky, puoi trovare servizi di interpretariato francese italiano
          che riguardano diversi settori. Dal mondo dei congressi fino a quello
          degli uffici legali, troverai tutto quello di cui hai bisogno.
          Addirittura, potrai avere accesso ad un sistema di interpretariato in
          lingua francese e lis, con un interprete Lingua Dei Segni
          dall’italiano al francese.{" "}
        </p>
      </p>
    ),
    btnText: "Richiedi un preventivo",
  },
  {
    heading:
      "Perché scegliere un servizio di interpretariato remoto in francese",
    para: (
      <p>
        L’aiuto di un interprete professionale francese, può assicurarti
        chiarezza e sicurezza nei tuoi incontri a distanza.
        <p className="py-4">
          Il servizio di interpretariato remoto in francese di Rafiky, è pensato
          proprio per farti risparmiare tempo e denaro. Non dovendo contattare
          un interprete francese fisico, ma potendo usufurire del servizio
          online, risparmierai tantissimo.{" "}
        </p>
        <p>
          Potrai assicurarti un sistema di webconferencing con interprete
          francese ovunque ti trovi e in qualsiasi momento, approfittando della
          rapidità di Rafiky.{" "}
        </p>
        <p className="py-4">
          Un interprete professionale dall’italiano al francese sarà sempre a
          tua disposizione per qualsiasi emergenza, aiutandoti a risolvere le
          situazioni impreviste.{" "}
        </p>
        <p>
          {" "}
          Inoltre, potrai assicurare assistenza a tutti i tipi di partecipanti,
          aiutando tutti a godersi l’evento.{" "}
        </p>
        <p className="py-4">
          Scegliendo il servizio di interpretariato in lingua francese e lis,
          potrai selezionare un interprete Lingua Dei Segni dall’italiano al
          francese, in grado di prendersi cura di tutti i tuoi ospiti.{" "}
        </p>
      </p>
    ),
    btnText: "Richiedi un preventivo",
  },
  {
    heading:
      "Rafiky, il tuo servizio di webconferencing con interprete francese ",
    para: (
      <p>
        Trova il tuo interprete professionale dall’italiano al francese di
        fiducia attraverso il sistema Rafiky.
        <p className="py-4">
          Traduttori, madrelingua, esperti e interpreti in arrivo da tutto il
          mondo, sanno come accompagnarti nel tuo percorso di crescita
          professionale. L’interpretariato è una grande arma, a tua disposizione
          per accrescere il tuo potere di vendita.{" "}
        </p>
        <p>
          Sfruttalo nel modo giusto, scopri come individuare il perfetto
          interprete professionale francese per la tua azienda.{" "}
        </p>
        <p className="py-4">
          Richiedi un preventivo immediato per risolvere qualsiasi dubbio!
        </p>
      </p>
    ),
    btnText: "Richiedi un preventivo",
  },
];
