import { TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <center style={{
            paddingTop:150,
            marginBottom:10
        }}> 
         <Typography variant='h6'>
         Hello Welcome.Login to your account here.
         </Typography>
            
        </center>

        <center>
            <Card style={{
                width:400,
                padding:20,
                backgroundColor:"#FBF9F1"
            }}>
            <TextField fullWidth={true}  label="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }}>Email</TextField> <br/><br />
                <TextField fullWidth={true} label="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }}>Password</TextField> <br />
                <br />
                <Button variant="contained" onClick={() => {
                    fetch("http://localhost:3000/admin/login",{
                        method:"POST",
                        body:JSON.stringify({
                            username:email,
                            password
                        }),
                        headers:{"Content-Type":"application/json"}
                    })
                }}>Signin</Button>
            </Card>
        </center>
    </div>
  )
}

export default Signin