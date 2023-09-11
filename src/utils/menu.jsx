import { AiOutlineLineChart, AiOutlinePieChart } from "react-icons/ai";
import { BiDoughnutChart } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { IoBarChartOutline } from "react-icons/io5";
const size=27
const menuitems = [
  {
    id: 1,
    charttype: "bar",
    icon: <IoBarChartOutline className='rounded-full h-11 w-8' size={size} />

  },
  {
    id: 2,
    charttype: "line",
    icon: <AiOutlineLineChart className='rounded-full h-11 w-11' size={size} />

  },
  {
    id: 3,
    charttype: "pie",
    icon: <AiOutlinePieChart className='rounded-full h-11 w-11' size={size} />

  },
  {
    id: 4,
    charttype: "doughnut",
    icon: <BiDoughnutChart className='rounded-full h-11 w-11' size={size} />

  }
]



export const ChartMenu = ({classnames="hidden md:w-16 h-80 right-2 absolute top-28 md:flex flex-col", selectedChartType, onChartTypeChange }) => {
  return (
    <div className={`${classnames} bg-slate-300 rounded-full px-4   justify-evenly items-center border border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] text-textcolor`}>
      {menuitems.map(({ id, charttype, icon }) => (
        <div
          key={id}
          onClick={() => onChartTypeChange(charttype)}
          className={`rounded-full p-2 ${
            charttype === selectedChartType
              ? "bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white"
              : "hover:bg-gray-100 bg-gray-200"
          } cursor-pointer transition-all`}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};


