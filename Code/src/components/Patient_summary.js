import { useState } from "react";
import Sidebar from './Sidebar';
import axios from 'axios';
// import ReactDOM from "react-dom/client";

function Patient_summary() {
  const [inputs, setInputs] = useState({});
  const [Search, setSearch] = useState({});

  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();     
    
    //axios.get("http://localhost:4000/p_details/display/Rachel Green").then((res) => {setSearch(res.data)});
    axios.get(`http://localhost:4000/p_details/display/${inputs.search}`).then((res) => {setSearch(res.data[0])}); 
    console.log(Search);          

    setInputs({      
        search: "",
        name: Search.name,
        mobile: Search.mobile,
        gender: Search.gender,
        day: Search.day,
        month: Search.month,
        year: Search.year,
        branch: Search.branch,
        department: Search.department,
        bgroup: Search.bgroup,
        age: Search.age,
        weight: Search.weight.$numberDecimal        ,
        medication: Search.medication,
        mentalhistory: Search.mentalhistory,
        bpdiastolic: Search.bpdiastolic.$numberDecimal,
        bpsystolic: Search.bpsystolic.$numberDecimal,
        diabetes: Search.diabetes.$numberDecimal,
        oralhealth: Search.oralhealth,
        oralreports: Search.oralreports,
        organ: Search.organ,
        radioreports: Search.radioreports,
        cardiachistory: Search.cardiachistory,
        cardioreports: Search.cardioreports,
        wbc: Search.wbc.$numberDecimal,
        rbc: Search.rbc.$numberDecimal,
        haemoglobin: Search.haemoglobin.$numberDecimal,
        pregnancy: Search.pregnancy,
        gynaecreports: Search.gynaecreports

    })  }

    // console.log(inputs);
    

  return (
    <div>
    <div className='row g-0'>
    <div className='col-2 '>
          <Sidebar height='66vmax'/>
    </div>

    <div className='col-10 ' style={{padding: '20px', color: 'rgb(149 192 162)', textAlign: 'left'}}>      
    <form onSubmit={handleSubmit}>

    <div className='row g-0'>      
      <div className='col-3 '>

      <label style={{padding: '10px'}}>Enter Full Name to get Reports:       
      </label>

      </div>

      <div className='col-9 '>      

      <div className='row g-0' style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px'}}><input 
        type="text" 
        name="search" 
        value={inputs.search || ""} 
        onChange={handleChange}
        style={{backgroundColor: '#303030',  color: 'grey', border: '0px'}}       
      /> </div>
      </div>

    </div>

    <div style={{textAlign: 'center'}}> 
    <br></br><input type="submit"/><br></br><br></br><br></br>
    </div>
    
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

    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Patient_summary