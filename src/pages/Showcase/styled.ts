import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  overflow-x: auto;
  max-width: 90%;
  margin-top: 25px;

  @media (min-width: 850px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
