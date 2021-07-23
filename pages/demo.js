import React from 'react';

import NavBar from '../components/Navbar';
import Website from '../components/Website';
import Personality from '../components/Personality';


import { Container, Typography, Button,  } from '@material-ui/core';

export const Demo = () => (
  <>
  <NavBar name="Demo"/>
  <div className="left">
  <Container>
    <Website/>
  </Container>
  </div>
  <div className="right">
    <Container>
      <Personality/>
    </Container>
  </div>
  </>
);

export default Demo;