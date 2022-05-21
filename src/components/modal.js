const Modal = (change ,rep) => {
    return (  
        <div className={rep ? "modal" : "modal inactive"}>
            <div className="msg">
                <button className="twit" onClick={(e)=>window.location.href="https://twitter.com/_Salesfox"}>Twitter Bot</button>
                <p className="or">Or</p>
                <button className="insta" onClick={(e) => window.location.href="https://instagram.com/sales_flux"}>Instagram Bot</button>
            </div>
      </div>
    );
}
 
export default Modal;