import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
const Appbar = () => {
    const navigate=useNavigate();
    const [userEmail,setUserEmail]=useState(null);

    useEffect(()=>{
         fetch("http://localhost:3000/admin/me",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
         }).then((res)=>res.json()).then((data) =>{
            setUserEmail(data.username);
        })
    },[]);

    if(userEmail)
  { 
    return (
    
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
            <div>
            <Button variant="text" onClick={() => {navigate("/")}}>Coursell</Button>
        </div>
        <div style={{
            display:'flex'
        }}>
            <Typography >{userEmail}</Typography>
            <Button variant="contained" onClick={()=> {
              localStorage.setItem('token', null);
              setUserEmail(null);
               navigate("/");
            }}>Logout</Button>
        </div>
        </div>
       
      )
  }
  else{
    return (
    
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
            <div>
            <Button variant="text" onClick={() => {navigate("/")}}>Coursell</Button>
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
}

export default Appbar