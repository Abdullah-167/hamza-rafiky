
import Button from '../Button'
import { IoIosArrowDown } from 'react-icons/io';
import BgImage from '../../../public/frame3.webp'

const Hero = () => {
    return (
        <div className='main-cpmBg'
            style={{
                backgroundImage: `url(${BgImage.src})`
            }}>
            <div className='container'>
                <div className='flex justify-center items-center gap-10'>
                    <div className='pb-20 sm:pb-32'>
                        <div className='mb-12'>
                            <h2 className='text-[30px] sm:text-[60px] md:text-[79px] text-white font-bold mx-auto max-w-[1100px] text-center leading-[1.2em] pt-20 pb-12'>RAFIKY INTEGRAZIONE CON MICROSOFT TEAMS</h2>
                            <p className='text-base sm:text-[20px] font-medium text-white mx-auto max-w-[750px] text-center leading-9'><span className=' font-bold'> Video interpretariato a distanza</span>, cos’è e come funziona? Scopri di più sul nostro servizio di interpretariato da remoto!</p>
                        </div>
                        <div className='flex justify-center'>
                            <Button text={'Richiedi un preventivo'} color={'black'} backgroundColor={'white'} minWidth={undefined} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

