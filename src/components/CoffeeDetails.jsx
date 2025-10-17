import React from "react";
import { useLoaderData } from "react-router";
import CoffeeDetailsPage from "./CoffeeDetailsPage";

const CoffeeDetails = () => {
  const coffeeDatas = useLoaderData();
  console.log(coffeeDatas);

  return (
    <div>
      coffe Details
      {coffeeDatas.map((coffee) => (
        <CoffeeDetailsPage coffee={coffee}></CoffeeDetailsPage>
      ))}
    </div>
  );
};

export default CoffeeDetails;
