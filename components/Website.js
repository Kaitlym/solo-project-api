import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {Container, Button } from '@material-ui/core';
import WebsiteMenu from './WebsiteMenu';

function Website() {
    const urlResume = "http://localhost:8000/v1/resumes/"
    const urlSelectedResume = "http://localhost:8000/v1/resumes/"
    const [resumes, setResume] = useState([]);
    //const [selectedResume, setSelectedResume] = useState([]);
    const router = useRouter()

    useEffect(async () => {
        const response = await fetch(urlResume, {method: "GET" });
        const json = await response.json();
        setResume(json);
        // const response2 = await fetch(urlSelectedResume, {method: "GET" });
        // const json2 = await response2.json();
        // setSelectedResume(json2)
    }, [])


    return (
        <Container>
            {resumes.map ( (resume) =>
                <WebsiteMenu
                    key = {resume.id}
                    id = {resume.id}
                    contact = {resume.contact}
                    summary={resume.summary}
                    education={resume.education}
                    experience={resume.experience}
                    achievement={resume.achievement}
                    skill={resume.skill}
                    sectionOrder={resume.sectionOrder}
                />

            )}
        </Container>
    );
}
export default Website;