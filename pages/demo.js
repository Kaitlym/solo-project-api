import React from 'react';

import Head from '../components/head';
import NavBar from '../components/Navbar';
import Template1 from '../components/Template1';

import Link from 'next/link';

import { Container, Typography, Button,  } from '@material-ui/core';

export const Demo = () => (
  <Container>
    <NavBar name="Demo"/>
  </Container>
);

export default Demo;