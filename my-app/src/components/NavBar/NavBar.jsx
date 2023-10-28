import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function NavBar () {


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='brand' href="/">COOLSITE</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/contact">CONTACTO</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;