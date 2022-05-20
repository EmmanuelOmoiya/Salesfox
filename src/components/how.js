import indicator from '../assets/Indicator.svg';
import sl from '../assets/nre.svg';

const How = () => {
    return (  
        <div className="how" id='#how'>
             <h2 className="hhea">How it works</h2>
             <div className="contre">
                <img src={indicator} alt="" className='indicator'/>
                <ul className="detcon">
                     <li className="det">
                        Get connected with the bot
                     </li>
                     <li className="det">
                        Mention our bot <span className="hat">@salesfox</span> in your tweets or instagram posts
                     </li>
                     <li className="det">
                        Salesfox bot pops up and Voila!!
                     </li>
                     <li className="det">
                        Make selections through hashtags of the product you will like to purchase
                     </li>
                     <li className="det">
                         Get payment done through Credo embedded widget 
                     </li>
                </ul>
                <img src={sl} alt="" className="nre" />
             </div>
        </div>
    );
}
 
export default How;