import logo from "../../assets/logo.svg";
import dots from "../../assets/dots.svg";
import { Card, Container } from "./styled";
import { FiShoppingBag } from "react-icons/fi";

const Introduction = () => (
  <Container>
    <img className="logo" src={logo} alt="logo" />
    <Card>
      <div>
        <FiShoppingBag />
      </div>
      <p>
        A vida é como um sanduíche, é preciso recheá-la com os melhores
        ingredientes.
      </p>
    </Card>
    <img className="dots" src={dots} alt="dots" />
  </Container>
);

export default Introduction;
