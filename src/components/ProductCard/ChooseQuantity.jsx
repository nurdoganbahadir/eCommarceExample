"use client";
import { useState } from "react";

export default function ChooseQuantity({ minimumOrderQuantity, stock }) {
  const [quantity, setQuantity] = useState(minimumOrderQuantity); // Başlangıç değeri

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(stock, prevQuantity + 1)); // Değeri artır, maksimum stok değerini geçme
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) =>
      Math.max(minimumOrderQuantity, prevQuantity - 1)
    ); // Değeri azalt, minimum değerin altına düşme
  };

  return (
    <div className="flex justify-between items-center">
      <button
        type="button"
        id="decrement-button"
        onClick={handleDecrement}
        className="bg-gray-600 p-3 rounded-full"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>

      <input
        type="number"
        value={quantity} // Input değeri state'e bağlı
        readOnly // Manuel giriş yapılmasını engelle
        className="bg-gray-200 text-center text-sm font-bold p-3"
      />
      <button
        type="button"
        id="increment-button"
        onClick={handleIncrement}
        className="bg-gray-600 p-3 rounded-full"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}
