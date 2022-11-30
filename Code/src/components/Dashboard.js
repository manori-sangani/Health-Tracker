import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Sidebar from './Sidebar';
import Cards from './Visualizations/Cards';
import { Stackgraph_tot_branches } from './Visualizations/Stackgraph_tot_branches';
import { Linechart_bvsd } from './Visualizations/Linechart_bvsd';
import Modals from './Visualizations/Modals';
import { Stackgraph_tot_departments } from './Visualizations/Stackgraph_tot_departments';
// import { Doughnut_chart } from './Visualizations/Doughnut';
import axios from 'axios';

function Dashboard() {
  
  const [totPatients, settotPatients] = useState({});

  axios.get('http://localhost:4000/p_details/totpatients').then((res) => {settotPatients(res.data)});
     
  return (
    <>    
    <div className='row g-0'>
      <div className='col-2'>
         <Sidebar height='75vmax'/>
      </div>
      <div className='col-10' >
        <div className='row g-0'>      
          <div className='col' style={{padding: '8px'}}>
            <div className='row g-0'>
                <div className='col-3' style={{padding: '10px'}}>                    
                    <Cards title ='TOTAL BRANCHES' value = {5}/>
                    {/* <Modals id="exampleModal"></Modals> */}
                </div>
                <div className='col-3' style={{padding: '10px'}}>
                    <Cards title ='TOTAL DEPARTMENTS' value = {7}/>
                </div>
                <div className='col-3' style={{padding: '10px'}}>
                    <Cards title ='TOTAL STAFF' value={32}/>
                </div>
                <div className='col-3' style={{padding: '10px'}}>
                    <Cards title ='TOTAL PATIENTS' value={`${totPatients}`}/>
                </div>            
            </div>
            <div className='row g-0'>
                <div className='col-6' style={{padding: '12px'}}>
                    <Stackgraph_tot_branches />
                </div>
                <div className='col-6' style={{padding: '12px'}}>
                    <Stackgraph_tot_departments />
                </div>
            </div>
            <div className='row g-0'>
                <div className='col' style={{padding: '10px'}}>
                    <Linechart_bvsd />
                </div>
            </div>
          </div>
        </div>
      </div>      
    </div></>
  )
}

export default Dashboard
