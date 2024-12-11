"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../Card/Card";
import CategoriesBar from "../Categories/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  selectProducts,
} from "../../lib/features/products/productsSlice";

function MainPage() {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <CategoriesBar setCategory={setCategory} />
      <div className="container max-w-7xl m-auto mt-5 z-0">
        <div className="flex justify-center flex-wrap">
          {products?.map((product) => (
            <CardComponent
              key={product.id}
              brand={product.brand}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              discountPercentage={product.discountPercentage}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
