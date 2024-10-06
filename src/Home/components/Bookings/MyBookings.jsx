import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProvideres";
import InfoMyBooking from "./InfoMyBooking";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyBookings(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setMyBookings(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure Delete Your Data?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleleted was Successfully");
            const remaining = myBookings.filter(
              (myBooking) => myBooking._id !== id
            );
            setMyBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update
          const remaining = myBookings.filter((booking) => booking._id !== id);
          const updated = myBookings.find((booking) => booking._id !== id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setMyBookings(newBookings);
        }
      });
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl">This is MyBooking: {myBookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-black font-bold">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((myBooking) => (
              <InfoMyBooking
                key={myBooking._id}
                myBooking={myBooking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></InfoMyBooking>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyBookings;

// <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead className="bg-slate-400">
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox" />
//                 </label>
//               </th>
//               <th>Name</th>
//               <th>Job</th>
//               <th>Favorite Color</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//
//           </tbody>
//         </table>
//       </div>
