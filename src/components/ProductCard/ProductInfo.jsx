"use client";
import CardRating from "../Card/CardRating";
import ChooseQuantity from "./ChooseQuantity";
import CardButton from "./CardButton";

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
    <section className="my-12">
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
          <p
            className={`${
              stock >= minimumOrderQuantity ? "text-green-400" : "text-red-600"
            }`}
          >
            <span className="font-bold text-black">Stock: </span>
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
        <CardButton minimumOrderQuantity={minimumOrderQuantity} stock={stock} />
      </div>
    </section>
  );
}
