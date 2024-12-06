"use client";
import ProductComments from "./ProductComments";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductDetail({ product }) {
  return (
    <>
      <div className="container flex m-auto my-10 max-w-6xl gap-6">
        <div className="w-[40%]">
          <ProductImage images={product.images} />
        </div>
        <div className="w-[60%]">
          <ProductInfo
            title={product.title}
            brand={product.brand}
            price={product.price}
            stock={product.stock}
            rating={product.rating}
            warrantyInformation={product.warrantyInformation}
            discountPercentage={product.discountPercentage}
            shippingInformation={product.shippingInformation}
            minimumOrderQuantity={product.minimumOrderQuantity}
            returnPolicy={product.returnPolicy}
            availabilityStatus={product.availabilityStatus}
            reviews={product.reviews}
            dimensions={product.dimensions}
          />
        </div>
      </div>
      <div className="container m-auto max-w-6xl">
        <ProductComments reviews={product.reviews} />
      </div>
    </>
  );
}
