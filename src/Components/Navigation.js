import React from 'react';
import {Nav, Navbar, Container, Button, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import {useSelector } from 'react-redux';
import {useLogoutUserMutation} from '../services/appApi';

function Navigation() {
  //hook for not login again from redux
  const user = useSelector((state)=> state.user );
//logout user from redux
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e){
    e.preventDefault();
    await logoutUser(user);
    //redirect to home page
    window.location.replace("/");
  }

  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <LinkContainer to="/">
        <Navbar.Brand>
            <img src={logo} alt="Chat App" style={{width: 50, height:50}} />
        </Navbar.Brand>
            </LinkContainer>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {!user &&(   //logic for not login again
            <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
            <LinkContainer to="/chat">
            <Nav.Link>Chat</Nav.Link>
                </LinkContainer>
          {user && (  // dropdown  appears only when logged in
          <NavDropdown title={
                 <>
                 <img src={user.picture} alt="user" style={{width: 30, height: 30, marginRight:10, objectFit:"cover", borderRadius: "50%" }} />
                {user.name}
                 </> } id="basic-nav-dropdown">    
            <NavDropdown.Item>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </NavDropdown.Item>
          </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation;