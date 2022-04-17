
import { Dispatch, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface CheckoutData {
  isLoading: boolean,
  showBasket: boolean;
  cartItems: [];
  products: [];
}

export interface CheckoutDataContextValues {
  checkoutData: CheckoutData | {};
  setCheckoutData: Dispatch<ReducerActions>;
}

export type ReducerActions =
  | { type: ReducerIds.TOGGLE_BASKET }
  | { type: ReducerIds.INCREMENT_QTY; payload: any }
  | { type: ReducerIds.ADD_TO_CART; payload: any }
  | { type: ReducerIds.DECREMENT_QTY; payload: any}
  | { type: ReducerIds.REMOVE_FROM_CART; payload: any }
  | { type: ReducerIds.FETCH_PRODUCTS_START }
  | { type: ReducerIds.FETCH_PRODUCTS_END }
  | { type: ReducerIds.FETCH_PRODUCTS_SUCCESS; payload: any };


export enum ReducerIds {
  TOGGLE_BASKET = "TOGGLE_BASKET",
  ADD_TO_CART = "ADD_TO_CART",
  INCREMENT_QTY = "INCREMENT_QTY",
  DECREMENT_QTY = "DECREMENT_QTY",
  REMOVE_FROM_CART = "REMOVE_FROM_CAR",
  FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START",
  FETCH_PRODUCTS_END = "FETCH_PRODUCTS_END",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
}
