"use client";
import React from "react";
import CardRating from "./CardRating";
import { useRouter } from "next/navigation";

const CardComponent = ({
  title,
  thumbnail,
  brand,
  price,
  rating,
  reviews,
  discountPercentage,
  id,
}) => {
  const router = useRouter();
  return (
    <div
      className="w-56 rounded-lg overflow-hidden m-2 border hover:shadow-md hover:cursor-pointer"
      onClick={() => router.push(`${id}`)}
    >
      <img className="w-full h-72 object-contain" src={thumbnail} alt={title} />
      <div className="p-2">
        <h3 className="font-semibold text-gray-800">{brand}</h3>
        <p className="text-gray-600 text-sm mt-1">{title}</p>
        <div className="flex">
          <CardRating rating={rating} />
          <p className="m-2 text-xs text-gray-400">{reviews.length}</p>
        </div>
        <p className="text-btnColor line-through font-semibold">{price} $</p>
        <p className="text-priceColor font-semibold">
          {(price - (price * discountPercentage) / 100).toFixed(2)} $
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
