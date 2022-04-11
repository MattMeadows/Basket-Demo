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
      className={`${className} rounded-md w-full py-3 flex justify-center items-center bg-black border border-black text-white hover:bg-white hover:border-white hover:text-black transition-colors`}
      {...rest}
    >
      <span className={iconLeft ? `order-last` : `order-first`}>
        {children}
      </span>
      {icon && (
        <Icon
          className={iconLeft ? `mr-5 order-first` : `ml-5 order-last`}
          icon={icon}
          size="xs"
        />
      )}
    </button>
  );
};

export default Primary;
