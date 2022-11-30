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
  
  export function Barchart_region() {
  
    const [regions, setRegions] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region')
        .then(resp => resp.json()).then(resp => setRegions(resp))  
    }, []);
  
    const labels = regions.map(region => region.UserLoc);
      
    const [jan, setJan] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/January')
        .then(resp => resp.json()).then(resp => setJan(resp))
    }, []);
  
    // var jan_arr = toArray(jan);
    // console.log(jan_arr);
  
    const [feb, setFeb] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/February')
        .then(resp => resp.json()).then(resp => setFeb(resp))  
    }, []);
  
    const [mar, setMar] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/March')
        .then(resp => resp.json()).then(resp => setMar(resp))  
    }, []);
  
    const [apr, setApr] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/April')
        .then(resp => resp.json()).then(resp => setApr(resp))  
    }, []);
  
    const [may, setMay] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/May')
        .then(resp => resp.json()).then(resp => setMay(resp))  
    }, []);
  
    const [jun, setJun] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/June')
        .then(resp => resp.json()).then(resp => setJun(resp))  
    }, []);
  
    const [jul, setJul] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/July')
        .then(resp => resp.json()).then(resp => setJul(resp))  
    }, []);
  
    const [aug, setAug] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/August')
        .then(resp => resp.json()).then(resp => setAug(resp))  
    }, []);
  
    const [sep, setSep] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/September')
        .then(resp => resp.json()).then(resp => setSep(resp))  
    }, []);
  
    const [oct, setOct] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/October')
        .then(resp => resp.json()).then(resp => setOct(resp))  
    }, []);
  
    const [nov, setNov] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/November')
        .then(resp => resp.json()).then(resp => setNov(resp))  
    }, []);
  
    const [dec, setDec] = useState([]);  
    useEffect(() => {
      fetch('http://localhost:8090/api/userinfo/region/December')
        .then(resp => resp.json()).then(resp => setDec(resp))  
    }, []);
    
    
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#B0B0B0'
        }        
        },
        title: {
          display: true,
          text: 'Region Wise Patient Count',
          font: {
            size: 16          
          },
          color: '#E0E0E0'
        },
      },
      scales: {
        y: {
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
        x: {
          title: {
            display: true,
            text: 'Region',
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
          },
        }
      },
    };
   
    const data = {
      labels,
      datasets: [
        {
          label: 'January',
          // data: jan_arr,
          data: jan.map(mt => mt.tcount),
          backgroundColor: '#5E8C31',
          
        },
        {
          label: 'February',
          data: feb.map(mt => mt.tcount),
          backgroundColor: '#7BA05B',
        },
        {
          label: 'March',
          data: mar.map(mt => mt.tcount),
          backgroundColor: '#9DE093',
        },
        {
          label: 'April',
          data: apr.map(mt => mt.tcount),
          backgroundColor: '#63B76C',
        },
        {
          label: 'May',
          data: may.map(mt => mt.tcount),
          backgroundColor: '#93DFB8',
        },
        {
          label: 'June',
          data: jun.map(mt => mt.tcount),
          backgroundColor: '#33CC99',
        },
        {
          label: 'July',
          data: jul.map(mt => mt.tcount),
          backgroundColor: '#01786F',
        },
        {
          label: 'August',
          data: aug.map(mt => mt.tcount),
          backgroundColor: '#00CCCC',
        },
        {
          label: 'September',
          data: sep.map(mt => mt.tcount),
          backgroundColor: '#8DD9CC',
        },
        {
          label: 'October',
          data: oct.map(mt => mt.tcount),
          backgroundColor: '#009DC4',
        },
        {
          label: 'November',
          data: nov.map(mt => mt.tcount),
          backgroundColor: '#93CCEA',
        },
        {
          label: 'December',
          data: dec.map(mt => mt.tcount),
          backgroundColor: '#7070CC',
        }
      ],
    };
  
    return (
      <div className='shadow-sm'>
       <Bar options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
      </div>
    )
  }
  