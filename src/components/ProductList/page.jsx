"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../CardComponent";

const LIMIT = 10; // Her istekte çekilecek ürün sayısı

function ProductList() {
  const [products, setProducts] = useState([]); // Ürün listesi
  const [skip, setSkip] = useState(0); // Atlanacak ürün sayısı (sayfalama)
  const [loading, setLoading] = useState(false); // Yükleniyor durumu
  const [hasMore, setHasMore] = useState(true); // Daha fazla ürün var mı?

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/recipes?limit=${LIMIT}&skip=${skip}`
      );
      console.log(data.recipes);
      setProducts((prev) => [...prev, ...data.recipes]); // Yeni ürünleri ekle
      if (data.recipes.length < LIMIT) setHasMore(false); // Çekilen ürün sayısı limitten azsa, daha fazla ürün yok
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
    <div>
      <div className="product-list flex flex-wrap">
        {products.map((product) => (
          <CardComponent
            key={product.id} // Ürün id'sine göre her bir kartın key'ini belirliyoruz
            title={product.name} // Kart başlığını ürün ismiyle dolduruyoruz
            description={product.description} // Kart açıklamasını ürün açıklamasıyla dolduruyoruz
            imageUrl={product.imageUrl} // Kartın resmini ürün resminin URL'siyle dolduruyoruz
            onButtonClick={() => console.log(`Product ${product.id} clicked!`)} // Buton tıklaması işlemi
          />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more products to load</p>}
    </div>
  );
}

export default ProductList;
