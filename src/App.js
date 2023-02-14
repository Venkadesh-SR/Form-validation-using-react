import { ErrorResponse } from "@remix-run/router";
import react from "react";
import { useState } from "react";
import './App.css'
function App(){
    const intialvalue = {name:'',email:'',mobileno: '',password:'',confirmpassword:''}
    const[formvalue,setFormvalue]=useState(intialvalue);
    const[issubmit,setisSubmit]=useState(false);
    const [formErrors, setFormErrors] = useState({});

   const handlechange = (e) =>{
       const {name,value} =e.target;
       setFormvalue({...formvalue,[name]:value});
}


const handlesubmit = (e) =>{
    e.preventDefault();
    setFormErrors(Validate(formvalue));
    setisSubmit(true)
}


    
const Validate = (value) =>{
    const errors={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.name) {
      errors.name = "Username is required!";
    }
    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "This is not a valid email format!";
    }

    if(value.mobileno.length!==10){
        errors.mobileno="Enter valid mobile no"
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (value.password.length > 10) {
      errors.password = "Password less than 10 characters";
    }

    if(value.password !== value.confirmpassword)
    errors.confirmpassword = "password does not match"
    return errors;

};

    return(
        <div className="App">
           <center><h1 className="title">Login<span className="span">Form</span></h1></center> 
        <div className="container">
            <div className="header"> <h2 >Sign up</h2></div>
           
            <br/>
            <br/>
            <center>
            <form className="form" onClick={handlesubmit} >
                <label className = "label">Username</label>
                <br/>
                <br/>
                <input type="text" placeholder="Enter the Username"
                name="name" className="box"
                value={formvalue.name}
                onChange={handlechange}

                />
                <p className="alert">{formErrors.name}</p>
                <br/>
                
                <label className = "label">EmailId</label>
                <br/>
                <br/>
                
                <input type="email" placeholder="Enter the gmail"
                name="email" className="box"
                value={formvalue.email}
                onChange={handlechange}/>
                <p className="alert">{formErrors.email}</p>
                <br/>
                
                <label className = "label">Mobile No</label>
                <br/>
                <br/>
                
                <input type="number" placeholder="Enter the mobileno"
                name="mobileno" className="box"
                value={formvalue.mobileno}
                onChange={handlechange}/>
                <p className="alert">{formErrors.mobileno}</p>
                <br/>
                
                <label className = "label">Password</label>
                <br/>
                <br/>
                
                <input type="Password" placeholder="Enter the password"
                
                
                name="password"
                value={formvalue.password} className="box"
                onChange={handlechange}/>
                <p className="alert">{formErrors.password}</p>
                <br/>
                
                <label className = "label">Confirm Password</label>
                <br/>
                <br/>
                
                <input type="Password" placeholder="Re-enter the password"
                name="confirmpassword" className="box"
                value={formvalue.confirmpassword}
                onChange={handlechange}/>
                <p className="alert">{formErrors.confirmpassword}</p>
                
                <br/>
                <br/>
                <br/>
                </form>
                </center>
                <button  className="button">SIGN UP</button>
                
            

        </div>
        </div>
    )
}

export default App;