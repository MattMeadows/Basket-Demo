import { Button } from "@components/atoms";
import React from "react";

const Minicart = ({ className }) => {
  return (
    <div className={className}>
      <Button buttonType="icon" icon="basket" size="md" />
    </div>
  );
};
export default Minicart;
