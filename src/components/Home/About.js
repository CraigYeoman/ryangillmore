
import Button from "react-bootstrap/Button";
import Karla from '../../images/karla'

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-4 ">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Karla}
            className="d-block mx-lg-auto img-fluid rounded-3"
            alt="Karla Leland"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">
            Karal Leland
          </h2>
          <p className="lead text-secondary">
            Breaking barriers for women in racing.
          </p>
          <p className="lead text-secondary">
            I'm excited for the opportuniy to advance in the racing world and move to the ARCA or NASCAR Craftsman Truck series and finallly to the NASCAR Cup Series.  I appreciate the chance to be a positive infulence for all up and coming females interested in racing.
          </p>
          <p className="lead text-secondary">We're always looking to team up with sponsors.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button href="#Contact" variant="outline-secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
