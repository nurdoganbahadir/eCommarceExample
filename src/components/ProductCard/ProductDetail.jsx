"use client";
import { useGetProductByIdQuery } from "@/lib/features/products/productsApiSlice";
import ProductComments from "./ProductComments";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductDetail({ productId }) {
  const { data, isError, isLoading, isSuccess } =
    useGetProductByIdQuery(productId);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <>
        <div className="container flex m-auto my-10 max-w-6xl gap-6">
          <div className="w-[40%]">
            <ProductImage images={data.images} />
          </div>
          <div className="w-[60%]">
            <ProductInfo
              title={data.title}
              brand={data.brand}
              price={data.price}
              stock={data.stock}
              rating={data.rating}
              warrantyInformation={data.warrantyInformation}
              discountPercentage={data.discountPercentage}
              shippingInformation={data.shippingInformation}
              minimumOrderQuantity={data.minimumOrderQuantity}
              returnPolicy={data.returnPolicy}
              availabilityStatus={data.availabilityStatus}
              reviews={data.reviews}
              dimensions={data.dimensions}
            />
          </div>
        </div>
        <div className="container m-auto max-w-6xl">
          <ProductComments reviews={data.reviews} />
        </div>
      </>
    );
  }
  return null;
}
