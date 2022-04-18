import React, { FC } from "react";
import { ProductProps } from "./type";
import Button from "@components/atoms/button";
import { useCheckoutDataContext } from "@context/checkout";
import { ReducerIds } from "@context/checkout/type";

const ProductCard: FC<ProductProps> = (props: ProductProps) => {
  const { id, name, price, description, image } = props;

  const { checkoutData, setCheckoutData } = useCheckoutDataContext();

  return (
    <div className="flex flex-col p-5 bg-white shadow-lg  transition-all">
      <img src={image?.src} alt={image?.alt} />
      <strong className="text-xl">{name}</strong>
      <p className="mb-3">{`£ ${price.toFixed(2)}`}</p>
      <p className="mb-5">{description}</p>
      <Button
        buttonType="primary"
        className="mt-auto"
        icon="arrow-right"
        onClick={() => {
          setCheckoutData({
            type: ReducerIds.ADD_TO_CART,
            payload: props,
          });
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
