import {
  CartContainer,
  Container,
  IconsContainer,
  SearchContainer,
} from "./styled";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import { useState } from "react";
import { useSelector, RootStateOrAny  } from "react-redux";
import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput";

const Header = ({setOpenCart}) => {
  const [searchMode, setSearchMode] = useState(false);
  const cart = useSelector((state: RootStateOrAny) => state.cart);

  return (
    <>
      {searchMode ? (
        <SearchContainer>
          <SearchInput setSearchMode={setSearchMode} />
        </SearchContainer>
      ) : (
        <Container>
          <img src={logo} alt="logo" />
          <IconsContainer>
            <FaSearch
              className="searchIcon icon"
              onClick={() => setSearchMode(true)}
            />
            <SearchInput setSearchMode={setSearchMode} />
            <CartContainer>
              <FaShoppingCart className="icon" onClick={() => setOpenCart(true)} />
              <p>{cart.length}</p>
            </CartContainer>
            <BiExit className="icon" />
          </IconsContainer>
        </Container>
      )}
    </>
  );
};

export default Header;
