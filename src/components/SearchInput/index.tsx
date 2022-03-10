import { Container } from "./styled";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({setSearchMode}) => {
  return (
    <Container className='searchInput'>
      <input placeholder="Digitar Pesquisa" />
      <button>
          <FaSearch onClick={() => setSearchMode(false)} />
      </button>
    </Container>
  );
};

export default SearchInput;
