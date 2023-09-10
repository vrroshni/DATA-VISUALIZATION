import React from 'react'
import Heading from './Heading/Heading'


const Home = () => {
    return (
        <main id='home' className=' relative flex items-center text-dark w-full h-auto mt-20 md:mt-9 scroll-mt-28'>
            <div className="inline-block z-0  bg-light md:pt-1 pt-0 w-full">
                <div className='flex flex-row items-center justify-between w-full'>
                    <div className="w-full mt-0 md:mt-16 flex flex-col items-center justify-center">
                        <Heading text='Data visualisation' className='!text-3xl md:!text-4xl !text-center font-bold  ' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home