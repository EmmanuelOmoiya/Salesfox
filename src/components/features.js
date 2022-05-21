import first from '../assets/glass.svg';
import second from '../assets/autom.svg';
import third from '../assets/circle.svg';
import fourth from '../assets/coin.svg';

const Features = () => {
    return (  
        <div className="features" id="#features">
            <div className="main">
                <div className="left">
                <p className="fetp">Features</p>
                <p className="detf">Get the Conversation, Conversion & Payments all in <span className="green">1</span> bot</p>
                </div>
                <div className="right">
                    <div className="box">
                        <img src={first} alt="" className="bimg" />
                        <p className="bdet">Simple Keyword search - Hashtags</p>
                    </div>
                    <div className="box">
                        <img src={second} alt="" className="bimg" />
                        <p className="bdet">Automated Algorithm</p>
                    </div>
                    <div className="box">
                        <img src={third} alt="" className="bimg" />
                        <p className="bdet">Salesfox bot for Twitter and Instagram</p>
                    </div>
                    <div className="box">
                        <img src={fourth} alt="" className="bimg" />
                        <p className="bdet">Payments integrated services using Credo payments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Features;