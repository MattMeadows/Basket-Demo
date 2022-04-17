import { Item } from "framer-motion/types/components/Reorder/Item";
import { CheckoutData, ReducerActions, ReducerIds } from "./type";

export const initialState = {
  isLoading: false,
  showBasket: false,
  cartItems: [],
  products: []
};

export const reducer = (state, action) => {
  const { type, payload } = action;



  switch (type) {
    case ReducerIds.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
      };
    case ReducerIds.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ReducerIds.FETCH_PRODUCTS_END:
      return {
        ...state,
        isLoading: false,
      };
    case ReducerIds.TOGGLE_BASKET:
      return {
        ...state,
        showBasket: !state.showBasket,
      };
    case ReducerIds.ADD_TO_CART:
      const isItemInCart = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (isItemInCart) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            ),
          ],
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, qty: 1 }],
      };
    case ReducerIds.INCREMENT_QTY:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((item) =>
            item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
          ),
        ],
      };
    case ReducerIds.DECREMENT_QTY:
      const exists = state.cartItems.find(
        (item) => item.id === payload.id
      );


      if (exists.qty === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== exists.id),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty - 1 } : item
            ),
          ],
        }
      }
    case ReducerIds.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return { ...initialState };
  }
}