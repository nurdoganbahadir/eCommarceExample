import MainPage from "@/components/Main/MainPage";
import "./globals.css";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="m-auto">
      <ProductsPage />
    </div>
  );
}
