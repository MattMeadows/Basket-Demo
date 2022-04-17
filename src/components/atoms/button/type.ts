import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonTypes = "primary" | "secondary" | "icon" | "round";

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
