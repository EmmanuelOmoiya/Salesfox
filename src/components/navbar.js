import logo from '../assets/Salesfox.svg';

const Navbar = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="links">
                <li className="link-li">
                    <a href='#'>Home</a>
                </li>
                <li className="link-li">
                    <a href='#features'>Features</a>
                </li>
                <li className="link-li">
                    <a href='#how'>How it Works</a>
                </li>
            </ul>
            <button className="get njh">Get Started</button>
            <div className="hamburger">
                <p className="bar"></p>
                <p className="bar"></p>
                <p className="bar"></p>
            </div>
        </div>
    );
}
 
export default Navbar;