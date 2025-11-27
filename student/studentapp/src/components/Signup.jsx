import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () =>{
   var [val, setval] = useState({name:"",age:"",department:"",password:""})
   var navigate=useNavigate() 
   
   
   
   const addfunction=(e)=>{
    console.log(e.target.value);
    setval({...val,[e.target.name]:e.target.value})
        console.log(val);
   }
   
const submitHandler=()=>{
  axios.post("http://localhost:3000/addstudent",val)
  .then((res)=>{
    alert(res.data);
     navigate("/table")
  })
}

  return (
    <div>
        <h2>Signup page</h2>
        <TextField label="name" name='name' variant="outlined" 
       Name='name' value={val.name} onChange={addfunction}
        />  
        <br />
        <TextField label="Age" variant="outlined" 
         name='age' value={val.age} onChange={addfunction}
        
        />          
        <br />
        <TextField label="Department" variant="outlined" 
        name='department' value={val.department} onChange={addfunction}
        />

        <br />
        <TextField label="Password" variant="outlined"
        name='password' value={val.password} onChange={addfunction}
        />
        <br />

<Button variant="contained"color="success" onClick={submitHandler}>
  Success
</Button>        
    </div>

  )
}

export default Signup