import { getProductsThunk } from "../../store/modules/products/thunk";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useEffect, useState } from "react";
import { Container, ProductsList } from "./styled";
import { getFilteredProductsThunk } from "../../store/modules/filteredProducts/thunk";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Cart from "../../components/Cart";

const Showcase = () => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state: RootStateOrAny) => state);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getFilteredProductsThunk())
  }, []);

  return (
    <Container>
      <Header setOpenCart={setOpenCart} />
      <ProductsList>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsList>
      {openCart && <Cart setOpenCart={setOpenCart} />}
    </Container>
  );
};

export default Showcase;
