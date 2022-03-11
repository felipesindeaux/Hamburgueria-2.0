import { Container } from "./styled";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterProductsThunk } from "../../store/modules/filteredProducts/thunk";
import { useState } from "react";

const SearchInput = ({ setSearchMode }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <Container className="searchInput">
      <input
        value={inputValue}
        placeholder="Digitar Pesquisa"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setSearchMode(false);
          dispatch(filterProductsThunk(inputValue));
        }}
      >
        <FaSearch />
      </button>
    </Container>
  );
};

export default SearchInput;
