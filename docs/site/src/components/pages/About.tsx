import React from 'react';
import logo from './logo.svg';
import './../../App.css';
import { Button, Stack } from 'react-bootstrap';


function AboutPage() {
  return (
    <div className="About">
      <header className="About-header">
        <Stack>
          <Stack direction="horizontal" className='centered' gap={2}>
            <Button variant="primary">Home</Button>
            <Button variant="primary">About</Button>
            <Button variant="primary">Contact</Button>
          </Stack>
        </Stack>
      </header>
      <body className='About-body'>
      </body>
    </div>
  );
}

export default AboutPage;