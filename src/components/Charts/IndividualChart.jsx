import React, { useState } from 'react'
import ShowCharts from './ShowCharts'
import { data, options } from '../../utils/data';
import { ChartMenu } from '../../utils/menu';

const IndividualChart = () => {
  const [type, setType] = useState('bar')
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='grid grid-cols-1  w-full  justify-center md:w-auto gap-8 items-center h-auto py-12'>
        <ChartMenu selectedChartType={type} classnames={" md:hidden  md:h-16  w-full flex "} onChartTypeChange={setType} />
        <ShowCharts data={data} chartType={type} chartOptions={options} />
        <ChartMenu selectedChartType={type} onChartTypeChange={setType} />
      </div>
    </div>
  )
}

export default IndividualChart