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
import axios from 'axios';
import Sidebar from './Sidebar';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Gender() {

  const [totFemale, settotFemale] = useState({});
  axios.get('http://localhost:4000/p_details/gcount/Female').then((res) => {settotFemale(res.data)});

  const [totMale, settotMale] = useState({});
  axios.get('http://localhost:4000/p_details/gcount/Male').then((res) => {settotMale(res.data)});

  const [totOther, settotOther] = useState({});
  axios.get('http://localhost:4000/p_details/gcount/Other').then((res) => {settotOther(res.data)});
   

  const labels = ["Male", "Female", "Other"];
  
  const options = {
    plugins: {
      legend: {
        display: false,        
      },
      title: {
        display: true,
        text: 'Total Gender Count',        
        color: '#E0E0E0'
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Gender',          
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
        data: [totMale, totFemale, totOther],        
        backgroundColor: [
          'rgba(98,163,104, 0.8)',
          'rgba(127,219,172, 0.8)',
          'rgba(100,169,60, 0.8)',          
        ] ,
        borderRadius: 1000, 
        barThickness: 100, 
      },      
    ],
  };

  return (

    <div>
      <div className='row g-0'>
      <div className='col-2 '>
         <Sidebar height='44vmax'/>
      </div>
      <div className='col-10'>
        <div style={{padding: '20px'}}>
          <div className='shadow-sm'>
          <Bar options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
          </div>
        </div>
      </div>      
    </div>
    </div>

  )
};
