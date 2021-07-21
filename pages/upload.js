import React, {Component, useState, useEffect} from 'react';
import { useRouter } from 'next/router';


import NavBar from '../components/Navbar';
import Head from '../components/Head';


import { Container, Typography, Button,  } from '@material-ui/core';

function Upload(){
  const resumeUrl = "http://localhost:8000/v1/resumes/"
  const router = useRouter()
	const [selectedFile, setSelectedFile] = useState();
  

	const changeHandler = async (event) => {
		var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      setSelectedFile(event.target.result);
    };
	};
  const formSubmission = async () => {
    console.log(selectedFile)
    handleFormSubmission({id:0, text:selectedFile})
  }
	const handleFormSubmission = async (resume) => {
    const body = JSON.stringify(resume)
    console.log(body)
    const header = { 'content-type': 'application/json'}
    const response = await fetch(resumeUrl, {method: "POST", body, headers: { 'content-type': 'application/json'}});
    router.push("/upload");
  }

  return(
    <Container>
      <NavBar name="Upload"/>

      <input type="file" name="file" onChange={changeHandler} />
      <button onClick={formSubmission}>Submit</button>
    </Container>
  )
}

export default Upload;