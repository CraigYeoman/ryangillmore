import Sponsor from "./Sponsor";
import Ameriflex from '../../images/ameriflex.webp'

const Sponsors = () => {
  const sponsors = [
    {
      name: "Ameriflex",
      description: "Ameriflex is awsome",
      img: Ameriflex,
      website: "www.ameriflex.com",
    }
  ];
  return (
    <div className="album py-5" id="Sponsors">
      <div className="container">
        <h3 className="pb-3 text-center">Sponsors</h3>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {sponsors.map((sponsor) => (
            <Sponsor sponsor={sponsor} key={sponsor.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
