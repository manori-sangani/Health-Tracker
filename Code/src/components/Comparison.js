import React from 'react'
import Sidebar from './Sidebar';
import { Linechart } from './Visualizations/Linechart';

export default function Age() {
  return (
    <div>
      <div className='row g-0'>
      <div className='col-2 '>
         <Sidebar height='44vmax'/>
      </div>
      <div className='col-10'>
        <div style={{padding: '20px'}}>
            <Linechart/>
        </div>
      </div>      
    </div>
    </div>
  )
}
