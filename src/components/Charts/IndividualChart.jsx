import React from 'react'
import ShowCharts from './ShowCharts'
import {options } from '../../utils/data'

const IndividualChart = ({type,data}) => {
  return (
    <div className=' flex w-full justify-center items-center'>
    
    <ShowCharts data={data} chartType={type} chartOptions={options} />
   
</div> 
    )
}

export default IndividualChart