const Customer = (data) => {
  const { name, description, img, website } = data.sponsor;
  console.log(img);
  return (
    <div key={name} className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          src={img}
          alt="customer image"
          style={{ width: "225", height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-tex">{description}</p>
          <p>{website}</p>
        </div>
      </div>
    </div>
  );
};

// 100x225

export default Customer;
