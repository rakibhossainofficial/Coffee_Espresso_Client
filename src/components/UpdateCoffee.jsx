import React, { useEffect, useState } from "react";
import { data, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, taste, price, details, photo } =
    useLoaderData();
  // console.log(coffeeData);

  const nevigate =  useNavigate()

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const UpdateCofee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCofee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Update successfully",
            icon: "success",
            draggable: true,
          });
        }
        form.reset();
        nevigate("/")
      });
  };

  return (
    <div>
      <h3 className="text-4xl ">Update Coffee</h3>

      <form onSubmit={handleUpdateCoffee} className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="name"
              placeholder="Enter coffee name"
              required
              defaultValue={name}
            />
          </div>
          <div className="flex flex-col">
            <label>Chef</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              defaultValue={chef}
            />
          </div>
          <div className="flex flex-col">
            <label>Supplier</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              defaultValue={supplier}
            />
          </div>
          <div className="flex flex-col">
            <label>Taste</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              defaultValue={taste}
            />
          </div>
          <div className="flex flex-col">
            <label>Price</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="number"
              name="price"
              placeholder="Enter coffee price"
              defaultValue={price}
            />
          </div>
          <div className="flex flex-col">
            <label>Details</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="details"
              placeholder="Enter coffee details"
              defaultValue={details}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label>Photo</label>
          <input
            className="border border-gray-400 p-2 rounded-sm w-full"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            defaultValue={photo}
          />
        </div>
        <input
          className="p-3 w-full  rounded-sm bg-[#D2B48C] font-semibold text-black cursor-pointer mt-5"
          type="submit"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
