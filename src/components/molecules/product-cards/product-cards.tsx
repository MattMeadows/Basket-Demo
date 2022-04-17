import React from "react";
import ProductCard from "../../atoms/product-card";
import { useCheckoutDataContext } from "@context/checkout";
import LoadingSpinner from "@components/atoms/loading-spinner";

const ProductCards = () => {
  const { checkoutData, setCheckoutData } = useCheckoutDataContext();
  const { products, isLoading } = checkoutData;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-10">
      {products && !isLoading && (
        <>
          {products.map((product) => {
            return <ProductCard {...product} key={`${product.name}`} />;
          })}
        </>
      )}
    </div>
  );
};

export default ProductCards;
