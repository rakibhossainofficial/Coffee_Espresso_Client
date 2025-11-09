import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const SignIn = () => {

  const {signInUser} = useContext(AuthContext)
  console.log(signInUser);
  

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
     .then(result =>{
      console.log(result.user);
      console.log("Login Success");
    })
    .catch(error=>{
      console.log(error);
    })
  };


  return (
    <div className="flex items-center  justify-center">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Login</legend>

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

        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
