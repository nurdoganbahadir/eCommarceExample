"use client";
import React from "react";

const CardComponent = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="w-32 max-w-md rounded-lg shadow-lg overflow-hidden bg-white m-4">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl || "https://via.placeholder.com/150"}
        alt={title || "Card Image"}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {title || "Başlık"}
        </h3>
        <p className="text-gray-600 mt-2">
          {description || "Bu alan açıklama metni içindir. Varsayılan metin."}
        </p>
        <button
          onClick={onButtonClick}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Daha Fazla
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
