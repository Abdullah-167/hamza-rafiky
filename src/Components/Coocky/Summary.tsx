import useTranslation from '@/hooks/useTranslation'


const Summary = () => {

    const { t } = useTranslation();

    const data = [
        {
            text: t("cookiePolicy_para"),
        },
        {
            text: t("cookiePolicy_SecTitle"),
        },
        {
            text: t("cookiePolicy_SecTitlepara"),
        },
        {
            text: t("cookiePolicy_ThirdTitle"),
        },
        {
            text: t("cookiePolicy_ThirdTitlepara"),
        },
        {
            text: t("typesCategory_Title"),
        },
        {
            text: t("typesCategory_para"),
        },
        {
            text: t("typesCategory_FirstSubTitle"),
        },
        {
            text: t("typesCategory_FirstSubTitlepara"),
        },
        {
            text: t("typesCategory_SecSubTitle"),
        },
        {
            text: t("typesCategory_ThirdSubTitle"),
        },
        {
            text: t("typesCategory_ThirdSubTitlepara"),
        },
    ]
    return (
        <div className='max-w-[1000px] m-auto'>
            <div className='py-20'>
                {data.map((item, index) => {
                    return (
                        <p className='text-[#666666] py-2' key={index}>{item.text}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Summary

