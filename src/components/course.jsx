import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Card, Typography ,TextField, Button} from '@mui/material';

const Course = () => {
    let { courseId }=useParams();
    const [courses, setCourses] = useState([]);
   console.log(courses);
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
    console.log(course);
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
        <UpdateCard courses={courses} course={course} setCourses={setCourses} />
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
    const [imageLink, setImageLink] = useState("");

    const { courses, course, setCourses } = props;

    const handleUpdate = () => {
        fetch(`http://localhost:3000/admin/courses/${course.id}`, {
            method: "PUT",
            body: JSON.stringify({
                title,
                description,
                price: "",
                published: true,
                imageLink
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then((res) => res.json())
        .then((data) => {
            const updatedCourses = courses.map((c) => {
                if (c.id === course.id) {
                    return {
                        ...c,
                        title,
                        description,
                        imageLink
                    };
                } else {
                    return c;
                }
            });
            console.log("hi");
            console.log(updatedCourses);
            setCourses(updatedCourses);
            
            alert("Course Updated Successfully");
            console.log(data);
        });
    };

    return (
        <div>
            <center>
                <Card style={{
                    width: 400,
                    padding: 20,
                    backgroundColor: "#FBF9F1"
                }}>
                    <div>
                        <TextField fullWidth={true} label="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /><br />
                        <TextField fullWidth={true} label="Description" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
                        <br />
                        <TextField fullWidth={true} label="Image Link" value={imageLink} onChange={(e) => setImageLink(e.target.value)} /> <br />
                        <br />
                        <Button variant="contained" onClick={handleUpdate}>Update</Button>
                    </div>
                </Card>
            </center>
        </div>
    );
};

export default Course