import React, { useState } from 'react'
import AllCharts from './Charts/AllCharts';
import IndividualChart from './Charts/IndividualChart';

const ChartsArea = () => {
    const categories = ["All Charts", "Indivial charts"]
    const [active, setActive] = useState(categories[0])

    return (
        <div className="flex w-full justify-center items-center h-full mt-10">
            <div className='bg-white relative shadow-2xl shadow-gray-500 w-3/4 rounded-xl px-4 md:px-14 pt-3 h-full'>
                <div className='flex w-full justify-center items-center'>

                    <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
                        {categories.map((category) => (
                            <span key={category} onClick={() => setActive(category)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${active === category ? "bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white" : "hover:bg-gray-100 bg-gray-200"} cursor-pointer transition-all`}>
                                {category}
                            </span>
                        ))}


                    </div>
                </div>
                {
                    active == categories[0] ?
                        <AllCharts />
                        :
                        <IndividualChart  />
                }


            </div>
        </div>
    )
}

export default ChartsArea