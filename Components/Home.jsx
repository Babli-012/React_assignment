import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" container flex flex-col gap-10 ">
      <h1 className=" font-bold text-2xl">Welcome to the CRUD App</h1>
      <Link to="/Crud">
        <button className="btn bg-midnight hover:bg-sky-700">Go to CRUD Operations</button>
      </Link>
    </div>
  );
}

export default Home;