import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { logout } from "../modules/authManager";

export const Header = ({ isLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RRNavLink} to="/">World Cuisine</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn &&
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/recipe">Recipes</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                    <Nav navbar>
                        {isLoggedIn &&
                            <>
                                <NavItem>
                                    <NavLink aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer" }} onClick={logout} tag={RRNavLink} to="/login">Logout</NavLink>
                                </NavItem>
                            </>
                        }
                        {!isLoggedIn && (
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}