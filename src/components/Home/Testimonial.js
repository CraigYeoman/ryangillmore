import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="my-5">
      <div className="p-5 text-center">
        <div className="container py-5">
          <h1 className="text-white">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h1>
          <p className="col-lg-8 mx-auto lead">
            "If you are looking for the best reliable horsepower in the business
            Yeoman Race Engines is the answer. If you want to compete on the
            next level contact Yeoman and the crew. Customer service and
            absolute best tech service in the business. I want to thank Yeoman
            Race Engines for all of my success this year and cannot wait until
            we fire off next year!"
          </p>
          <p> - John Potter</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
