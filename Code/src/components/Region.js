import React from 'react'
import Sidebar from './Sidebar';
import { Barchart_region } from './Visualizations/Barchart_region';

export default function Region() {
  return (
    <div>
      <div className='row g-0'>
      <div className='col-2 '>
         <Sidebar height='44vmax'/>
      </div>
      <div className='col-10'>
        <div style={{padding: '20px'}}>
            <Barchart_region/>
        </div>
      </div>      
    </div>
    </div>
  )
}

