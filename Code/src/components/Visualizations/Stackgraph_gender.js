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

export function Stackgraph_gender() {

  const [months, setMonths] = useState([]);  
  useEffect(() => {
    fetch('http://localhost:8090/api/userinfo/month')
      .then(resp => resp.json()).then(resp => setMonths(resp))  
  }, []);

  const labels = months.map(month => month);

  const [fem, setFem] = useState([]);  
  useEffect(() => {
    fetch('http://localhost:8090/api/userinfo/month/Female')
      .then(resp => resp.json()).then(resp => setFem(resp))  
  }, []);

  const [mal, setMal] = useState([]);  
  useEffect(() => {
    fetch('http://localhost:8090/api/userinfo/month/Male')
      .then(resp => resp.json()).then(resp => setMal(resp))  
  }, []);

  const [oth, setOth] = useState([]);  
  useEffect(() => {
    fetch('http://localhost:8090/api/userinfo/month/Female')
      .then(resp => resp.json()).then(resp => setOth(resp))  
  }, []);

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#B0B0B0'
      } 
      },
      title: {
        display: true,
        text: 'Gender Wise Patient Count',
        font: {
          size: 16          
        },
        color: '#E0E0E0'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Month',
          font: {
            size: 15
          },
          color: '#E0E0E0'
        },
        grid: {          
          color: "  #707070"
        },
        ticks: {
          color: "  #D3D3D3",
          font: {
            size: 13
          }
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Patient Count',
          font: {
            size: 15
          },
          color: '#E0E0E0',   
        },
        grid: {          
          color: "  #707070"
        },
        ticks: {
          color: "  #D3D3D3"
        },
      },
    },
  };
    
  const data = {
    labels,
    datasets: [
      {
        label: 'Female',
        data: fem.map(gen => gen.gcount),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Male',
        data: mal.map(gen => gen.gcount),
        backgroundColor: 'rgb(255,218,3)',
      },
      {
        label: 'Other',
        data: oth.map(gen => gen.gcount),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

  return (
    <div className='shadow-sm'>
     <Bar options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
    </div>
  )
}
