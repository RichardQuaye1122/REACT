import React from "react";
import Button from './Button';

const NavBar = () => {
  return (
    <>
      <div className="place-self-center shadow-lg p-3 bg-gray-300 rounded-lg font-bold m-5">
        <h1 className="text-3xl text-orange-600 mt-10">Welcome to Mr. Quaye's React Navbar </h1>
        <Button title="Send" color="white" bg="blue" />
      </div>
    </>
  );
};

export default NavBar;
