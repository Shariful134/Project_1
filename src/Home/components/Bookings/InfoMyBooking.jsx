import React from "react";
import Swal from "sweetalert2";

const InfoMyBooking = ({ myBooking, handleDelete, handleBookingConfirm }) => {
  // console.log(myBooking);

  const { _id, customerName, email, image, Price, date, status } = myBooking;
  // console.log(_id);

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline bg-slate-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded-md max-w-28">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{Price}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span>Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-active btn-secondary"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default InfoMyBooking;
