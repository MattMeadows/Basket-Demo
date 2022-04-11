
import { Dispatch, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface CheckoutData {
  cart: []
}

export interface CheckoutDataContextValues {
  checkoutData: CheckoutData | {};
  setCheckoutData: Dispatch<ReducerActions>;
}

export type ReducerActions =
  | { type: "ADD" }
  | { type: "REMOVE" }
  | { type: "UPDATE"}
  | { type: "RESET" }