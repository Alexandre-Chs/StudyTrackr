import React from "react";
import Image from "next/image";

const FeaturesCards = ({ icon }) => {
  return (
    <>
      <div className="w-48 p-8 border-2 h-36">
        <h3>Name feature</h3>
        <p>Description</p>
      </div>
      <div>{icon}</div>
    </>
  );
};

export default FeaturesCards;
