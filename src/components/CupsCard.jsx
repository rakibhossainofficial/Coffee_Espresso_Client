import React from "react";
import Swal from "sweetalert2";

const CupsCard = ({ data }) => {
  console.log(data);
  const { _id, name, photo, price } = data;
  const cupsDelete = () => {
    fetch(`http://localhost:3000/cups/${_id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  };
  return (
    <div className="card bg-base-100 border-2 border-gray-400 shadow-md">
      <figure>
        <img src={data.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p className="font-bold">Price : {data.price}</p>
        <div className="flex gap-3">
          <button className="btn bg-blue-600 btn-primary">Update</button>
          <button onClick={cupsDelete} className="btn bg-red-600 btn-primary">
            Delete
          </button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CupsCard;
