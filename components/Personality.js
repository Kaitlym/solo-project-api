import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import {Container, Button } from '@material-ui/core';

function Personality() {
    const text = `CONTACT
    KAITLYN MARTINEZ
    424-288-6812
    kmmart47@asu.edu
    LinkedIn
    
    SUMMARY
    Computer science sophomore with interning experience looking for a collaborative working environment in with full stack development. 
    
    EDUCATION
    Arizona State University - Bachelor of Computer Science
    May 2024 (expected)
    
    ORGANIZATIONS
    Bootcamp Internship GoDaddy | 2021
    Backpacks 4 Kids AZ | 2015 – current
    •	Founded and currently expanding Backpacks 4 Kids AZ - a 501c3 non-profit - that provides students with the school supplies. 
    •	Directed efforts of procuring and distributing backpacks across Arizona resulting in over 10,000 backpacks being donated so far.
    Constellate AZ | Youth Leadership Council | 2018 -2020
    •	Attended Youth Changemaker Summit, a 72-hour hands-on competition involving the creation, development, and presentation of a unique business.
    •	 Won- along with my teammates - best overall pitch twice and best presenter once. 
    •	Promoted to Marketing lead, facilitating bi-weekly meetings advancing the brand identity and grow our audience. 
    CodeDay | 2015 - 2019
    •	Attended CodeDay on a semi-annual basis, a 24-hour long competitive hackathon to gain experience in computer science related fields. 
    •	Earned best in class twice, once for web design and the other for game creation.
    Kode with Klossy | 2018
    •	Built a website using HTML, CSS, and JavaScript as part of the Kode with Klossy program.
    •	Assisted team members with their own code, advising on how to trouble shoot bugs.
    Rising Tycoon | 2016
    •	Gathered knowledge on how to start a business under the tutelage of industry professionals. 
    •	Developed a pitch deck and presenting why my startup would be the most optimal investment.
    •	Succeeded in acquiring funding for my startup, look to the aforementioned Backpacks 4 Kids AZ.
    
    SKILLS
    Front-End:
    HTML, CSS, React.js
    Back-End:
    JavaScript, Java
    
    AWARDS
    President’s Volunteer Service Award | 2018 & 2020
    Brilliant, Beautiful and Bold Role Models | 2019 – 2020
    Certificate of Arizona Technical Skills Standards | 2019
    Young Gifted and Dreaming Fearlessly | 2018
    `;
    

    const urlResume = "http://localhost:8000/v1/resumes/"
    const urlSelectedResume = "http://localhost:8000/v1/resumes/"
    const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const [resumes, setResume] = useState([]);
    //const [selectedResume, setSelectedResume] = useState([]);
    const router = useRouter()

    useEffect(async () => {
        const response = await fetch(urlResume, {method: "GET" });
        const json = await response.json();
        setResume(json);
    }, [])

    


    // const personalityInsights = new PersonalityInsightsV3({
    //     version: '2017-10-13',
    //     authenticator: new IamAuthenticator({
    //         apikey: 'RBsD5czPzxXTMSYYFaHMs_tmlqHUqQlyjvOpCmHZEphE',
    //     }),
    //     serviceUrl: 'https://api.us-west.personality-insights.watson.cloud.ibm.com',
    //     disableSslVerification: true,
    //     headers: {
    //         'X-Watson-Learning-Opt-Out': 'true'
    //     }
    // });
    // const profileParams = {
    //     content: text,
    //     contentType: 'text/plain',
    //     consumptionPreferences: true,
    //     rawScores: true,
    //   };
      
    //   personalityInsights.profile(profileParams)
    //     .then(profile => {
    //       console.log(JSON.stringify(profile, null, 2));
    //     })
    //     .catch(err => {
    //       console.log('error:', err);
    // });

    return (
        <Container>
            <h2>Menu</h2>
        </Container>
    );
}
export default Personality;