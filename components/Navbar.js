import React, { useState, useEffect} from 'react';

import { Container, Typography, Button } from '@material-ui/core'
import Head from './Head';

function NavBar(page){
    return(
        <>
        <div>
            <Container>
                <Head title={`${page.name}`}/>
            
                <Button href="/">Home</Button>
                <Button href="/upload">Upload</Button>
                <Button href="/demo">Demo</Button>
            </Container>
            <hr></hr>
            <Typography variant="h3">{page.name}</Typography>
        </div>
        </>
    );
}
export default NavBar;