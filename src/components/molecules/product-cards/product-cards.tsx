import React from "react";
import ProductCard from "../../atoms/product-card";

const ProductCards = ({ products }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-10">
      {products.map((product) => {
        return <ProductCard {...product} />;
      })}
    </div>
  );
};

export default ProductCards;
