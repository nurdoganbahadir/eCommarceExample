"use client";
import React from "react";

const CardComponent = ({ title, description, thumbnail, onButtonClick }) => {
  return (
    <div className="w-72 max-w-xl rounded-lg shadow-lg overflow-hidden bg-white m-4">
      <img className="w-full h-48 object-contain" src={thumbnail} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 mt-2">
          {description || "Bu alan açıklama metni içindir. Varsayılan metin."}
        </p>
        <button
          onClick={onButtonClick}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
