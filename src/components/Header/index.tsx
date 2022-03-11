import {
  CartContainer,
  Container,
  IconsContainer,
  SearchContainer,
} from "./styled";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput";
import { filterProductsThunk } from "../../store/modules/filteredProducts/thunk";
import { useHistory } from "react-router-dom";

const Header = ({ setOpenCart }) => {
  const [searchMode, setSearchMode] = useState(false);
  const cart = useSelector((state: RootStateOrAny) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory()

  return (
    <>
      {searchMode ? (
        <SearchContainer>
          <SearchInput setSearchMode={setSearchMode} />
        </SearchContainer>
      ) : (
        <Container>
          <img
            src={logo}
            alt="logo"
            onClick={() => dispatch(filterProductsThunk(""))}
          />
          <IconsContainer>
            <FaSearch
              className="searchIcon icon"
              onClick={() => setSearchMode(true)}
            />
            <SearchInput setSearchMode={setSearchMode} />
            <CartContainer>
              <FaShoppingCart
                className="icon"
                onClick={() => setOpenCart(true)}
              />
              <p>{cart.length}</p>
            </CartContainer>
            <BiExit
              onClick={() => {
                localStorage.clear();
                history.go('/')
              }}
              className="icon"
            />
          </IconsContainer>
        </Container>
      )}
    </>
  );
};

export default Header;
