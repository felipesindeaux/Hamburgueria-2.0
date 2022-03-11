import { ButtonHTMLAttributes } from "react";
import { Container } from "./styled";
import { ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isMedium?: boolean;
  isGrey?: boolean;
}

const Button = ({
  children,
  isMedium = false,
  isGrey = false,
  ...rest
}: ButtonProps) => (
  <Container isMedium={isMedium} isGrey={isGrey} {...rest}>
    {children}
  </Container>
);

export default Button;
