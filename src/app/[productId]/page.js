// import { getSingleProduct } from "@/actions/productsAPI";
import ProductDetail from "@/components/ProductCard/ProductDetail";
import React from "react";

export async function generateMetadata({ params }) {
  const { productId } = await params;

  const product = await getSingleProduct(productId);

  if (!product || !product.images || product.images.length === 0) {
    return {
      title: "Product Not Found",
      description: "This product information cannot be accessed.",
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const { productId } = await params;

  const product = await getSingleProduct(productId);
  console.log(product);
  
  return <ProductDetail product={product} />;
}
