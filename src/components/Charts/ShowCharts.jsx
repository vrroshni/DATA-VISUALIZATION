import { Chart } from 'react-chartjs-2';
import 'chart.js/auto'

import { useState } from "react";
import Modal from "../modal/Modal";
import Button from "../buttons/Buttons";
import toast from "react-hot-toast";


const ShowCharts = ({ data, chartType, chartOptions }) => {
    const [isloading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [customOptions, setCustomOptions] = useState({
        borderColor: "",
        borderWidth: null,
    });
    const [customBackgroundColor, setCustomBackgroundColor] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true)
        setCustomBackgroundColor(true);
        console.log(data)
        console.log(data.target.borderColor.value, data.target.borderWidth.value);
        setCustomOptions(() => ({
            borderColor: data.target.borderColor.value,
            borderWidth: data.target.borderWidth.value,

        }));

        renderChart()
        setIsLoading(false)
        onClose()
        toast.success("Chart is customised successfully")
    };


    const renderChart = () => {
        if (!data) {
            return <div>Loading data...</div>;
        }

        const mergedData = customBackgroundColor ? {
            ...data,
            datasets: data?.datasets?.map((dataset) => ({
                ...dataset,
                borderColor: customOptions.borderColor,
                borderWidth: customOptions.borderWidth,

            })),
        } : data
        return < Chart type ={chartType} options={chartOptions} data = { mergedData } />
    };

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const bodyContent = (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
                <div>
                    <label class="block mb-2 text-sm font-medium text-textcolor">
                        Border Color:
                    </label>
                    <input
                        type="color"
                        name="borderColor"
                        class="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        disabled={isloading}
                        placeholder={"Change the Border Color"}
                    />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-textcolor">
                        Border Color:
                    </label>
                    <input
                        type="text"
                        name="borderWidth"
                        class="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        disabled={isloading}
                        placeholder={"Change the Border Width"}
                    />
                </div>

            </div>
            <div className="flex items-center justify-center gap-4 mt-3">
                <hr />
                <div className='flex items-center justify-center mt-4'>
                    <div className='w-40'>
                        <Button type='submit' label={"Customize chart"} onClick={onOpen} />
                    </div>
                </div>
            </div>
        </form>
    )

    return (
        
        <>
            <div className=" w-auto md:w-96 lg:w-[29rem] xl:w-[23rem] 2xl:w-[31rem]  h-auto   ">
                <div className='shadow-md shadow-gray-600 rounded-lg hover:bg-gray-100 transition flex flex-col justify-center items-center'>
                    {renderChart()}
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <div className='w-40'>
                        <Button label={"Customize Chart"} onClick={onOpen} />
                    </div>
                </div>

            </div>
            <Modal
                disabled={isloading}
                isOpen={isOpen}
                onClose={onClose}
                title='Customize Slider'
                actionLabel='Continue'
                body={bodyContent}
            />
        </>
    )
}

export default ShowCharts