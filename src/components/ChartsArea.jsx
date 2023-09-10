import React, { useState } from 'react'
import AllCharts from './Charts/AllCharts';
import { AiOutlineLineChart } from 'react-icons/ai';
import { data, options } from '../utils/data';
import IndividualChart from './Charts/IndividualChart';

const ChartsArea = () => {
    const categories = ["All Charts", "Indivial charts"]
    const [active, setActive] = useState(categories[0])

    return (
        <div className="flex w-full justify-center items-center h-full mt-10">
            <div className='bg-white relative shadow-2xl shadow-gray-500 w-3/4 rounded-xl px-4 md:px-14 pt-3 min-h-screen'>
                <div className='flex w-full justify-center items-center'>

                    <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
                        {categories.map((category) => (
                            <span onClick={() => setActive(category)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${active === category ? "bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white" : "hover:bg-gray-100 bg-gray-200"} cursor-pointer transition-all`}>
                                {category}
                            </span>
                        ))}


                    </div>
                </div>
                {
                    active == categories[0] ?
                        <AllCharts />
                        :
                        <div>
                            {/* <IndividualChart data={data} chartType="bar" chartOptions={options} /> */}
                            <div className="w-16 bg-slate-300 rounded-full h-4/6  absolute right-2 top-40 flex  flex-col justify-evenly items-center border border-white border-opacity-40  bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] text-textcolor">
                                <AiOutlineLineChart className='rounded-full h-11 w-11 ' size={24} />
                                <AiOutlineLineChart className='rounded-full h-11 w-11 ' size={24} />
                                <AiOutlineLineChart className='rounded-full h-11 w-11 ' size={24} />
                                <AiOutlineLineChart className='rounded-full h-11 w-11' size={24} />
                            </div>
                        </div>
                }


            </div>
        </div>
    )
}

export default ChartsArea