import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {

  const coffeeData  = useLoaderData()
  console.log(coffeeData);
  


  return (
    <div>
      Home

      <div className="grid grid-cols-4 gap-5">

      {coffeeData.map((data) => (
        <CoffeeCard key={data._id} data={data}></CoffeeCard>
      ))}
      </div>
    </div>
  );
};

export default Home;
