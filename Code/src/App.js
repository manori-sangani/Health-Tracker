import './App.css';
import Navbar from './components/Navbar';
// import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Insert_form from './components/Insert_form';
import Gender from './components/Gender';
import Age from './components/Age';
import Comparison from './components/Comparison';
import Patient_summary from './components/Patient_summary';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div> 
      <div>
        <Routes>          
            <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
      {/* <div>
        <Routes>          
            <Route exact path="/register" element={<Register />}/>
        </Routes>
      </div> */}
      <div>
        <Routes>          
            <Route exact path="/dashboard" element={<Dashboard />}/>
        </Routes>        
      </div>
      <div>
        <Routes>          
            <Route exact path="/p_details" element={<Insert_form />}/>
        </Routes>        
      </div>  
      <div>
        <Routes>          
            <Route exact path="/gender" element={<Gender />}/>
        </Routes>        
      </div> 
      <div>
        <Routes>          
            <Route exact path="/age" element={<Age />}/>
        </Routes>        
      </div>
      <div>
        <Routes>          
            <Route exact path="/p_modify" element={<Comparison />}/>
        </Routes>        
      </div>
      <div>
        <Routes>          
            <Route exact path="/p_summary" element={<Patient_summary />}/>
        </Routes>        
      </div>      
    </div>    
  );
}

export default App;
