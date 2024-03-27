import { TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
const Addcourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
        <center style={{
            paddingTop:150,
            marginBottom:10
        }}> 
         <Typography variant='h6'>
        Create new course here.
         </Typography>
            
        </center>

        <center>
            <Card style={{
                width:400,
                padding:20,
                backgroundColor:"#FBF9F1"
            }}>
            <div >
                <TextField fullWidth={true}  label="Title" onChange={(e) => {
                    setTitle(e.target.value);
                }}>Title</TextField> <br/><br />
                <TextField fullWidth={true} label="Description" onChange={(e) => {
                    setDescription(e.target.value);
                }}>Description</TextField> <br />
                <br />
                <Button variant="contained" onClick={() => {
                    fetch("http://localhost:3000/admin/courses",{
                        method:"POST",
                        body:JSON.stringify({
                            title,
                            description,
                            price:"",
                            published:true,
                            imageLink:""
                        }),
                        headers:{
                            "Content-Type":"application/json",
                     "Authorization":"Bearer "+localStorage.getItem("token")
                    }
                        
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        console.log(data);
                    })
                }}>Add</Button>
            </div>
            </Card>
        </center>
    </div>
  )
}

export default Addcourse