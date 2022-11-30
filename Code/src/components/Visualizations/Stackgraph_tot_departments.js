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

export function Stackgraph_tot_departments() {

  const [totCounseling, settotCounseling] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Counseling').then((res) => {settotCounseling(res.data)});

  const [totCardiology, settotCardiology] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Cardiology').then((res) => {settotCardiology(res.data)});

  const [totPathology, settotPathology] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Pathology').then((res) => {settotPathology(res.data)});

  const [totPhysiotherapy, settotPhysiotherapy] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Physiotherapy').then((res) => {settotPhysiotherapy(res.data)});

  const [totDentistry, settotDentistry] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Dentistry').then((res) => {settotDentistry(res.data)});

  const [totRadiology, settotRadiology] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Radiology').then((res) => {settotRadiology(res.data)});

  const [totGynaecology, settotGynaecology] = useState({});
  axios.get('http://localhost:4000/p_details/dcount/Gynaecology').then((res) => {settotGynaecology(res.data)});

  
  const labels = ["Counseling", "Cardiology", "Pathology", "Physiotherapy", "Dentistry", "Radiology", "Gynaecology"];
  
  const options = {
    plugins: {
      legend: {
        display: false,        
      },
      title: {
        display: true,
        text: 'Total Departments Count',        
        color: '#E0E0E0'
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Departments',          
          color: '#E0E0E0'
        },
        grid: {          
          color: "  #707070"
        },
        ticks: {
          color: "  #D3D3D3",
          font: {
            size: 12
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
        data: [totCounseling, totCardiology, totPathology, totPhysiotherapy, totDentistry, totRadiology, totGynaecology]  ,
        
        backgroundColor: [
          'rgba(118, 215, 196, 0.8)',
          'rgba(208, 236, 231, 0.8)',
          'rgba(115, 198, 182, 0.8)',
          'rgba(171, 235, 198, 0.8)',
          'rgba(72, 201, 176, 0.8)',
          'rgba(208, 236, 231, 0.8)',
          'rgba(118, 215, 196, 0.8)'
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

