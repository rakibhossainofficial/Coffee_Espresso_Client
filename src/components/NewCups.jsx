import React from "react";
import { data, useLoaderData } from "react-router";
import CupsCard from "./CupsCard";

const NewCups = () => {
  const cupsData = useLoaderData();
  // console.log(cupsData._id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cupsData.map((data) => (
        <CupsCard data={data}></CupsCard>
      ))}
    </div>
  );
};

export default NewCups;
