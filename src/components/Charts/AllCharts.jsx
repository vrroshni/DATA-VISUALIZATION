import React from 'react'
import ShowCharts from './ShowCharts'
import { data, data1, options } from '../../utils/data'


/**
 * AllCharts Component
 *
 * The AllCharts component displays a collection of different chart types.
 * It provides options to customize each chart individually.
 */


const AllCharts = () => {
    return (
        <div  className='flex w-full justify-center items-center'>
            <div className=' grid grid-cols-1 xl:grid-cols-2  gap-8  w-full md:w-auto mt-10' >
                <ShowCharts data={data} chartType="bar" chartOptions={options} />
                <ShowCharts data={data} chartType="line" chartOptions={options} />
                <ShowCharts data={data1} chartType="doughnut" chartOptions={options} />
                <ShowCharts data={data1} chartType="pie" chartOptions={options} />
            </div>
        </div>
    )
}

export default AllCharts