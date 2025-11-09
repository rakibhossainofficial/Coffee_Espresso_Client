import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import NewCups from "./NewCups";

const Home = () => {

  const initialCoffee  = useLoaderData()
  const [coffeeData, setCoffeeDataa] = useState(initialCoffee)
  console.log(coffeeData);

  return (
    <div>
      Home

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

      {coffeeData.map((data) => (
        <CoffeeCard coffeeData={coffeeData} setCoffeeDataa={setCoffeeDataa} key={data._id} data={data}></CoffeeCard>
      ))}
      </div>

   
    </div>
  );
};

export default Home;
