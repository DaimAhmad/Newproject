import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiAdminLine } from 'react-icons/ri';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Update from './Form/updateform';
import React, { useContext, useState } from 'react';
import { Context } from './Context';
import img5 from '../Images/logo.png';

function Navigation() {
  const { user, handleLogout } = useContext(Context);
  const [showProfile, setShowProfile] = useState(false);

  const navbarStyle = {
    background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleClose = () => {
    setShowProfile(false);
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyle} className="bg-body-tertiary">
        <Container>
          <img src={img5} style={{ width: '5%', height: '8vh', borderRadius: '70%', marginRight: '15px' }} />
          <Navbar.Brand href="#home">MYSTISCENTS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Form className="d-flex">
                <FormControl type="text" placeholder="Search" className="mr-2" style={{ height: "25px", marginTop: "10px", marginRight: "50px", width: "60%" }} />
                <Button variant="outline-success" style={{ height: "25px", marginRight: "25px", marginTop: "10px", padding: "0px", width: "20%", color: "white" }}>Search</Button>
              </Form>
              <NavLink to='/home' style={{ textDecoration: 'none', color: 'black', marginRight: "9px", marginTop: "10px" }}>Home</NavLink>
              <NavLink to='/product' style={{ textDecoration: 'none', color: 'black', marginLeft: "20px", marginTop: "10px" }}>Products</NavLink>
              <NavLink to='/About' style={{ textDecoration: 'none', color: 'black', marginLeft: "30px", marginTop: "10px" }}>About</NavLink>
              <NavLink to='/Cart' style={{ textDecoration: 'none', color: 'black', marginLeft: "49px", marginTop: "10px" }}>Cart</NavLink>

              {/* Show the login button if user is not logged in */}
              {!user ? (
                <NavLink to='/Login' style={{ textDecoration: 'none', color: 'black', marginLeft: "30px", marginTop: "10px" }}>Login</NavLink>
              ) : (
                // Show the RiAdminLine icon if user is logged in
                <div className="profile" onClick={handleProfileClick} style={{marginLeft:"30px", marginTop:"7px"}}>
                  <RiAdminLine fontSize={20} style={{ marginRight: "10px", cursor: "pointer" }} />
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Modal */}
      <Modal show={showProfile} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title >User Profile</Modal.Title>
        </Modal.Header >
        <Modal.Body >
          <p>Welcome : {user ? user.name : 'Guest'}!</p>
          <p>{user ? user.email : 'Guest'}!</p>
          <button onClick={handleLogout}>Logout</button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
