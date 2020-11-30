import React from 'react';
import {useDispatch} from "react-redux";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';
import {setCartPopUp} from '../../redux/actions/orderActions';
import {FaCookieBite} from 'react-icons/fa';
const ShirNavbar = () => {
    const dispatch = useDispatch();
    const openCart = () => {
        dispatch(setCartPopUp())
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="shir_navbar">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto shir_navbar_list">
                    <Nav.Link href="#gallery" className="shir_navbar_link mx-5"> גלריית טעימות</Nav.Link>
                    <Nav.Link href="#contact" className="shir_navbar_link mx-5">צור קשר</Nav.Link>
                    <Nav.Link href="#about" className="shir_navbar_link mx-5">טעימה עלינו</Nav.Link>
                    <Nav.Link href="#order" className="shir_navbar_link mx-5">להזמנות</Nav.Link>
                    <a

                        onClick={openCart}
                        href="#about"
                        className="shir_navbar_link mx-5">
                        <FaCookieBite style={{marginLeft:'1rem',width:'2.5rem'}}/>
                        סל העוגיות שלי

                    </a>
                </Nav>
                <Nav>

                    <Navbar.Brand href="#header" className="pr-4">
                        <img
                            src={shirLogo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default ShirNavbar;
