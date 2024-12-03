import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductDetail({ product }) {
  return (
    <div className="container flex m-auto max-w-6xl gap-6">
      <div>
        <ProductImage images={product.images} />
      </div>
      <div className="">
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
        />
      </div>
    </div>
  );
}
