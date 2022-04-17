import React, { FC } from "react";
import { Button } from "@components/atoms";
import { useCheckoutDataContext } from "@context/checkout";
import { Basket } from "@components/organisms";
import { Overlay } from "@components/atoms";

import { ReducerIds } from "@context/checkout/type";
import { AnimatePresence, motion } from "framer-motion";
import { Props } from "./type";

const Minicart: FC<Props> = ({ className }: Props) => {
  const { checkoutData, setCheckoutData } = useCheckoutDataContext();
  const { cartItems, showBasket } = checkoutData;

  return (
    <div className={`${className} relative`}>
      <Button
        className="relative grid"
        buttonType="icon"
        icon="basket"
        size="md"
        onClick={() =>
          setCheckoutData({
            type: ReducerIds.TOGGLE_BASKET,
          })
        }
      >
        {cartItems?.length > 0 && (
          <span className="absolute left-0 bottom-0 rounded-full bg-red-600 text-white h-5 w-5 text-xs flex items-center justify-center">
            {cartItems.reduce((acc, currentVal) => acc + currentVal.qty, 0)}
          </span>
        )}
      </Button>
      {showBasket && (
        <>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="relative z-50"
            >
              <Basket cartItems={cartItems} />
            </motion.div>
          </AnimatePresence>
          <Overlay
            onClick={() =>
              setCheckoutData({
                type: ReducerIds.TOGGLE_BASKET,
              })
            }
          />
        </>
      )}
    </div>
  );
};
export default Minicart;
