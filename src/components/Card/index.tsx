import { Container } from "./styled";
import { useDispatch } from "react-redux";
import { addItemThunk } from "../../store/modules/cart/thunk";
import { filterProductsThunk } from "../../store/modules/filteredProducts/thunk";
import Button from "../Button";

interface CardProps {
  product: {
    name: string;
    img: string;
    category: string;
    price: number;
    id: number;
  };
}

const Card = ({ product }: CardProps) => {
  const { name, img, category, price } = product;
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <span className="categoria">{category}</span>
      <span className="preco">{`R$ ${price.toFixed(2)}`}</span>
      <Button
        onClick={() => {
          dispatch(addItemThunk(product));
          dispatch(filterProductsThunk(""));
        }}
        isMedium
        isGrey
      >
        Adicionar
      </Button>
    </Container>
  );
};

export default Card;
