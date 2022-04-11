import React from "react";
import Header from "@components/organisms/header";

const Page = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default Page;
