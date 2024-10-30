import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack>
          <Stack direction="horizontal" className='centered' gap={2}>
            <Button variant="primary">Home</Button>
            <Button variant="primary">About</Button>
            <Button variant="primary">Contact</Button>
          </Stack>
        </Stack>
      </header>
      <body className='App-body'>
      </body>
    </div>
  );
}

export default App;
