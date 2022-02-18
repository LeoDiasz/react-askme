import {ButtonHTMLAttributes, ReactNode} from "react";
import {ButtonStyle} from "./button.styles";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
}

export function Button({children, ...props}: buttonProps) {
  return (
    <ButtonStyle {...props}>
        {children}
    </ButtonStyle>
  )
};