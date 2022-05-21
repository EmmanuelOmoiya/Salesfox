import Modal from './modal';
import { useState } from 'react';

const Prompt = () => {
    const [mode, setMode] = useState(false);
    const change = () =>{
        setMode(!mode);
    }

    return (  
        <>
        {mode && <Modal />}
        <div className="prompt">
            <div className="pro">
                <p className="prode">
                    Get the Conversation, Conversion & Payments all in <span className="green">1</span> bot
                </p>
                <br />
                <button className="get dtt" onClick={change}>Get Started</button>
            </div>
        </div>
        </>
    );
}
 
export default Prompt;