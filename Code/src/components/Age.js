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

export default function Age() {

  const [tot0_18, settot0_18] = useState({});
  axios.get('http://localhost:4000/p_details/acount/0_18').then((res) => {settot0_18(res.data)});

  const [tot19_40, settot19_40] = useState({});
  axios.get('http://localhost:4000/p_details/acount/19_40').then((res) => {settot19_40(res.data)});

  const [tot41_60, settot41_60] = useState({});
  axios.get('http://localhost:4000/p_details/acount/41_60').then((res) => {settot41_60(res.data)});

  const [tot61_100, settot61_100] = useState({});
  axios.get('http://localhost:4000/p_details/acount/61_100').then((res) => {settot61_100(res.data)});
   

  const labels = ["0 - 18", "19 - 40", "41 - 60", "61 - 100"];
  
  const options = {
    plugins: {
      legend: {
        display: false,        
      },
      title: {
        display: true,
        text: 'Total Age Count',        
        color: '#E0E0E0'
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age',          
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
        data: [tot0_18, tot19_40, tot41_60, tot61_100],        
        backgroundColor: [
          'rgba(216,191,250, 0.8)',
          'rgba(153,50,204, 0.8)',
          'rgba(238,130,238, 0.8)', 
          'rgba(230,230,250, 0.8)',         
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
