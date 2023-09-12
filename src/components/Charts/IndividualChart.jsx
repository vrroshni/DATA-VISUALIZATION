import React, { useState } from 'react'
import ShowCharts from './ShowCharts'
import { data, options } from '../../utils/data';
import { ChartMenu } from '../../utils/menu';



/**
 * IndividualChart Component
 *
 * The IndividualChart component displays a single chart type selected by the user.
 * It provides a menu to switch between different chart types.
 */
const IndividualChart = () => {

  // to manage the selected chart type
  const [type, setType] = useState('bar')


  return (
    <div className='flex w-full justify-center items-center'>
      <div className='grid grid-cols-1  w-full  justify-center md:w-auto gap-8 items-center h-auto py-12'>

        {/* Display chart type menu for mobile */}
        <ChartMenu selectedChartType={type} classnames={" md:hidden  md:h-16  w-full flex "} onChartTypeChange={setType} />

        {/* Display the selected chart */}
        <ShowCharts data={data} chartType={type} chartOptions={options} />

        {/* Display chart type menu for desktop */}
        <ChartMenu selectedChartType={type} onChartTypeChange={setType} />
      </div>
    </div>
  )
}

export default IndividualChart