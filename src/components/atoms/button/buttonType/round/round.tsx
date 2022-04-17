import React, { FC } from "react";
import { ButtonType } from "../../type";
import Icon from "@atoms/Icon";

const Round: FC<ButtonType> = ({
  children,
  disabled = false,
  onClick = () => null,
  tabIndex,
  className,
  iconLeft,
  icon,
  color,
  size,
  type = "button",
  ...rest
}: ButtonType) => {
  return (
    <button
      onClick={(evt) => onClick(evt)}
      type="button"
      className={`${className} rounded-full p-1 flex justify-center items-center border border-black text-white bg-black  transition-colors`}
      {...rest}
    >
      <Icon icon={icon} size={size} color={color} />
    </button>
  );
};

export default Round;
