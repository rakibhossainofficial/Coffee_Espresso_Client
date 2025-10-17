import React from "react";

const AddCups = () => {
  const handlecupadd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const cupsData = { name, price, photo };
    console.log(cupsData);

    fetch("http://localhost:3000/cups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cupsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Cup Added successfully");
        }
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Add new cups</h1>
      <form onSubmit={handlecupadd} className="grid grid-cols-3 gap-5">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            className="border p-2 rounded-sm"
            type="text"
            name="name"
            required
            placeholder="Cup Name"
          />
        </div>
        <div className="flex flex-col">
          <label>Price</label>
          <input
            className="border p-2 rounded-sm"
            type="number"
            name="price"
            placeholder="Cup price"
          />
        </div>
        <div className="flex flex-col">
          <label>Photo Url</label>
          <input
            className="border p-2 rounded-sm"
            type="text"
            name="photo"
            placeholder="Photo Url"
          />
        </div>
        <input
          className="border p-2 rounded-sm bg-black text-white cursor-pointer"
          type="submit"
          value="Add Cups"
        />
      </form>
    </div>
  );
};

export default AddCups;
