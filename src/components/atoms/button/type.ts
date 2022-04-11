import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonTypes = "primary" | "secondary" | "icon";

export interface ButtonType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: ButtonTypes;
  iconLeft?: boolean;
  icon?: string;
  size?: string;
}
