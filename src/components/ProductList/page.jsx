"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../CardComponent";

const LIMIT = 12; // Her istekte çekilecek ürün sayısı

function ProductList() {
  const [products, setProducts] = useState([]); // Ürün listesi
  const [skip, setSkip] = useState(0); // Atlanacak ürün sayısı (sayfalama)
  const [loading, setLoading] = useState(false); // Yükleniyor durumu
  const [hasMore, setHasMore] = useState(true); // Daha fazla ürün var mı?

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      console.log(data.products);
      setProducts((prev) => [...prev, ...data.products]); // Yeni ürünleri ekle
      if (data.products.length < LIMIT) setHasMore(false); // Çekilen ürün sayısı limitten azsa, daha fazla ürün yok
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loading &&
        hasMore
      ) {
        setSkip((prev) => prev + LIMIT); // Skip'i artırarak sonraki ürünleri getir
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="container m-auto">
      <div className="flex justify-center flex-wrap">
        {products.map((product) => (
          <CardComponent
            key={product.id}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            onButtonClick={() => console.log(`Product ${product.id} clicked!`)}
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more products to load</p>}
    </div>
  );
}

export default ProductList;
