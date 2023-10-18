
import useTranslation from '@/hooks/useTranslation'
import Button from '../Button'
import Image from 'next/image'

const SecComp = () => {

  const { t } = useTranslation()

  const cards = [
    {
      heading: t('zonessDifference_FirstHeading'),
      para: t('zonessDifference_Firstpara'),
    },
    {
      heading: t('zonessDifference_SecHeading'),
      para: t('zonessDifference_Secpara'),
    },
    {
      heading: t('zonessDifference_ThirdHeading'),
      para: t('zonessDifference_Thirdpara'),
    }
  ]

  return (
    <div className=' container'>
      <div className='py-20'>
        <div className='text-[#A8A8A8] text-center max-w-[900px] mx-auto pb-5'>
          <h2 className='text-black text-5xl font-semibold pb-6'>{t('zonessDifference_Title')}</h2>
          <p>{t('zonessDifference_para')}</p>
        </div>
        <div className='flex gap-8 py-10'>
          <div>
            {cards.map((item, index) => {
              return (
                <div className='cards-shadow px-5 py-8 my-5 text-[#A8A8A8] rounded' key={index}>
                  <h4 className='text-[#8300e9] font-semibold text-base pb-3'>{item.heading}</h4>
                  <p className='pb-4'>{item.para}</p>
                </div>
              )
            })}
          </div>
          <div className="min-w-full lg:min-w-[700px] flex justify-between items-center">
          <Image
          className="rounded-3xl"
            loading="lazy"
            src={"/network.jpg"}
            alt={t("alt_img_advantages")}
            width={1000}
            height={0}
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default SecComp


