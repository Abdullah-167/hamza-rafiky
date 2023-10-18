import useTranslation from "@/hooks/useTranslation";
import { Link } from "next-translate-routes";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "../Button";
const Domande = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDropDownClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container">
      <div className="px-5 pb-20">
        <h2 className="text-black text-4xl sm:text-6xl text-center font-medium pb-8 sm:pb-20">
          {t("qa")}
        </h2>
        <div className=" gap-10 pb-20">
          {t("faqData").map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index}>
                <div
                  className=" cursor-pointer border border-[#d2d2d2] px-4 py-5 my-4"
                  onClick={() => handleDropDownClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#282729]  cursor-pointer font-normal text-xl mb-2">
                      {item.heading}
                    </h2>
                    <span
                      className={`text-3xl transition-all  ${activeIndex === index
                          ? "rotate-180 duration-300"
                          : "rotate-[360deg]"
                        } duration-300`}
                    >
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                  <div
                    className={`${isActive
                        ? "max-h-96 duration-700 ease-in-out transition-all opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none duration-700"
                      }`}
                  >
                    <p className="text-[#5b5757] py-2 text-[15px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="flex justify-center">
          <Link href={'/contattaci'}>
            <Button
              text={"FAI UNA DOMANDA"}
              color={"white"}
              backgroundColor={"#8300E9"}
              minWidth={undefined}
            />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Domande;

const data = [
  {
    heading: "Come funziona Rafiky?",
    para: "Viene creato un account sulla nostra piattaforma, per la prima volta in Italia, sviluppata completamente da noi, sia per i clienti sia per gli interpreti, in seguito il cliente potrà selezionare la conferenza alla quale vuole partecipare e la lingua di ascolto, ed ecco! Il gioco è fatto!",
  },
  {
    heading: "Per quali combinazioni linguistiche? ",
    para: "Traduciamo da e verso più di 200 lingue, grazie al ai nostri 6000 interpreti, che abbiamo selezionato e continuiamo a selezionare con cura per garantire il miglior servizio d’interpretariato del settore. Inoltre siamo disponibili in più di 60 paesi, sia per quanto riguarda il settore pubblico, sia il privato.",
  },
  {
    heading: "Quant’è il risparmio dei costi con Rafiky?",
    para: "Riduciamo il costo dell’interpretariato dell’80 percento circa.",
  },
  {
    heading: "Quali sistemi vengono utilizzati perla privacy?",
    para: "Utilizziamo i server più sicuri sul mercato, importantissimi quando si tratta di conferenze che necessitano di un determinato standard di privacy.",
  },
  {
    heading:
      "La piattaforma consente di condividere file nonché lo schermo durante l’evento? È inoltre possibile registrare le singole sessioni? ",
    para: "Si, la piattaforma consente di fare sia sharing dello screen, sia di condividere file e presentazioni. È poi possibile fare sia la registrazione video, sia audio in originale, in tutte le lingue per le quali abbiamo fornito l’interpretariato durante la conferenza. Esse necessitano costi aggiuntivi che naturalmente aggiungeremo in fase di preventivo.",
  },
  {
    heading: "In caso di particolari richieste disponete di interpreti 24/7?",
    para: "Senza alcun dubbio! I nostri interpreti sono sempre disponibili.",
  },
  {
    heading:
      "Un evento ha diversi convegni in diverse sale. È possibile utilizzare Rafiky?",
    para: "Certamente! Questo è proprio uno di quei casi in cui risulta particolarmente costoso l’utilizzo di cabine, in diverse sale. Con Rafiky sarà sufficiente predisporre un computer collegato a una connessione internet in ogni sala.",
  },
  {
    heading:
      "Se il cliente volesse utilizzare i propri interpreti, prevedete un training specifico?   ",
    para: "Assolutamente si e soprattutto senza costi aggiuntivi!",
  },
  {
    heading:
      "Se non c’è una connessione internet nel luogo in cui voglio utilizzare Rafiky? ",
    para: "Collaboriamo con aziende che si occupano anche di questo, così da poter garantire il servizio ovunque senza difficoltà.",
  },
  {
    heading: "Se i partecipanti all’evento non avessero le proprie cuffie?",
    para: "In accordo con l’organizzatore dell’evento, possiamo fornire auricolari monouso, cuffie e powerbank / batterie ausiliarie di ricarica di riserva così, se qualcuno tra il pubblico avesse necessità, potrà chiederli comodamente nel luogo dell’evento.",
  },
  {
    heading: "Il numero di accessi alla piattaforma è illimitato?  ",
    para: "Il Numero di accessi è limitato in base al pacchetto di abbonamento. ",
  },
  {
    heading:
      "In merito invece al supporto tecnico, si tratta di un monitoraggio continuo o prevedete una modalità di assistenza diversa?  Qual è il ruolo del tecnico? ",
    para: "Il ruolo dei nostri tecnici è fare in modo che l’evento si svolga nel migliore dei modi, grazie ad un monitoraggio continuo. Egli risulta essere un vero e proprio monitoratore, sia per quanto riguarda l’interpretariato sia per quanto riguarda il pubblico presente in sala.",
  },
];
