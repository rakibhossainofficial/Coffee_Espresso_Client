import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleaddcoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeData = {
      name,
      chef,
      supplier,
      taste,
      price,
      details,
      photo,
    };
    console.log(coffeeData);

    // send data in server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Coffee added successfully");
          
          Swal.fire({
            title: "Coffee added successfully",
            icon: "success",
            draggable: true,
          });
        } 
        form.reset()
      });
  };

  return (
    <div className="max-w-7xl  mx-auto px-10 md:px-6 ">
      <h1 className="text-3xl font-bold md:text-6xl py-5 text-center">
        Add New Coffee
      </h1>
      <p className="w-full md:w-9/12 text-center mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>

      <form onSubmit={handleaddcoffee} className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="name"
              placeholder="Enter coffee name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Chef</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
            />
          </div>
          <div className="flex flex-col">
            <label>Supplier</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </div>
          <div className="flex flex-col">
            <label>Taste</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </div>
          <div className="flex flex-col">
            <label>Price</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="number"
              name="price"
              placeholder="Enter coffee price"
            />
          </div>
          <div className="flex flex-col">
            <label>Details</label>
            <input
              className="border border-gray-400 p-2 rounded-sm"
              type="text"
              name="details"
              placeholder="Enter coffee details"
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
          />
        </div>
        <input
          className="p-3 w-full  rounded-sm bg-[#D2B48C] font-semibold text-black cursor-pointer mt-5"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
