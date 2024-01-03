import Button from "react-bootstrap/Button";
import FacebookPagePlugin from "../Facebook";


const Bio = () => {
  return (
    <div className="bg-red px-4 py-5" id="About">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-4">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold lh-1 mb-3 text-center text-white">
            About
          </h1>
          <p className="lead text-white">
            A description of Karla and how she got in racing.
          </p>
          {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button href="#Contact" variant="outline-secondary">
              Contact
            </Button>
          </div> */}
        </div>
        <div className="col-10 col-sm-8 col-lg-6 text-center">
        <FacebookPagePlugin url="https://www.facebook.com/profile.php?id=100072160475597" width={340} height={500} />
        </div>
        
      </div>
    </div>
  );
};

export default Bio;
