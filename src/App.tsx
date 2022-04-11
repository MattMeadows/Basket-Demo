import React from "react";
import ProductCards from "@molecules/product-cards";
import Layout from "@layout/layout";
import ErrorBoundary from "@global/ErrorBoundary";
import Page from "@templates/page";

import products from "../products";

const App = () => {
  console.log(products);
  return (
    <ErrorBoundary>
      <Page>
        <Layout>
          <ProductCards products={products} />
        </Layout>
      </Page>
    </ErrorBoundary>
  );
};

export default App;
