import React, { FC } from "react";
import Primary from "./buttonType/primary";
import IconButton from "./buttonType/icon";
import Round from "./buttonType/round";
import { ButtonType } from "./type";

const Button: FC<ButtonType> = ({
  buttonType,
  disabled,
  ...props
}: ButtonType) => {
  const types = {
    primary: <Primary buttonType={buttonType} disabled={disabled} {...props} />,
    icon: <IconButton buttonType={buttonType} disabled={disabled} {...props} />,
    round: <Round buttonType={buttonType} disabled={disabled} {...props} />,
  };

  if (buttonType && buttonType in types)
    return types[buttonType as keyof typeof types];

  return types.primary;
};

export default Button;
