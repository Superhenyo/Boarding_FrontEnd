import { useContext } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../UserContext"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../images/Logo.png'
import '../CSS/Navbar.css'
export default function WebNavBar() {
    const { user } = useContext(UserContext);
    return (
        (user.id !== null) ?
            <>
                <Container fluid className="nav-underline m-0 p-0">
                    <Navbar className="nav-color" expand="lg">
                        <Container fluid>
                            <Navbar.Brand as={NavLink} to="#" className="ms-5">
                                <Image
                                    src={logo}
                                    alt="Boarding Finder Logo"
                                    width="70"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto mx-5">
                                    {(user.id !== null) ?
                                        <>
                                            <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                                            <Nav.Link as={NavLink} to="/bordingHouses" >Houses</Nav.Link>
                                            <Nav.Link as={NavLink} to="/profile" >Profile</Nav.Link>
                                            <Nav.Link as={NavLink} to="/logout">Log Out</Nav.Link>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </>
            :
            <>
            
            </>

    )
}