import Icon from "@components/atoms/Icon";
import React, { FC } from "react";
import { ButtonType } from "../../type";

const IconButton: FC<ButtonType> = ({
  children,
  disabled = false,
  onClick = () => null,
  tabIndex = 0,
  className,
  icon,
  size = "md",
  color,
  ...rest
}: ButtonType) => (
  <button
    disabled={disabled}
    tabIndex={tabIndex}
    onClick={(evt) => onClick(evt)}
    type="button"
    className={`${className} rounded-md flex hover:border-white hover:text-black transition-colors`}
    {...rest}
  >
    <Icon icon={icon} size={size} color={color} />
    {children}
  </button>
);

export default IconButton;
