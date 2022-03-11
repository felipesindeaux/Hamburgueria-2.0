import { getProductsThunk } from "../../store/modules/products/thunk";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useEffect, useState } from "react";
import { Container, ProductsList } from "./styled";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Cart from "../../components/Cart";

const Showcase = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootStateOrAny) => state);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <Container>
      <Header setOpenCart={setOpenCart} />
      <ProductsList>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsList>
      {openCart && <Cart setOpenCart={setOpenCart} />}
    </Container>
  );
};

export default Showcase;
