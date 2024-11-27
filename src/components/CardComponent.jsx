"use client";
import React from "react";

const CardComponent = ({ title, thumbnail, brand, price }) => {
  return (
    <div className="w-56 rounded-lg overflow-hidden m-2 border hover:shadow-md hover:cursor-pointer">
      <img className="w-full h-72 object-contain" src={thumbnail} alt={title} />
      <div className="p-2">
        <h3 className="font-semibold text-gray-800">{brand}</h3>
        <p className="text-gray-600  text-sm mt-1">{title}</p>
        <p className="text-lastColor font-semibold">{price} $</p>
      </div>
    </div>
  );
};

export default CardComponent;
