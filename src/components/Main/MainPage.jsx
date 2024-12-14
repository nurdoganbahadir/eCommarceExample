"use client";

import { useEffect, useState } from "react";
import { useGetProductsQuery } from "@/lib/features/products/productsApiSlice";
import CardComponent from "../Card/Card";
import CategoriesBar from "../Categories/CategoriesBar";
import InfiniteScroll from "react-infinite-scroll-component";

function MainPage() {
  const [skip, setSkip] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState([]);
  console.log(products);

  const { data, isError, isLoading, isSuccess } = useGetProductsQuery(skip);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const fetchMoreData = () => {
    if (skip <= products.length) {
      setTimeout(() => {
        setSkip(skip + 10);
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <>
        <CategoriesBar />
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
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
        </InfiniteScroll>
      </>
    );
  }

  return null;
}

export default MainPage;
