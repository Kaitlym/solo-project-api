import React, { useState, useEffect} from 'react';

import { useRouter } from 'next/router';
import ResumeCard from './ResumeCard';

import {Grid} from '@material-ui/core';



function ResumeList() {
    const urlResume = "http://localhost:8000/v1/resumes/"
    const [resumes, setResume] = useState([]);
    const router = useRouter()

    useEffect(async () => {
        const response = await fetch(urlResume, {method: "GET" });
        const json = await response.json();
        setResume(json);
    }, [])

    //delete
    const handleDelete = async (resume) => {
        const urlResumeID = urlResume+resume.id;
        await fetch ( urlResumeID, { method: "DELETE" , headers: { 'content-type': 'application/json'}} );
        const response = await fetch(urlResume, {method: "GET" });
        const json = await response.json();
        setResume(json);
        router.push("/");
    }

    //handle change
    const handleChange = async (resume) => {
        const urlResumeID = urlResume+resume.id;
        const body = JSON.stringify(resume);

        await fetch ( urlResumeID, { method: "PATCH" , headers: { 'content-type': 'application/json'}, body} );
        
        const response = await fetch(urlResume, {method: "GET" });
        const json = await response.json();
        setResumeF(json);
        router.push("/");
    }

    


    return (
        
    <Grid container direction="row" spacing={1}>
        {resumes.map ( (resume) => 
        <Grid item xs key={resume.id}>
            <ResumeCard
                id = {resume.id}
                summary = {resume.summary}
                onDelete = {handleDelete}
                onChange = {handleChange}
                />
        </Grid>
        )}
    </Grid>

    )

}
export default ResumeList;