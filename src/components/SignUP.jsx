import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const SignUP = () => {
  const { creatUser } = useContext(AuthContext);

  const handleSignUP = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userData } = Object.fromEntries(
      formData.entries()
    );
    // const email = formData.get("email")
    // const password = formData.get("password")
    console.log(email, password, userData);

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Your Account Is Created",
                icon: "success",
                draggable: true,
              });
            }
            console.log("after Profile Save", data);
            form.reset();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSignUP}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
        <input
          type="name"
          name="name"
          required
          className="input"
          placeholder="Name"
        />

        <label className="label">Photo Url</label>
        <input
          type="text"
          name="photo"
          className="input"
          placeholder="Photo Url"
        />

        <label className="label">Phone Number</label>
        <input
          type="number"
          name="number"
          className="input"
          placeholder="Phone Number"
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Register</button>
      </form>
    </div>
  );
};

export default SignUP;
