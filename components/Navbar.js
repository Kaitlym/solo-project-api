import React, { useState, useEffect} from 'react';

import { Container, Typography, Button } from '@material-ui/core'
import Head from './Head';

function NavBar(page){
    return(
        <>
        <div>
            <Container>
                <Head title={`${page.name}`}/>
                <Typography variant="h4">PresenceConvert</Typography>
                {page.name == "Home" ? (
                    <Button href="/" variant="contained" color="primary">Home</Button>
                ) : (
                    <Button href="/">Home</Button>
                )}
                
                {page.name == "Upload" ? (
                    <Button href="/upload" variant="contained" color="primary">Upload</Button>
                ) : (
                    <Button href="/upload">Upload</Button>
                )}

                {page.name == "Demo" ? (
                    <Button href="/demo" variant="contained" color="primary">Demo</Button>
                ) : (
                    <Button href="/demo">Demo</Button>
                )}
            </Container>
            <hr></hr>
            
        </div>
        </>
    );
}
export default NavBar;