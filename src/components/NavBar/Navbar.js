import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h1 data-aos="fade-right" data-aos-duration="2000"><a href="/">Isabelle Paré</a></h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className="navbar-container">
                <p className="nav-p"><a href="/">Accueil</a></p>
                <p className="nav-p"><a href="/gallerie">Galerie</a></p>
                <p className="nav-p"><a href="/contact">Contact</a></p>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container">
                        <p><a href="/">Accueil</a></p>
                        <p><a href="/gallerie">Galerie</a></p>
                        <p><a href="/contact">Contact</a></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar
