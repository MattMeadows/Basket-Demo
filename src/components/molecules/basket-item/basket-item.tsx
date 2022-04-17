import React, { FC } from "react";
import { Props } from "./type";
import { Button } from "@components/atoms";
import { useCheckoutDataContext } from "@context/checkout";
import { ReducerIds } from "@context/checkout/type";

const BasketItem: FC<Props> = ({ name, image, qty, price, id }: Props) => {
  const { checkoutData, setCheckoutData } = useCheckoutDataContext();

  return (
    <div className="grid grid-cols-3 p-5 gap-5 border-b-2 border-slate-100">
      <div className="col-span-1">
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <div className="flex flex-row items-center justify-between">
          <strong className="text-lg">{name}</strong>
          <Button
            buttonType="icon"
            iconLeft
            icon="delete"
            size="sm"
            onClick={() => {
              setCheckoutData({
                type: ReducerIds.REMOVE_FROM_CART,
                payload: id,
              });
            }}
          />
        </div>

        <div className="flex flex-row items-end pt-3">
          <div className="flex w-full items-center">
            <Button
              buttonType="round"
              icon="minus"
              onClick={() =>
                setCheckoutData({
                  type: ReducerIds.DECREMENT_QTY,
                  payload: { id },
                })
              }
            ></Button>
            <span className="px-2">{qty}</span>
            <Button
              buttonType="round"
              icon="plus"
              onClick={() =>
                setCheckoutData({
                  type: ReducerIds.INCREMENT_QTY,
                  payload: { id },
                })
              }
            ></Button>
          </div>
          <span>{`£${(qty * price).toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
