import { getAllProducts } from "@/actions/productsAPI";

export async function ProductList() {
  const { products } = await getAllProducts();
  console.log(products);

  return <div>page</div>;
}
