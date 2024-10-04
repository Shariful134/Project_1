import { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProvideres";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);
  const { title, _id, price, img } = service;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      Price: amount,
      date,
      services_id: _id,
      image: img,
    };
    console.log(order);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Your Booking was Successfully");
        }
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center p-5">Please Booking Now: {title} </h2>
      <form onSubmit={handleBooking}>
        <div className="grid grid-cols-2 gap-x-12 gap-y-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input border-current w-full "
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="Email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input border-current w-full "
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Due Amount</span>
            </div>
            <input
              type="text"
              placeholder="amount"
              name="amount"
              defaultValue={"$" + price}
              className="input border-current w-full "
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input border-current w-full "
            />
          </label>
        </div>
        <button className="btn btn-block bg-slate-400 my-5 uppercase">
          order confirm
        </button>
      </form>
    </div>
  );
};

export default Bookings;
