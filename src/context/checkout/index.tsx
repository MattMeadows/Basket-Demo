import { createContext, useReducer, useContext, useEffect } from "react";
import { reducer, initialState } from "./reducer";
import { Props, CheckoutDataContextValues } from "./type";

export const useCheckoutContext = createContext<CheckoutDataContextValues>({
  checkoutData: initialState,
  setCheckoutData: () => null,
});

const { Provider } = useCheckoutContext;

export const CheckoutProvider = ({ children, ...props }: Props) => {
  const [checkoutData, setCheckoutData] = useReducer(
    reducer,
    initialState,
    () => {
      const localData = localStorage.getItem("cart");
      return localData
        ? { initialState, cartItems: JSON.parse(localData) }
        : initialState;
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(checkoutData.cartItems));
  }, [checkoutData]);

  return (
    <Provider value={{ checkoutData, setCheckoutData }} {...props}>
      {children}
    </Provider>
  );
};

export const useCheckoutDataContext = () => {
  const context = useContext(useCheckoutContext);

  if (!context)
    throw Error(
      "useCheckoutDataContext should be used within an CheckoutDataProvider"
    );

  return context;
};
