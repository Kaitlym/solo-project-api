/* eslint-disable no-unused-vars */
import React from 'react';

import Head from '../components/Head';
import NavBar from '../components/Navbar';
import ResumeList from '../components/ResumeList';

import { Container, Typography, Button,  } from '@material-ui/core';

export const IndexPage = () => (
  <Container>
    <NavBar name="Home"/>
    <ResumeList/>
  </Container>
);

export default IndexPage;
