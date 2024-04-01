import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Card, Typography ,TextField, Button} from '@mui/material';

const Course = () => {
    let { courseId }=useParams();
    const [courses,setCourses]=useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setCourses(data.courses);
        });
    }, []);
    let course=null;
    for(var i=0;i<courses.length;i++){
        if(courses[i].id==courseId) course=courses[i];
    }
     if(!course){
        return (
            <div>IsLoading...</div>
        )
     }
    return (

    <div style={{
        display:'flex',
        justifyContent:'center'
    }}>
        <CourseCard course={course} />
        <UpdateCard course={course} courses={courses} courseId={courseId}/>
    </div>
  )
}

function CourseCard(props) {
    const { title, description, imageLink } = props.course;
    
    return (
        <div>
            <Card style={{
                width:300,
                minHeight:200,
                margin:10
            }}>
                <Typography variant='h6' textAlign={'center'}>{title}</Typography>
                <Typography variant='subtitle1' textAlign={'center'}>{description}</Typography>
                <img src={imageLink} alt={title} style={{
                    width:"100%",
                    minHeight:150
    
                }} />
            </Card>
        </div>
    );
}

const UpdateCard = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink,setImageLink]=useState("");
    const course=props.course;
    const courses=props.courses;
  return (
    <div>


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
                <TextField fullWidth={true} label="imageLink" onChange={(e) => {
                    setImageLink(e.target.value);
                }}>imageLink</TextField> <br />
                <br />
                <Button variant="contained" onClick={() => {
                    fetch("http://localhost:3000/admin/courses/:courseId",{
                        method:"PUT",
                        body:JSON.stringify({
                            title,
                            description,
                            price:"",
                            published:true,
                            imageLink
                        }),
                        headers:{
                            "Content-Type":"application/json",
                     "Authorization":"Bearer "+localStorage.getItem("token")
                    }
                        
                    }).then((res) => {
                        return res.json();
                    }).then((data) => {
                        alert("Course Updated Successfully");
                        let updatedCourses=[];
                        for(var i=0;i<courses.length;i++){
                            if(courses[i].id==props.courseId){
                              updatedCourses.push({
                                title,
                                description,
                                price:"",
                                published:true,
                                imageLink
                              })
                            }
                            else{
                                updatedCourses.push(courses[i]);
                            }
                        }
                        console.log(data);
                    })
                }}>Update</Button>
            </div>
            </Card>
        </center>
    </div>
  )
}
export default Course