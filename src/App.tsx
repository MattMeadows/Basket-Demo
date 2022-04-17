import React, { useEffect } from "react";
import ProductCards from "@molecules/product-cards";
import Layout from "@layout/layout";
import ErrorBoundary from "@global/ErrorBoundary";
import Page from "@templates/page";

import { CheckoutProvider } from "./context/checkout";

const App = () => {
  return (
    <CheckoutProvider>
      <ErrorBoundary>
        <Page>
          <Layout>
            <ProductCards />
          </Layout>
        </Page>
      </ErrorBoundary>
    </CheckoutProvider>
  );
};

export default App;
