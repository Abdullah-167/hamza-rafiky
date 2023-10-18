import React, { useState } from 'react'

const NewsLetter: React.FC = () => {

    const [email, setEmail] = useState('');
    const [alertMessage, setAlertMessage] = useState<string | null>(null)

    const handleSubmit = () => {
        if (email === '') {
            setAlertMessage('Please Fill All The Blanks')
            setTimeout(() => {
                setAlertMessage('')
            }, 2000)
        } else {
            setEmail('')
            setAlertMessage('Data Submitted Successfully')
            setTimeout(() => {
                setAlertMessage('')
            }, 2000)
        }
    }

    return (
        <div className='bg-[#2A2828] py-20'>
            <div className='container'>
                <div className='relative max-w-[700px] mx-auto'>
                    <h2 className=' text-[32px] font-bold text-center text-white mb-14'>Become an expert in global event organisation in the digital age</h2>
                    <div className='flex gap-4'>
                        <input className='text-[#777575] text-xs outline-none bg-white py-[14px] px-4 w-full rounded' type="email" placeholder='Email Address*' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className='text-[#FF5D22] bg-[white] text-center px-4 py-[14px] w-full rounded'
                            onClick={handleSubmit}
                        >
                            Get my free newsletter
                        </button>
                    </div>
                    {alertMessage && (
                        <div className={`absolute pt-3 ${alertMessage === 'Data Submitted Successfully' ? 'text-green-500' : 'text-red-500'}`}>
                            {alertMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
