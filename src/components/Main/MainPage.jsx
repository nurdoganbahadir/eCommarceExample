"use client";

import { useEffect, useState } from "react";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "@/lib/features/products/productsApiSlice";
import CardComponent from "../Card/Card";
import CategoriesBar from "../Categories/CategoriesBar";
import InfiniteScroll from "react-infinite-scroll-component";

function MainPage() {
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  console.log(skip);

  const {
    data: allProductsData,
    isError: allProductsError,
    isLoading: allProductsLoading,
    isSuccess: allProductsSuccess,
  } = useGetProductsQuery({ skip });
  console.log(allProductsData);

  const {
    data: categoryProductsData,
    isError: categoryError,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetProductsByCategoryQuery({ category, skip });
  console.log(categoryProductsData);

  useEffect(() => {
    if (!category && allProductsData) {
      if (skip === 0) {
        // İlk yükleme
        setProducts(allProductsData.products);
      } else {
        // Yeni ürünleri ekle
        setProducts((prev) => [...prev, ...allProductsData.products]);
      }
      // Tüm ürünler yüklendiyse sonsuz kaydırmayı durdur
      if (allProductsData.products.length < 10) setHasMore(false);
    } else if (category && categoryProductsData) {
      if (skip === 0) {
        // Kategori değiştiğinde ürünleri sıfırla
        setProducts(categoryProductsData.products);
      } else {
        // Yeni kategori ürünlerini ekle
        setProducts((prev) => [...prev, ...categoryProductsData.products]);
      }
      // Tüm kategori ürünleri yüklendiyse sonsuz kaydırmayı durdur
      if (categoryProductsData.products.length < 10) setHasMore(false);
    }
  }, [allProductsData, categoryProductsData, skip, category]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setSkip((prev) => prev + 10);
    }, 1000);
  };

  // if (allProductsError || categoryError) {
  //   return (
  //     <div>
  //       <h1>There was an error!!!</h1>
  //     </div>
  //   );
  // }

  if ((allProductsLoading && !category) || (categoryLoading && category)) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (allProductsSuccess || categorySuccess) {
    return (
      <>
        <CategoriesBar setCategory={setCategory} category={category} />
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          <div className="container max-w-7xl m-auto mt-5 z-0">
            <div className="flex justify-center flex-wrap">
              {products?.map((product, index) => (
                <CardComponent
                  key={index}
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
