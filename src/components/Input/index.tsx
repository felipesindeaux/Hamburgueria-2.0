import { InputHTMLAttributes } from "react";
import { Container } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <Container>
      <input {...rest} placeholder={placeholder} />
    </Container>
  );
};

export default Input;
