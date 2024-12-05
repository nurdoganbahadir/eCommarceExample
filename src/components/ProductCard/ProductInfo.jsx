import React from "react";
import CardRating from "../Card/CardRating";
import ChooseQuantity from "./ChooseQuantity";

export default function ProductInfo({
  title,
  brand,
  rating,
  reviews,
  price,
  discountPercentage,
  stock,
  minimumOrderQuantity,
}) {
  const discountPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <section>
      <div>
        <h1 className="font-bold text-lastColor text-2xl">
          {brand}
          <span className="text-black"> {title}</span>
        </h1>
      </div>
      <div className="flex justify-start align-align-items-center my-4 gap-2 text-sm">
        <p className="bg-yellow-200 rounded-md px-2">{rating}</p>
        <CardRating rating={rating} />
        <p className="text-lastColor font-bold">{reviews.length} Comments</p>
      </div>
      <div className="flex align-items-center gap-3">
        <p className="font-bold text-3xl text-gray-700">{discountPrice} $</p>
        <p className="line-through text-xl text-gray-400">{price} $</p>
        <div className="flex gap-1 bg-green-300 rounded-md text-green-800 justify-center align-items-center ml-5 px-2 pt-1.5 text-sm">
          <p className="text-sm">Earning</p>
          <p>{(price - discountPrice).toFixed(2)} $</p>
        </div>
      </div>
      <div className="text-sm flex justify-between border-2 rounded-md p-2 bg-gray-200 mt-4">
        <div>
          <p>
            <span className="font-bold">Stock: </span>
            {stock >= minimumOrderQuantity ? "In Stock" : "Not Stock"}
          </p>
          <p>
            <span className="font-bold">Minimum Order: </span>
            {minimumOrderQuantity}
          </p>
        </div>
        <div>
          <ChooseQuantity
            minimumOrderQuantity={minimumOrderQuantity}
            stock={stock}
          />
        </div>
      </div>
      <div className="w-full my-5 flex justify-between align-items-center gap-3">
        <button className="w-[80%] bg-secondary rounded-md text-white font-bold py-2 hover:bg-primary flex justify-center align-items-center">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          ADD TO CART
        </button>
        <button className="border-2 rounded-md py-2">
          <svg
            className="h-7 w-10 text-gray-500 hover:text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
        <button className="border-2 rounded-md py-2">
          <svg
            className="h-7 w-10 text-gray-500 hover:text-secondary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
