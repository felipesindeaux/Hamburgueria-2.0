import { InputHTMLAttributes } from "react";
import { Container } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  register: any;
  errors: any;
}

const Input = ({
  placeholder,
  name,
  register,
  errors,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <input {...register(name)} {...rest} placeholder={placeholder} />
      {errors[name] && <span>{errors[name].message}</span>}
    </Container>
  );
};

export default Input;
