import '../../App.css';
import { Stack, Image, Container } from 'react-bootstrap';


import logo from '../../assets/logo.svg'; // Adjust the path to your logo file

function HomePage() {
  return (
    <Container>
    <body className='Home'>
      <Stack>
        <h2>Welcome to the Decker Ayers Portfolio</h2>
      </Stack>
    </body>
    </Container>
  );
}

export default HomePage;