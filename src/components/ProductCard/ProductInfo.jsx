import React from "react";

export default function ProductInfo({ title, brand }) {
  return (
    <section>
      <h1>
        {brand} 
        <span>{title}</span>
      </h1>
    </section>
  );
}
