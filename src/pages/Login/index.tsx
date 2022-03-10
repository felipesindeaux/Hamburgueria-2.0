import Introduction from "../../components/Introduction";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, Form } from "./styled";

const Login = () => {
  return (
    <Container>
      <Introduction />
      <Form>
        <h3>Login</h3>
        <Input placeholder='Nome' />
        <Input placeholder='Senha' type='password' />
        <Button>Logar</Button>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Button isGrey>Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
