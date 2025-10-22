import React from 'react';
import  "./Navbar.css";
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
    const { pathname } = useLocation();
    const  links = [
        {to: "/home", label:"Home"},
        {to:"/destination", label:"Destination"},
        {to:"/booking", label:"Booking"},
        {to:"/account", label:"Account"}
    ];
    return (
        <nav className="navbar">
                <h1 className="logo">Travel</h1>
                <ul className="nav-links">
                   {links.map(link => (
                    <li key={link.to}>
                        <Link to={link.to} className={pathname === link.to ? 'active' : ''}>{link.label}</Link>
                    </li>
                   ))}
                </ul>
            
        </nav>
    )

}
export default Navbar;