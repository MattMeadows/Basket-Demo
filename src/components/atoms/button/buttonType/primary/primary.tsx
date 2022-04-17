import React, { FC } from "react";
import { ButtonType } from "../../type";
import Icon from "@atoms/Icon";

const Primary: FC<ButtonType> = ({
  children,
  disabled = false,
  onClick = () => null,
  tabIndex,
  className,
  iconLeft,
  icon,
  type = "button",
  ...rest
}: ButtonType) => {
  return (
    <button
      onClick={(evt) => onClick(evt)}
      type="button"
      className={`${className} rounded-md w-full py-3 flex justify-center items-center  border border-black text-black hover:bg-black  hover:text-white transition-colors`}
      {...rest}
    >
      <span className={iconLeft ? `order-last` : `order-first`}>
        {children}
      </span>
      {icon && (
        <Icon
          className={iconLeft ? `mr-3 order-first` : `ml-3 order-last`}
          icon={icon}
          size="xs"
        />
      )}
    </button>
  );
};

export default Primary;
