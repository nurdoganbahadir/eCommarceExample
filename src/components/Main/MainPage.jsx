"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../Card/Card";
import CategoriesBar from "../Categories/CategoriesBar";

const LIMIT = 12;

function MainPage() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products${
          category ? `/category/${category}` : ""
        }?limit=${LIMIT}&skip=${skip}`
      );
      setProducts((prev) =>
        skip === 0 ? data.products : [...prev, ...data.products]
      );
      if (data.products.length < LIMIT) setHasMore(false);
      console.log(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSkip(0); // Yeni kategori seçildiğinde skip'i sıfırla
    setHasMore(true); // Yeni kategori için daha fazla ürün varsayımıyla başla
    setProducts([]); // Önceki ürünleri temizle
    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (skip > 0) {
      fetchProducts();
    }
  }, [skip]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        setSkip((prev) => prev + LIMIT);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

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
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more products to load</p>}
      </div>
    </>
  );
}

export default MainPage;
