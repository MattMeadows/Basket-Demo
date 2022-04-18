import React from "react";
import Minicart from "@components/organisms/minicart";

const header = () => {
  return (
    <header className="flex justify-between items-center lg:justify-center p-5 sticky top-0 bg-white shadow-lg">
      <img
        className="h-20 w-20 lg:h-28 lg:w-28"
        src={require("../../../assets/logo.svg").default}
      />

      <Minicart className="ml-auto" />
    </header>
  );
};

export default header;
