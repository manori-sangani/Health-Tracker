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

export function Stackgraph_tot_machines() {

  const [machines, setMachines] = useState([]);  
  useEffect(() => {
    fetch('http://localhost:8090/api/userinfo/totmach')
      .then(resp => resp.json()).then(resp => setMachines(resp))  
  }, []);

  const labels = machines.map(machine => machine.MachineID);
  
  const options = {
    plugins: {
      legend: {
        display: false,        
      },
      title: {
        display: true,
        text: 'Total Machines Count',        
        color: '#E0E0E0'
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Machines',          
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
        data: machines.map(machine => machine.mcount)  ,
        barThickness: 35, 
        backgroundColor: [
          'rgba(118, 215, 196, 0.8)',
          'rgba(208, 236, 231, 0.8)',
          'rgba(115, 198, 182, 0.8)',
          'rgba(171, 235, 198, 0.8)',
          'rgba(72, 201, 176, 0.8)'
        ] ,
        borderRadius: 20,    
      },      
    ],
  };

  return (
    <div className='shadow-sm'>
     <Bar options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
    </div>
  )
}
