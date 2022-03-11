import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  input {
    background: white;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    height: 60px;
    width: 100%;
    padding: 0px 10px 0px 15px;

    :focus {
      background: transparent;
      border: 2px solid #333333;
      color: #333333;

      &::placeholder {
        color: #333333;
      }
    }
  }

  button {
    position: absolute;
    right: 10px;
    top: 10px;
    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 8px;
    width: 53px;
    height: 40px;

    :hover {
      background: var(--primary-50);
      border: 2px solid var(--primary-50);
    }

    svg {
      color: white;
    }
  }

  @media (min-width: 850px) {
      max-width: 365px;
      flex-shrink: 0;
  }
`;
