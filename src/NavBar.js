import React from "react";
import logo from './logo.svg';
import menuIcon from './menu-icon.svg';
function NavBar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo}></img>
            </div>
            <div className="links">
                <a>Home</a>
                <a>About Me</a>
                <a>Contact</a>
                <a>More of my work</a>
            </div>
            <img id="menu-icon" src={menuIcon}></img>
        </nav>
    )
}
export default NavBar;
