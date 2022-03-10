import { getProductsThunk } from "../../store/modules/products/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "./styled";
import Header from "../../components/Header";

const Showcase = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <Container>
      <Header />
      <button onClick={() => dispatch(getProductsThunk())}>get</button>
    </Container>
  );
};

export default Showcase;
