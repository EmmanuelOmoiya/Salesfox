import logo from '../assets/Salesfox.svg';
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <ul className={ show ? 'links active': 'links'}>
                <li className="link-li">
                    <a href='#'onClick={toggle}>Home</a>
                </li>
                <li className="link-li">
                    <a href='#features'onClick={toggle}>Features</a>
                </li>
                <li className="link-li">
                    <a href='#how'onClick={toggle}>How it Works</a>
                </li>
            </ul>
            <button className="get njh">Get Started</button>
            <div className={ show ? "hamburger drop" : "hamburger" } onClick={toggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
}
 
export default Navbar;