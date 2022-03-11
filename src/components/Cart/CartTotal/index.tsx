import { Container, Line, TotalContainer } from "./styled";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { removeAllThunk } from "../../../store/modules/cart/thunk";
import Button from "../../Button";

const CartTotal = () => {
  const { cart } = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Line />
      <TotalContainer>
        <div>
          <p>Total</p>
          <span>
            R${" "}
            {cart
              .reduce((acc, curr) => acc + curr.price * curr.amount, 0)
              .toFixed(2)}
          </span>
        </div>
        <Button onClick={() => dispatch(removeAllThunk())} isGrey>
          Remover todos
        </Button>
      </TotalContainer>
    </Container>
  );
};

export default CartTotal;
