import React from "react";
import Primary from "./buttonType/primary";
import Secondary from "./buttonType/secondary";
import IconButton from "./buttonType/icon";
import { ButtonType } from "./type";

const Button = ({ buttonType, disabled, ...props }: ButtonType) => {
  const types = {
    primary: <Primary buttonType={buttonType} disabled={disabled} {...props} />,
    secondary: (
      <Secondary buttonType={buttonType} disabled={disabled} {...props} />
    ),
    icon: <IconButton buttonType={buttonType} disabled={disabled} {...props} />,
  };

  if (buttonType && buttonType in types)
    return types[buttonType as keyof typeof types];

  return types.primary;
};

export default Button;
