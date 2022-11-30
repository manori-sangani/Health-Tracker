import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Barchart_age() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
      title: {
        display: true,
        text: 'Age Wise Patient Count',
      },
    },
  };
  
  const labels = ['Below 18', 'Between 18 and 25', 'Above 25'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(118, 215, 196, 0.8)',
      }
    ],
  };  

  return (
    <div className='shadow-sm'>
     <Bar options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
    </div>
  )
}
