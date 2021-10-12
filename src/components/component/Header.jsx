import React, { useState } from 'react';
import {MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return <MDBNavbar expand="lg" light bgColor="primary">
        <MDBContainer fluid>
            <MDBNavbarBrand className="text-white">
                <span>
                    <MDBIcon fas icon="book-open"/>
                </span>
                <span>Contact</span>
            </MDBNavbarBrand>
            <MDBNavbarToggler aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" className="text-white" onClick={() => setShowMenu(!showMenu)}>
                <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showMenu}>
                <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                    <MDBNavbarItem>
                        <MDBNavbarLink className="nav-link">
                            <NavLink to="/" className="text-white">
                                Home
                            </NavLink>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink className="nav-link">
                            <NavLink to="/add-user" className="text-white">
                                Add User
                            </NavLink>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink className="nav-link">
                            <NavLink to="/about" className="text-white">
                                About
                            </NavLink>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
};

export default Header;