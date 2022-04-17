import { FC } from "react";
import { Button } from "@components/atoms";
import { Props } from "./type";
import { BasketItem } from "@components/molecules";

const Basket: FC<Props> = ({ cartItems }: Props) => {
  const calculateTotal = (items) =>
    `£${cartItems
      .reduce((acc, item) => acc + item.qty * item.price, 0)
      .toFixed(2)}`;

  if (cartItems.length === 0) {
    return (
      <div className="fixed p-5 border right-0 top-0 h-screen bg-white w-2/3 lg:w-1/4 text-center">
        <strong>You have no items in your shopping basket.</strong>
      </div>
    );
  }

  return (
    <div className="fixed flex flex-col px-5 border right-0 top-0 h-screen bg-white w-3/4 lg:w-1/4 overflow-y-scroll">
      <>
        {cartItems.length > 0 ? (
          <>
            <div className="h-full overflow-y-scroll">
              {cartItems.map((item) => (
                <BasketItem {...item} />
              ))}
            </div>
            <div className="flex flex-row mt-auto justify-between border-t-2 border-slate-100 py-3">
              <span>Total: </span>
              <strong className="text-xl">{calculateTotal(cartItems)}</strong>
            </div>
          </>
        ) : (
          <strong>You have no items in your shopping basket.</strong>
        )}
      </>
    </div>
  );
};
export default Basket;
