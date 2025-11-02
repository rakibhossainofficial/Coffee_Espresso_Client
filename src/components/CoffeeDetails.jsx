import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const CoffeeDetails = () => {
  const coffeeDatas = useLoaderData();
  const { name, chef, details, photo, price, supplier, taste } = coffeeDatas;
  console.log(coffeeDatas);

  const nevigate = useNavigate();

  return (
    <div className="">
      <button
        onClick={() => nevigate(-1)}
        className="px-4 py-2 border-2 cursor-pointer hover:bg-gray-500 hover:text-white duration-300 border-gray-500 rounded-md my-4 font-semibold"
      >
        Back
      </button>
      <div className="flex gap-3 bg-base-100  p-4 shadow-sm">
        <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl">{name}</h2>
          <div className="badge badge-secondary">{price} Tk</div>
          <p>Chef: {chef}</p>
          <p>Taste: {taste}</p>
          <div className=" flex gap-4">
            <div className="badge badge-outline">{supplier}</div>
            <div className="badge badge-outline">{details}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
