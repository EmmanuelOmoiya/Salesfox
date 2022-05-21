import { useState } from "react";
import Features from "./features";
import Hero from "./hero";
import How from "./how";
import Modal from "./modal";
import Prompt from "./prompt";

const Body = () => {
    const [rep, setRep] = useState(false);
    const change = () =>{
        setRep(!rep)
    }
    return ( 
        <>
        {/*<Modal/>*/}
            <Hero/>
            <Features/>
            <How/>
            <Prompt/>
        </>
    );
}
 
export default Body;