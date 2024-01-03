import Button from "react-bootstrap/Button";
import Ameriflex from '../../images/ameriflex.webp'


const MainSponsor = () => {
  return (
    <div className="bg-red bg-gradient px-4 py-5 shadow-lg position-relative" id="About">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-4">
      <h1 className="display-4 fw-bold lh-1 mb-3 text-center text-white">
            Sponsors
          </h1>
        <div className="col-lg-6">
          <h2 className="display-6 fw-bold text-white lh-1 mb-3">
            AmeriFlex Hose & Accessories
          </h2>
          <p className="lead text-white">
          They are a family run business that offers personalized service with a diverse range of product offerings. Their commitment to customers stands out as they aim to get you not just any product but the best one, ensuring it fits your needs without straining your budget.
 Whether it's a Food Grade Hose or a requirement for Oil Rigs, they're equipped to cater to various industry needs. What's truly impressive is their willingness to go the extra mile: customizing hoses to exact specifications on-the-spot or promptly delivering tailor-made designs.
They don't just stop at what's readily available; instead, they pride themselves on stocking 'Hard to Find' items. And if by chance they don't have what you seek, they won't leave you hanging. They'll guide you to where you can find it, displaying a rare level of dedication to customer satisfaction.
In essence, they are not just a supplier; they're a reliable partner, ensuring your needs are not just met but exceeded. They are the leading hose provider in Tulsa and if you want to support my racing program please do busienss with them.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://www.ameriflexhose.com/" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Ameriflex Website</a>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6 text-center">
        <img
            src={Ameriflex}
            className="d-block mx-lg-auto img-fluid rounded-3 bg-white"
            alt="Karla Leland"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        
      </div>
    </div>
  );
};

export default MainSponsor;
