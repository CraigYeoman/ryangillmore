import Button from "react-bootstrap/Button";
import Ameriflex from '../../images/ameriflex.webp'
import YeomanRaceEngines from '../../images/yeomanraceengines.jpg'



const MainSponsor = () => {

  const sponsors = [
    {
      name: "Ameriflex",
      description: "Ameriflex is awsome",
      img: Ameriflex,
      website: "www.ameriflex.com",
    },
    {
      name: "Yeoman Race Engines",
      description: "Yeoman Race Engines",
      img: YeomanRaceEngines,
      website: "www.yeomanraceengines.com",
    }

  ];

  return (
    <div className="bg-main px-4 py-5 shadow-lg position-relative" id="About">
      <h1 className="display-4 fw-bold lh-1 mb-3 text-center text-white">
            Sponsors
      </h1>
      
      {sponsors.map((sponsor, index) => (

      <div key={sponsor.name} className={` row ${index % 2 === 0 ? "row flex-lg-row-reverse" : "row flex-lg-row"} align-items-center g-5 p-4 m-4`}>
      <div className="col-lg-6">
        <h2 className="display-6 fw-bold text-white lh-1 mb-3">
          {sponsor.name}
        </h2>
        <p className="lead text-white">
        {sponsor.description}
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href={sponsor.site} className="text-white link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">{sponsor.name} Website</a>
        </div>
      </div>
      <div className="col-10 col-sm-8 col-lg-6 text-center">
      <img
          src={sponsor.img}
          className="d-block mx-lg-auto img-fluid rounded-3 bg-white"
          alt={sponsor.name}
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      
    </div>
          
          ))}
            {/* <div className="row flex-lg-row-reverse align-items-center g-5 p-4">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold text-white lh-1 mb-3">
                {sponsor.name}
              </h2>
              <p className="lead text-white">
              {sponsor.description}
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href={sponsor.site} className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Ameriflex Website</a>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6 text-center">
            <img
                src={sponsor.img}
                className="d-block mx-lg-auto img-fluid rounded-3 bg-white"
                alt="Ryan Gillmore"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            
          </div> */}
         
          
    </div>
  );
};

export default MainSponsor;
