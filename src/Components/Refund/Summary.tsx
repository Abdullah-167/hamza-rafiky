import useTranslation from '@/hooks/useTranslation'


const Summary = () => {

    const { t } = useTranslation();

    return (
        <div className='max-w-[1000px] mx-auto'>
            <div className='text-[#a8a8a8] py-20 px-5'>
                <h2 className='text-black font-semibold pb-3'>{t("refundPolicy_summary_firstHeading")}</h2>
                <p className='pb-3'>{t("refundPolicy_summary_firstPara")}</p>
                <p className='pb-6'>{t("refundPolicy_summary_secPara")}</p>
                <h2 className='text-black font-semibold pb-3'>{t("refundPolicy_summary_secHeading")}</h2>
                <p className='pb-3'>{t("refundPolicy_summary_thirdPara")}</p>
                <p className='pb-3'>{t("refundPolicy_summary_fourthPara")}</p>
                <p className='pb-6'>{t("refundPolicy_summary_fifthPara")}</p>
                <h2 className='text-black font-semibold pb-3'>{t("refundPolicy_summary_thirdHeading")}</h2>
                <p className='pb-3'>{t("refundPolicy_summary_sixthPara")}</p>
                <p className='pb-3'>
                    {t("refundPolicy_summary_seventhPara")}
                </p>
                <p className='pb-3'>  {t("refundPolicy_summary_eigthPara")}</p>
                <p className='pb-3'>{t("refundPolicy_summary_ninthPara")}</p>
                <h2 className='text-black font-semibold pb-3'>{t("refundPolicy_summary_fourthHeading")}</h2>
                <h2 className='text-black font-semibold pb-3'>{t("refundPolicy_summary_fourthHeading")}</h2>
                <p className='pb-6'>· In case of any purchase made through unethical means; by taking advantage of a technical glitch; or by misusing/ the offer terms/guidelines/codes – www.rafiky.net the particular order/s will be cancelled whatsoever and we will not be liable to pay any refund to you in all such cases.</p>
                <h2 className='text-black font-semibold pb-3'>REFUND POLICY</h2>
                <p className='pb-3'>Our refund policies are simple. You can claim a refund by:</p>
                <p className='pb-3'>1.Send us an email at info@rafiky.net or;</p>
                <p className='pb-3'>We are happy to support you if there is any issue you can contact our back-office team for any inquiry or problem.</p>
                <p className='pb-3'>If for any reason, our back office staff gives confirmation of refund. Then, the refund will be made accordingly.</p>
                <p className='pb-6'>Note: We reserves the right of any changes in refund policy. Any changes will be updated on our website.</p>
                <h2 className='text-black font-semibold pb-3'>Methods of Payment and Refund</h2>
                <p className='pb-6'>We will refund your order to the original payment method, once it has been processed.</p>
                <h2 className='text-black font-semibold pb-3'>Refund Cycle:</h2>
                <p className='pb-3'>The Complete refund process normally takes about 5-15 working days from the date of confirmation of refund.</p>
            </div>
        </div>
    )
}

export default Summary