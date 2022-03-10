import { getProductsThunk } from "../../store/modules/products/thunk";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useEffect } from "react";
import { Container, ProductsList } from "./styled";
import Header from "../../components/Header";
import Card from "../../components/Card";

const Showcase = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootStateOrAny) => state);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <Container>
      <Header />
      <ProductsList>
          {products.map((product) => (
              <Card key={product.id} product={product} />
          ))}
      </ProductsList>
    </Container>
  );
};

export default Showcase;
