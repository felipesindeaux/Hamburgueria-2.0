import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    background: var(--grey-0);
    color: var(--grey-50);
    border: 2px solid var(--grey-0);
    border-radius: 8px;
    padding: 0px 15px;
    width: 100%;
    height: 60px;
    font-weight: 400;
    font-size: 16px;

    :focus {
      background: transparent;
      border: 2px solid #333333;
      color: #333333;

      &::placeholder {
        color: #333333;
      }
    }
  }

  span {
    position: absolute;
    top: 60px;
    left: 2px;
    color: var(--negative);
  }

  span::after {
    content: "*";
  }
`;
