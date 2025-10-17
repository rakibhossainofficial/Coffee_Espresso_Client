import React from "react";
import { data, useLoaderData } from "react-router";

const NewCups = () => {
  const cupsData = useLoaderData();
  console.log(cupsData);

  return (
    <div className="grid grid-cols-4 gap-3">
      {cupsData.map((data) => (
        <div className="card bg-base-100  shadow-md">
          <figure>
            <img
              src={data.photo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p className="font-bold">
             Price : {data.price}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCups;
