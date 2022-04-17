import Icon from "@components/atoms/Icon";
import React, { FC } from "react";
import { ButtonType } from "../../type";
import { IconSizes } from "@components/atoms/Icon/type";

const IconButton: FC<ButtonType> = ({
  children,
  disabled = false,
  onClick = () => null,
  tabIndex,
  className,
  icon,
  size = "md",
  type = "button",
  color,
  ...rest
}: ButtonType) => {
  return (
    <button
      onClick={(evt) => onClick(evt)}
      type="button"
      className={`${className} rounded-md flex hover:border-white hover:text-black transition-colors`}
      {...rest}
    >
      <Icon icon={icon} size={size} color={color} />
      {children}
    </button>
  );
};

export default IconButton;
