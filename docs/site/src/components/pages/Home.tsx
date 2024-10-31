import '../../App.css';
import { Stack, Image, Container, Card, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


function HomePage() {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <Container>
    <body className='Home'>
      <Stack>
        <h2>Welcome to my portfolio website!</h2>
        <p>Please look around and check out my different coding projects. You visit my extra work and other socials in the links tab.</p>
        <Button size='sm' variant="secondary" onClick={()=>setShowAbout(true)}>Primary</Button>
        <Modal show={showAbout}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='Danger' onClick={()=>setShowAbout(false)}>Close</Button>
          </Modal.Footer>
        </Modal>

      
        <p>This site was built using React, Typescript, Bootstrap, and Github Pages.</p>
      </Stack>
    </body>
    </Container>
  );
}

export default HomePage;