import Introduction from "../../components/Introduction";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./styled";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const Schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^.{6,}$/, "Mínimo de 6 caracteres"),
    password_confirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    delete data.password_confirm;
    api
      .post("/register", { ...data, cart: [] })
      .then((_) => {
        toast.success("Cadastro realizado");
        history.push("/");
      })
      .catch((_) => toast.error("Ops, algo deu errado!"));
  };

  return (
    <Container>
      <Introduction />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Cadastro</h3>
          <Link to="/">Retornar para o login</Link>
        </div>
        <Input
          placeholder="Nome"
          name="name"
          register={register}
          errors={errors}
        />
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
        <Input
          placeholder="Confirmar Senha"
          name="password_confirm"
          type="password"
          register={register}
          errors={errors}
        />
        <Button isGrey>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Signup;
