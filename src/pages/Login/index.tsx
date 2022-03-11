import Introduction from "../../components/Introduction";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singInThunk } from "../../store/modules/token/thunk";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const Schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    dispatch(singInThunk(data));
  };

  return (
    <Container>
      <Introduction />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <Input
          placeholder="Email"
          name="email"
          register={register}
          errors={errors}
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          register={register}
          errors={errors}
        />
        <Button>Logar</Button>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Button onClick={() => history.push("/singup")} type="button" isGrey>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
