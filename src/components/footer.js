import logo from '../assets/Salesfox.svg';

const Footer = () => {
    return (  
        <div className="footer">
            <div className="fotg">
                <div className="fp">
                    <img src={logo} alt="" className="logo" />
                    <p>A Social Conversion bot</p>
                </div>
                <div className="sp">
                    <ul>
                        <li className="lm">
                            <a href="">Home</a>
                        </li>
                        <li className="lm">
                            <a href="">Features</a>
                        </li>
                        <li className="lm">
                            <a href="">How it works</a>
                        </li>
                    </ul>
                </div>
                <p>Call Us: +234 7043738436</p>
                <div className="tp">
                    <p>Follow Us On</p>
                    <p></p>
                </div>
            </div>
            <br />
            <p className="copy">Copyright 2022 &copy; Salesfox. All Rights Rserved</p>
        </div>
    );
}
 
export default Footer;