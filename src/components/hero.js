import intro from '../assets/Group-1.svg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={intro} alt="" className="intro" />
            <br />
            <button className="get in">Get Started</button>
        </div>
    );
}
 
export default Hero;