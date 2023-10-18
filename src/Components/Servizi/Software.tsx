import useTranslation from '@/hooks/useTranslation';


const Software = () => {

    const { t } = useTranslation();


    const text = [
        {
            text: t("services_FeaturesFirstpara"),
        },
        {
            text: t("services_FeaturesSecpara"),
        },
        {
            text: t("services_FeaturesThirdpara"),
        },
        {
            text: t("services_FeaturesForthpara"),
        },
        {
            text: t("services_FeaturesFivepara"),
        },
        {
            text: t("services_Featuressixtpara"),
        },
        {
            text: t("services_Featuressevenpara"),
        },

        {
            text: t("services_FeaturesEightpara"),
        },
        {
            text: t("services_FeaturesNinepara"),
        },
        {
            text: t("services_FeaturesTenpara"),
        },
        {
            text: t("services_FeaturesElevenpara"),
        },
        {
            text: t("services_FeaturesTwelvepara"),
        },
        {
            text: t("services_FeaturesTherteenpara"),
        },
        {
            text: t("services_Featuresforteenpara"),
        },
    ]

    return (
        <div className='container'>
            <div className='text-[#969696] py-20'>
                <h2 className='text-center text-black text-[50px] font-semibold pb-9'>{t("services_360degreeTitle")}</h2>
                <p className='text-center pb-8'>{t("services_360degreepara")} </p>
                <p className='text-2xl font-semibold text-black pb-10'>{t("services_FeaturesHeading")} </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-5' >
                    {text.map((item, index) => {
                        return (
                            <li className="flex justify-center items-center" key={index}>
                                <p className="text-base bg-white shadow-md py-2 px-4 rounded-lg w-full">{item.text}</p>
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Software

