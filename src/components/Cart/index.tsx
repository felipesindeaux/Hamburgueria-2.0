import {
  Container,
  Modal,
  CartHeader,
  CartProducts,
  EmptyCard,
} from "./styled";
import { useSelector, RootStateOrAny } from "react-redux";
import CartCard from "./CartCard";

const Cart = ({ setOpenCart }: RootStateOrAny) => {
  const { cart } = useSelector((state: RootStateOrAny) => state);

  return (
    <Modal>
      <Container>
        <CartHeader>
          <h3>Carrinho de compras</h3>
          <button onClick={() => setOpenCart(false)}>X</button>
        </CartHeader>

        {cart.length > 0 ? (
          <CartProducts>
            {cart.map((product) => (
              <CartCard product={product} />
            ))}
          </CartProducts>
        ) : (
          <EmptyCard>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </EmptyCard>
        )}
      </Container>
    </Modal>
  );
};

export default Cart;
