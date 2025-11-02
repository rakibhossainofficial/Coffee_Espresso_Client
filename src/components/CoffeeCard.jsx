import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ data, coffeeData, setCoffeeDataa }) => {
  console.log(data);

  const { _id, photo, name, price } = data;

  const handledelete = () => {
    // console.log(_id);
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
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            const remainingCoffee = coffeeData.filter(cof => cof._id !== _id)
            setCoffeeDataa(remainingCoffee)
          });
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{name}</h2>
            <h3 className="font-bold text-sky-500">{price}TK</h3>
          </div>

          <div className="flex justify-around gap-3">
            <Link to={`/coffees/${_id}`}>
              <button className="btn btn-active">View</button>
            </Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn btn-active btn-primary">Edit</button>
            </Link>
            <button
              onClick={handledelete}
              className="btn btn-active btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
