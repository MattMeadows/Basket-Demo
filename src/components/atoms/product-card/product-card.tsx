import React, { FC } from "react";
import { ProductProps } from "./type";
import Button from "@components/atoms/button";

const ProductCard: FC<ProductProps> = ({
  name,
  price,
  description,
  image,
}: ProductProps) => {
  console.log(image);

  return (
    <div className="flex flex-col border-2 rounded-md p-5">
      <img src={image?.src} alt={image?.alt} />
      <strong className="text-xl mb-5">{name}</strong>
      <p>{`£ ${price.toFixed(2)}`}</p>
      <p className="mb-5">{description}</p>
      <Button buttonType="primary" className="mt-auto" icon="arrow-right">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
