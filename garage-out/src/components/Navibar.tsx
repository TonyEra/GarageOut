import {Nav, Container, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navibar() {
    return (
      <Navbar collapseOnSelect expand="sm" bg='dark' variant='dark'>
          <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <NavLink eventKey={1} as={Link} to="/">Home</NavLink>
            
          </Navbar.Collapse>
      </Navbar>
    )
}

export default Navibar;