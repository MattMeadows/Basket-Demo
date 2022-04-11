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
  size,
  type = "button",
  ...rest
}: ButtonType) => {
  return (
    <button
      onClick={(evt) => onClick(evt)}
      type="button"
      className={`${className} rounded-md w-15 py-3 flex justify-center hover:border-white hover:text-black transition-colors`}
      {...rest}
    >
      <Icon icon={icon} size={size} />
    </button>
  );
};

export default IconButton;
