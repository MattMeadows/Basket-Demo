import React, { useEffect } from "react";
import Header from "@components/organisms/header";
import { useCheckoutDataContext } from "@context/checkout";
import { ReducerIds } from "@context/checkout/type";

const Page = ({ children }) => {
  const { setCheckoutData } = useCheckoutDataContext();

  const fetchProducts = async () => {
    try {
      setCheckoutData({ type: ReducerIds.FETCH_PRODUCTS_START });
      const getResults = await fetch("../products.json").then((res) =>
        res.json()
      );
      const products = await getResults;

      setCheckoutData({
        type: ReducerIds.FETCH_PRODUCTS_SUCCESS,
        payload: { products },
      });
      setCheckoutData({ type: ReducerIds.FETCH_PRODUCTS_END });
    } catch (e) {
      console.log(e);
      setCheckoutData({ type: ReducerIds.FETCH_PRODUCTS_END });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Page;
