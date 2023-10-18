import Image from 'next/image'

import Button from '../Button'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Vedio = () => {
    return (
        <div className='vedio-bg'>
            <div className='container relative'>
                <div className='flex flex-col lg:flex-row gap-16 sm:gap-24 py-20 sm:py-32'>
                    <div className='w-full flex justify-between items-center h-[300px] sm:h-[600px]'>
                        <LiteYouTubeEmbed title='rafiky' id="K1xWE4MdmTY"></LiteYouTubeEmbed>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vedio


const data = [
    {
        heading: 'Affidati a noi',
    },
    {
        para: 'Rafiky gestisce l’intera organizzazione della conferenza, nel caso questo venga richiesto. Il nostro team può occuparsi della programmazione in ogni singolo dettaglio, dalla fase pre-evento alla fase post-evento. Questo include una serie di servizi e offerte, quali la possibilità di personalizzare il logo o il “sottopancia relatore”, la creazione di un sito web finalizzato unicamente alla promozione o all’iscrizione all’evento, o ancora la possibilità di richiedere più interpreti e più combinazioni linguistiche di traduzione.'
    },
    {
        para: 'Rafiky vanta di un’illimitata rete di interpreti specializzati in diversi settori e madrelingua per più di 200 lingue in totale. Un servizio davvero esclusivo è quello dell’interpretariato in Lingua Dei Segni, fondamentale al fine di rendere la vostra web conferencing ancor più accessibile e inclusiva.  '
    }
]