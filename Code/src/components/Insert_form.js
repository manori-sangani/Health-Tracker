import { useState } from "react";
import Sidebar from './Sidebar';
import axios from 'axios';
// import ReactDOM from "react-dom/client";

function Insert_form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDetails = {
      name: inputs.name,
      mobile: inputs.mobile,
      gender: inputs.gender,
      day: inputs.day,
      month: inputs.month,
      year: inputs.year,
      branch: inputs.branch,
      department: inputs.department,
      bgroup: inputs.bgroup,
      age: inputs.age,
      weight: inputs.weight,
      medication: inputs.medication,
      mentalhistory: inputs.mentalhistory,
      bpdiastolic: inputs.bpdiastolic,
      bpsystolic: inputs.bpsystolic,
      diabetes: inputs.diabetes,
      oralhealth: inputs.oralhealth,
      oralreports: inputs.oralreports,
      organ: inputs.organ,
      radioreports: inputs.radioreports,
      cardiachistory: inputs.cardiachistory,
      cardioreports: inputs.cardioreports,
      wbc: inputs.wbc,
      rbc: inputs.rbc,
      haemoglobin: inputs.haemoglobin,
      pregnancy: inputs.pregnancy,
      gynaecreports: inputs.gynaecreports
    } 

    axios.post('http://localhost:4000/p_details/add', newDetails).then(res => console.log(res.data));

    setInputs({
      
        name: "",
        mobile: "",
        gender: "",
        day: "", 
        month: "", 
        year: "" ,
        branch: "" ,
        department: "",
        bgroup: "" , 
        age: "", 
        weight: "",
        medication:"", 
        mentalhistory:"", 
        bpdiastolic: "",
        bpsystolic: "",
        diabetes: "",
        oralhealth: "", 
        oralreports: "", 
        organ: "", 
        radioreports: "", 
        cardiachistory: "",
        cardioreports: "",
        wbc: "", 
        rbc: "", 
        hemoglobin: "", 
        pregnancy: "", 
        gynaecreports: ""      
    })

    console.log(inputs);
  }

  return (
    <div>
    <div className='row g-0'>
    <div className='col-2 '>
          <Sidebar height='63vmax'/>
    </div>

    <div className='col-10 ' style={{padding: '20px', color: 'rgb(149 192 162)', textAlign: 'left'}}>      
    <form onSubmit={handleSubmit}>
    
    <div className='row g-0'>
    {/* col 1----------------------------------------------- label*/}
    <div className='col-2 '>

      <label style={{padding: '10px'}}>Enter Full Name:       
      </label>

      <label style={{padding: '10px'}}>Enter Date:         
      </label>
      
      <label style={{padding: '10px'}}>Enter Hospital Branch:       
      </label>

      <label style={{padding: '10px'}}>Enter Age:         
      </label>      
      
    </div>

    {/* col 2----------------------------------------------- input*/}
    <div className='col-2 '>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div> 

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number" 
        name="day" 
        value={inputs.day || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}
      /></div>  

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="branch" 
        value={inputs.branch || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}
      /></div>   

    </div>     

    {/* col 3----------------------------------------------- label*/}
    <div className='col-2 '>

      <label style={{padding: '10px'}}>Enter Mobile Number:       
      </label> 

      <label style={{padding: '10px'}}>Enter Month:       
      </label>
          
      <label style={{padding: '10px'}}>Enter Department:       
      </label>

      <label style={{padding: '10px'}}>Enter Weight:       
      </label>      
      
    </div>  
      
    {/* col 4----------------------------------------------- input*/}
    <div className='col-2 '>      

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="mobile" 
        value={inputs.mobile || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="month" 
        value={inputs.month || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="department" 
        value={inputs.department || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        step="0.01" 
        name="weight" 
        value={inputs.weight || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

    </div> 

    {/* col 5----------------------------------------------- label*/}
    <div className='col-2 '>

      <label style={{padding: '10px'}}>Enter Gender:       
      </label>

      <label style={{padding: '10px'}}>Enter Year:         
      </label>
         
      <label style={{padding: '10px'}}>Enter Blood Group:       
      </label>

      <label style={{padding: '10px'}}>Medication:       
      </label>      
      
    </div>  
      
    {/* col 6----------------------------------------------- input*/}
    <div className='col-2 '>      

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="gender" 
        value={inputs.gender || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number" 
        name="year" 
        value={inputs.year || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}
      /></div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="bgroup" 
        value={inputs.bgroup || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="text" 
        name="medication" 
        value={inputs.medication || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>

    </div>

    <div className='row g-0'><br></br>COUNSELING:</div>

    <div className='row g-0'>      
      <div className='col-2 '>

      <label style={{padding: '10px'}}>Mental Health History:       
      </label>

      </div>

      <div className='col-10 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="mentalhistory" 
        value={inputs.mentalhistory || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

    </div>

    <div className='row g-0'><br></br>PHYSIOTHERAPY:</div>

    <div className='row g-0'>      
      <div className='col-2 '>
      <label style={{padding: '10px'}}>BP Diastolic:       
      </label>
      </div>
      <div className='col-2 '>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        step="0.01" 
        name="bpdiastolic" 
        value={inputs.bpdiastolic || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>
      </div>

      <div className='col-2 '>
      <label style={{padding: '10px'}}>BP Systolic:       
      </label>
      </div>
      <div className='col-2 '>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        step="0.01" 
        name="bpsystolic" 
        value={inputs.bpsystolic || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>
      </div>

      <div className='col-2 '>
      <label style={{padding: '10px'}}>Diabetes:       
      </label>
      </div>
      <div className='col-2 '>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        step="0.01" 
        name="diabetes" 
        value={inputs.diabetes || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>
      </div>

    </div>

    <div className='row g-0'><br></br>DENTISTRY:</div>

    <div className='row g-0'>      
      <div className='col-2 '>

      <label style={{padding: '10px'}}>Oral Health:       
      </label>

      </div>

      <div className='col-2 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="oralhealth" 
        value={inputs.oralhealth || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

      <div className='col-2 '>

      <label style={{padding: '10px'}}>Oral Reports:       
      </label>

      </div>

      <div className='col-6 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="oralreports" 
        value={inputs.oralreports || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

    </div>

    <div className='row g-0'><br></br>RADIOLOGY:</div>

    <div className='row g-0'>      
      <div className='col-2 '>

      <label style={{padding: '10px'}}>Organ:       
      </label>

      </div>

      <div className='col-2 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="organ" 
        value={inputs.organ || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

      <div className='col-2 '>

      <label style={{padding: '10px'}}>Radiology Reports:       
      </label>

      </div>

      <div className='col-6 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="radioreports" 
        value={inputs.radioreports || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

    </div>

    <div className='row g-0'><br></br>CARDIOLOGY:</div>

    <div className='row g-0'>      
      <div className='col-2 '>

      <label style={{padding: '10px'}}>Cardiac History:       
      </label>

      </div>

      <div className='col-4 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="cardiachistory" 
        value={inputs.cardiachistory || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

      <div className='col-2 '>

      <label style={{padding: '10px'}}>Cardiology Reports:       
      </label>

      </div>

      <div className='col-4 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="cardioreports" 
        value={inputs.cardioreports || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

    </div>

    <div className='row g-0'><br></br>PATHOLOGY:</div>

    <div className='row g-0'>      
      <div className='col-2 '>
      <label style={{padding: '10px'}}>WBC Count:       
      </label>
      </div>
      <div className='col-2 '>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        name="wbc" 
        value={inputs.wbc || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>
      </div>

      <div className='col-2 '>
      <label style={{padding: '10px'}}>RBC Count:       
      </label>
      </div>
      <div className='col-2 '>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        name="rbc" 
        value={inputs.rbc || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>
      </div>

      <div className='col-2 '>
      <label style={{padding: '10px'}}>Haemoglobin:       
      </label>
      </div>
      <div className='col-2 '>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}><input 
        type="number"
        step="0.01" 
        name="haemoglobin" 
        value={inputs.haemoglobin || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /></div>
      </div>

    </div>

    <div className='row g-0'><br></br>GYNAECOLOGY:</div> 

    <div className='row g-0'>      
      <div className='col-2 '>

      <label style={{padding: '10px'}}>Pregnancy:       
      </label>

      </div>

      <div className='col-2 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="pregnancy" 
        value={inputs.pregnancy || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

      <div className='col-2 '>

      <label style={{padding: '10px'}}>Gynaec Reports:       
      </label>

      </div>

      <div className='col-6 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="gynaecreports" 
        value={inputs.gynaecreports || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div> 
    </div>  

    <div style={{textAlign: 'center'}}> 
    <br></br><br></br><input type="submit"/>
    </div>

    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Insert_form
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Insert_form />);

// import React from 'react'
// import Sidebar from './Sidebar';
// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// export default function Insert_form() {  

//   return (
//     <div>
//       <div className='row g-0'>
//       <div className='col-2 '>
//          <Sidebar height='44vmax'/>
//       </div>
//       <div className='col-10'>
//         <div style={{padding: '20px'}}>
          
//         <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//             <input 
//                 type="text" 
//                 name="username" 
//                 value={inputs.username || ""} 
//                 onChange={handleChange}
//             />
//         </label>
//         <label>Enter your age:
//             <input 
//                 type="number" 
//                 name="age" 
//                 value={inputs.age || ""} 
//                 onChange={handleChange}
//             />
//         </label>
//             <input type="submit" />
//         </form>
//         </div>
//       </div>      
//     </div>
//     </div>
//   )  

// }



