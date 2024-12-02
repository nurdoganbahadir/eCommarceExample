import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductDetail({ product }) {
  return (
    <div className="container flex">
      <div>
        <ProductImage images={product.images} />
      </div>
      <div className="">
        <ProductInfo title={product.title} brand={product.brand} />
      </div>
    </div>
  );
}
