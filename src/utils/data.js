import { faker } from '@faker-js/faker';
import json from '../utils/chartdata.json';
import { AiOutlineLineChart } from 'react-icons/ai';

export const links = [
  {
      id: 1,
      name: 'Image Slider',
      link: 'https://image-slider-red.vercel.app/'
  },
  {
      id: 2,
      name: 'D3 Project',
      link: 'https://data-visualization-xi.vercel.app/'
  },
  {
      id: 3,
      name: 'User Interface',
      link: 'https://user-interface-d285p410d-vrroshni.vercel.app/'
  },

]

export const barchartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Bar Chart'
    }
  },
};



const maxAmount = Math.max(...json.map((x) => x.amount));

export const barChartData = {
  labels: json.map((x) => x.day),
  datasets: [
    {
      backgroundColor: json.map((x) => {
        return x.amount == maxAmount
          ? "hsl(186,34%,60%)"
          : "hsl(10,79%,65%)";
      }),
      data: json.map((x) => x.amount),
      borderRadius: 5,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



export const data1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};




