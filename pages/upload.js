import React, {Component, useState, useEffect} from 'react';
import { useRouter } from 'next/router';


import NavBar from '../components/Navbar';
import Head from '../components/Head';


import { Container, Typography, Button,  } from '@material-ui/core';

function Upload(){
  const resumeUrl = "http://localhost:8000/v1/resumes/";
  const router = useRouter();
	const [selectedFile, setSelectedFile] = useState();

	const handleFormSubmission = async () => {
    const body = JSON.stringify({text:selectedFile})
    console.log("body" + body)
    const header = { 'content-type': 'application/json'}
    const response = await fetch(resumeUrl, {method: "POST", body, headers: { 'content-type': 'application/json'}});
    router.push("/upload");
  }
  let fileReader;
  const  handleFileReader = async (e) => {
    const content = fileReader.result;
    
    setSelectedFile(content)
    console.log( "setselectedfile" , selectedFile)
  };
  const handleFileChosen = (file) =>{
      fileReader = new FileReader();
      fileReader.onloadend = handleFileReader;
      let text = fileReader.readAsText(file);
   };

  return(
    <Container>
      <NavBar name="Upload"/>

      <input type="file" name="file" onChange={e=> handleFileChosen(e.target.files[0])} />
      <button onClick={handleFormSubmission}>Submit</button>
      <h2>Preview:</h2>
      <Container>
      {selectedFile == null ? (
            <p>Select a file!</p>
        ) : (
          <p>{selectedFile}</p>
        )}
      </Container>
    </Container>
  )
}

export default Upload;