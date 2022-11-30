import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export function Linechart_bvsd() {

  const [totUSCounseling, settotUSCounseling] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Counseling').then((res) => {settotUSCounseling(res.data)});
  const [totUSCardiology, settotUSCardiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Cardiology').then((res) => {settotUSCardiology(res.data)});
  const [totUSPathology, settotUSPathology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Pathology').then((res) => {settotUSPathology(res.data)});
  const [totUSPhysiotherapy, settotUSPhysiotherapy] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Physiotherapy').then((res) => {settotUSPhysiotherapy(res.data)});
  const [totUSDentistry, settotUSDentistry] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Dentistry').then((res) => {settotUSDentistry(res.data)});
  const [totUSRadiology, settotUSRadiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Radiology').then((res) => {settotUSRadiology(res.data)});
  const [totUSGynaecology, settotUSGynaecology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/US/Gynaecology').then((res) => {settotUSGynaecology(res.data)});

  const [totUKCounseling, settotUKCounseling] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Counseling').then((res) => {settotUKCounseling(res.data)});
  const [totUKCardiology, settotUKCardiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Cardiology').then((res) => {settotUKCardiology(res.data)});
  const [totUKPathology, settotUKPathology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Pathology').then((res) => {settotUKPathology(res.data)});
  const [totUKPhysiotherapy, settotUKPhysiotherapy] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Physiotherapy').then((res) => {settotUKPhysiotherapy(res.data)});
  const [totUKDentistry, settotUKDentistry] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Dentistry').then((res) => {settotUKDentistry(res.data)});
  const [totUKRadiology, settotUKRadiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Radiology').then((res) => {settotUKRadiology(res.data)});
  const [totUKGynaecology, settotUKGynaecology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/UK/Gynaecology').then((res) => {settotUKGynaecology(res.data)});
  
  const [totIndiaCounseling, settotIndiaCounseling] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Counseling').then((res) => {settotIndiaCounseling(res.data)});
  const [totIndiaCardiology, settotIndiaCardiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Cardiology').then((res) => {settotIndiaCardiology(res.data)});
  const [totIndiaPathology, settotIndiaPathology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Pathology').then((res) => {settotIndiaPathology(res.data)});
  const [totIndiaPhysiotherapy, settotIndiaPhysiotherapy] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Physiotherapy').then((res) => {settotIndiaPhysiotherapy(res.data)});
  const [totIndiaDentistry, settotIndiaDentistry] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Dentistry').then((res) => {settotIndiaDentistry(res.data)});
  const [totIndiaRadiology, settotIndiaRadiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Radiology').then((res) => {settotIndiaRadiology(res.data)});
  const [totIndiaGynaecology, settotIndiaGynaecology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/India/Gynaecology').then((res) => {settotIndiaGynaecology(res.data)});

  const [totCanadaCounseling, settotCanadaCounseling] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Counseling').then((res) => {settotCanadaCounseling(res.data)});
  const [totCanadaCardiology, settotCanadaCardiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Cardiology').then((res) => {settotCanadaCardiology(res.data)});
  const [totCanadaPathology, settotCanadaPathology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Pathology').then((res) => {settotCanadaPathology(res.data)});
  const [totCanadaPhysiotherapy, settotCanadaPhysiotherapy] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Physiotherapy').then((res) => {settotCanadaPhysiotherapy(res.data)});
  const [totCanadaDentistry, settotCanadaDentistry] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Dentistry').then((res) => {settotCanadaDentistry(res.data)});
  const [totCanadaRadiology, settotCanadaRadiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Radiology').then((res) => {settotCanadaRadiology(res.data)});
  const [totCanadaGynaecology, settotCanadaGynaecology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Canada/Gynaecology').then((res) => {settotCanadaGynaecology(res.data)});

  const [totSingaporeCounseling, settotSingaporeCounseling] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Counseling').then((res) => {settotSingaporeCounseling(res.data)});
  const [totSingaporeCardiology, settotSingaporeCardiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Cardiology').then((res) => {settotSingaporeCardiology(res.data)});
  const [totSingaporePathology, settotSingaporePathology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Pathology').then((res) => {settotSingaporePathology(res.data)});
  const [totSingaporePhysiotherapy, settotSingaporePhysiotherapy] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Physiotherapy').then((res) => {settotSingaporePhysiotherapy(res.data)});
  const [totSingaporeDentistry, settotSingaporeDentistry] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Dentistry').then((res) => {settotSingaporeDentistry(res.data)});
  const [totSingaporeRadiology, settotSingaporeRadiology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Radiology').then((res) => {settotSingaporeRadiology(res.data)});
  const [totSingaporeGynaecology, settotSingaporeGynaecology] = useState({});
  axios.get('http://localhost:4000/p_details/filter/Singapore/Gynaecology').then((res) => {settotSingaporeGynaecology(res.data)});


  const labels = ["Counseling", "Cardiology", "Pathology", "Physiotherapy", "Dentistry", "Radiology", "Gynaecology"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patients per Depertment per Branch',
        color: '#E0E0E0'
      },
    },
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
        label: 'US',
        data: [totUSCounseling, totUSCardiology, totUSPathology, totUSPhysiotherapy, totUSDentistry, totUSRadiology, totUSGynaecology],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: 'UK',
        data: [totUKCounseling, totUKCardiology, totUKPathology, totUKPhysiotherapy, totUKDentistry, totUKRadiology, totUKGynaecology],
        borderColor: 'rgb(255,218,3)',
        backgroundColor: 'rgba(255,218,3)',
      },
      {
        label: 'India',
        data: [totIndiaCounseling, totIndiaCardiology, totIndiaPathology, totIndiaPhysiotherapy, totIndiaDentistry, totIndiaRadiology, totIndiaGynaecology],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
      {
        label: 'Canada',
        data: [totCanadaCounseling, totCanadaCardiology, totCanadaPathology, totCanadaPhysiotherapy, totCanadaDentistry, totCanadaRadiology, totCanadaGynaecology],
        borderColor: 'orange',
        backgroundColor: 'orange',
      },
      {
        label: 'Singapore',
        data: [totSingaporeCounseling, totSingaporeCardiology, totSingaporePathology, totSingaporePhysiotherapy, totSingaporeDentistry, totSingaporeRadiology, totSingaporeGynaecology],
        borderColor: 'green',
        backgroundColor: 'green',
      },
    ],
  };

  return (
    <div className='shadow-sm'>
     <Line options={options} data={data} style={{backgroundColor: '#303030', padding: '7px'}}/>
    </div>
  )
}
