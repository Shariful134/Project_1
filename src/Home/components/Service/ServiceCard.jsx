import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-slate-300 max-w-96 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold">Price: ${price}</p>
          <div className="card-actions justify-between">
            <button className="btn  btn-success">
              <Link to={`/booking/${_id}`}>Booking Now</Link>
            </button>
            <button className="btn  btn-success">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
