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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Stackgraph_tot_branches() {

  const [totUS, settotUS] = useState({});
  axios.get('http://localhost:4000/p_details/count/US').then((res) => {settotUS(res.data)});

  const [totUK, settotUK] = useState({});
  axios.get('http://localhost:4000/p_details/count/UK').then((res) => {settotUK(res.data)});

  const [totIndia, settotIndia] = useState({});
  axios.get('http://localhost:4000/p_details/count/India').then((res) => {settotIndia(res.data)});

  const [totCanada, settotCanada] = useState({});
  axios.get('http://localhost:4000/p_details/count/Canada').then((res) => {settotCanada(res.data)});

  const [totSingapore, settotSingapore] = useState({});
  axios.get('http://localhost:4000/p_details/count/Singapore').then((res) => {settotSingapore(res.data)});  

  const labels = ["US", "Canada", "India", "UK", "Singapore"];
  
  const options = {
    plugins: {
      legend: {
        display: false,        
      },
      title: {
        display: true,
        text: 'Total Branches Count',        
        color: '#E0E0E0'
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Branches',          
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
        data: [totUS, totCanada, totIndia, totUK, totSingapore],        
        backgroundColor: [
          'rgba(255,127,80, 0.8)',
          'rgba(255,160,122, 0.8)',
          'rgba(255,140,0, 0.8)',
          'rgba(250,128,114, 0.8)',
          'rgba(255,69,0, 0.8)'
        ] ,
        borderRadius: 1000,    
      },      
    ],
  };

  return (
    <div className='shadow-sm'>
     <Bar options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
    </div>
  )
}
