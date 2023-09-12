import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto'

import { useRef, useState } from "react";
import Modal from "../modal/Modal";
import Button from "../buttons/Buttons";
import toast from "react-hot-toast";

/**
 * ShowCharts Component
 *
 * The ShowCharts component displays a chart based on provided data and chart type.
 * It allows users to customize the chart's appearance, such as border color and width.
 *
 * @param {object} data - Chart data to be displayed.
 * @param {string} chartType - Type of chart to render (e.g., "bar", "line", "pie", "doughnut").
 * @param {object} chartOptions - Options for configuring the chart's appearance and behavior.
 */


const ShowCharts = ({ data, chartType, chartOptions }) => {
    const [isloading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(chartOptions.plugins.title.text);

    const [customBackgroundColor, setCustomBackgroundColor] = useState(false);

    console.log(chartOptions.plugins.title.text, "beforeeeeeeee")
    console.log(title, "beforeeeeeeee")


    // Ref for chart rendering
    const chartRef = useRef(null);

    const [customOptions, setCustomOptions] = useState({
        borderColor: "",
        borderWidth: null,
    });


    // Handle form submission to customize the chart
    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true);

        const borderColor = e.target.borderColor.value;
        const borderWidth = e.target.borderWidth.value;

        if (borderColor && !borderWidth) {
            setIsLoading(false);
            toast.error("Please specify  a border width.");
            return;
        }

        if (!title) {
            toast.error("Please specify  a Chart title");
        }

        chartOptions.plugins.title.text = title 
        
        // Set custom options for the chart
        setCustomOptions(() => ({
            borderColor: borderColor,
            borderWidth: borderWidth,
        }));
        setCustomBackgroundColor(true)
        renderChart();
        setIsLoading(false);
        onClose();
        toast.success("Chart is customized successfully");
    };

    // Function to render the chart with custom options
    const renderChart = () => {
        // Check if the chartRef exists and destroy it to prevent duplicates
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Check if data exists
        if (!data) {
            return <div>Loading data...</div>;
        }
        // Merge custom options with data
        const mergedData = customBackgroundColor ? {
            ...data,
            datasets: data?.datasets?.map((dataset) => ({
                ...dataset,
                borderColor: customOptions.borderColor,
                borderWidth: customOptions.borderWidth,

            })),
        } : data


       
        switch (chartType) {
            case 'bar':
                return <Bar data={mergedData} options={chartOptions} />;
            case 'line':
                return <Line data={mergedData} options={chartOptions} />;
            case 'pie':
                return <Pie data={mergedData} options={chartOptions} />;
            case 'doughnut':
                return <Doughnut data={mergedData} options={chartOptions} />;
            default:
                return <div>Invalid chart type</div>;
        }
    };


    // Handle modal
    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    // Content for the modal body
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
                        Chart Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        name="borderColor"
                        class="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                        disabled={isloading}
                        placeholder={"Change the Title"}
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
                    {/* rendering Chart */}
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