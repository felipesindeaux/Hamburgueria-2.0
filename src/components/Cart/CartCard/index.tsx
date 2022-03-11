import {
  Container,
  ImgContainer,
  RestContainer,
  ButtonsContainer,
  TitleContainer,
} from "./styled";
import { FaTrash } from "react-icons/fa";
import { removeItemThunk, addAmountThunk, removeAmountThunk } from "../../../store/modules/cart/thunk";
import { useDispatch } from "react-redux";

interface CartCardProps {
  product: {
    name: string;
    img: string;
    category: string;
    price: number;
    id: number;
    amount: number;
  };
}

const CartCard = ({ product }: CartCardProps) => {
  const { name, img, amount } = product;
  const dispatch = useDispatch()

  return (
    <Container>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <RestContainer>
        <TitleContainer>
          <h3>{name}</h3>
          <FaTrash onClick={() => dispatch(removeItemThunk(product))} />
        </TitleContainer>
        <ButtonsContainer>
          <button onClick={() => dispatch(removeAmountThunk(product))}>-</button>
          <p>{amount}</p>
          <button onClick={() => dispatch(addAmountThunk(product))}>+</button>
        </ButtonsContainer>
      </RestContainer>
    </Container>
  );
};

export default CartCard;
