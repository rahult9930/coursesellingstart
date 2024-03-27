import { TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
const Appbar = () => {
    const navigate=useNavigate();
  return (
    
    <div style={{
        display:"flex",
        justifyContent:"space-between"
    }}>
        <div>
        <Typography variant='h6'>Coursell</Typography>
    </div>
    <div style={{
        display:'flex'
    }}>
        <Button variant="contained" style={{
            marginRight:"10px"
        }} onClick={()=> {
           navigate("/Signup");
        }}>Signup</Button>
        <Button variant="contained" onClick={()=> {
           navigate("/Signin");
        }}>Signin</Button>
    </div>
    </div>
    
   
  )
}

export default Appbar