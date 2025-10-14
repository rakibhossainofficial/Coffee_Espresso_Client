import React from "react";

const CoffeeCard = ({ data }) => {
  console.log(data);

  const { photo, name, chef, details, price } = data;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{name}</h2>
            <h3 className="font-bold text-sky-500">{price}TK</h3>
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
