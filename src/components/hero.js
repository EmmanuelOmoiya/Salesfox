import intro from '../assets/Group-1.svg';
import Modal from './modal';
import { useState } from 'react';

const Hero = () => {
    const [mode, setMode] = useState(false);
    const change = () =>{
        setMode(!mode);
    }
    return (
        <>
        {mode && <Modal />}  
        <div className="hero">
            <img src={intro} alt="" className="intro" />
            <br />
            <button className="get in" onClick={change}>Get Started</button>          
        </div>
        </>
    );
}
 
export default Hero;