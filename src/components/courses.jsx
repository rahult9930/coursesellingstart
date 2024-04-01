import React, { useState, useEffect } from 'react';
import { Card, Typography } from '@mui/material';

const Courses = () => {
    const [courses, setCourses] = useState([]);

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

    return (
        <div style={{ 
            display:'flex',
            justifyContent:'center',
          flexWrap:"wrap"}}>
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

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

export default Courses;
