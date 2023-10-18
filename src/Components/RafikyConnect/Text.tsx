import React from 'react'

const Text = () => {
    return (
        <div className='container'>
            <div>
                <h2 className='text-4xl text-center font-semibold py-10 sm:py-20 max-w-[900px] mx-auto'>A 360-degree-view software suitable for any kind of event online</h2>
                <p className='text-2xl text-center font-semibold w-[900px] mx-auto'>Thanks to the fusion of Remote Simultaneous Interpreting and a user-friendly, and straightforward interpretation app, Rafiky makes every event accessible to the diverse audience.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-5 max-w-[980px] mx-auto gap-x-4 py-10 bg-[#8300E9] text-white px-10 rounded-2xl shadow-lg my-10'>
                    {data.map((item, index) => {
                        return (
                            <div className='max-w-[200px]' key={index}>
                                <li>{item}</li>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Text



const data = [

    'Custom branding',
    'Platform suitable for any devices',
    'Up to 10’000 Participants',
    'PPT & Video Upload',
    'Up to 200 Languages available',
    'Q/A – Online voting system',
    'Panel Translation ',
    'Reporting',
    'Speaker Information',
    'Speaker Timer',
    'Streaming on Social Media',
    'Sign Language Video Box',
    'Breakout rooms',
    'Audio/Video recording in all languages'
]