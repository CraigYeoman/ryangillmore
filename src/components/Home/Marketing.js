import { FaFlagCheckered } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import Salina from '../../images/salina.png'
import Nascar from '../../images/nascar.svg'
import wmna from '../../images/wmna.jpg'



const Marketing = () => {
  return (
    <div className="px-5 py-6 bg-body-tertiary" id="hanging-icons">
      <div className="d-flex flex-column align-items-center g-4 py-5 row-cols-1 row-cols-lg-3">
          <h2 className="display-5 fw-bold lh-1 mb-3 text-center">
            2023 Highlights
          </h2>
        <div className="col d-flex align-items-center p-3">
          <div className="d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
            <img src={Salina} alt="Salina Highbanks Speedway" className="w-100px"/>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis mb-2">2023 Salina Highbanks Points Champion</h3>
            
            
          </div>
        </div>
        <div className="col d-flex align-items-center p-3">
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img src={Nascar} alt="Nascar" className="w-100px"/>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">2023 NASCAR Track Points Champion</h3>
            
          </div>
        </div>
        <div className="col d-flex align-items-center p-3">
        <div className="d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3">
            <img src={wmna} alt="Women in Motorsports North America" className="w-100px"/>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Women in Motorsports North America</h3>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
