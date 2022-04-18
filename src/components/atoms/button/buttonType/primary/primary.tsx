import React, { FC } from "react";
import Icon from "@atoms/Icon";
import { ButtonType } from "../../type";

const Primary: FC<ButtonType> = ({
  children,
  disabled = false,
  onClick = () => null,
  tabIndex = 0,
  className,
  iconLeft,
  icon,
  type = "button",
  ...rest
}: ButtonType) => (
  <button
    disabled={disabled}
    tabIndex={tabIndex}
    onClick={(evt) => onClick(evt)}
    type={type}
    className={`${className} rounded-md w-full py-3 flex justify-center items-center  border border-black text-black hover:bg-black  hover:text-white transition-colors`}
    {...rest}
  >
    <span className={iconLeft ? `order-last` : `order-first`}>{children}</span>
    {icon && (
      <Icon
        className={iconLeft ? `mr-3 order-first` : `ml-3 order-last`}
        icon={icon}
        size="xs"
      />
    )}
  </button>
);

export default Primary;
