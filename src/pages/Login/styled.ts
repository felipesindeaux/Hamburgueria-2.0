import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    max-width: 1100px;
    margin: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 383px;
  height: 460px;
  background: white;
  border: 2px solid var(--grey-0);
  border-radius: 5px;
  padding: 20px;

  h3 {
    align-self: flex-start;
  }

  p {
    text-align: center;
    max-width: 250px;
  }

  @media (min-width: 1000px) {
    max-width: 500px;
  }
`;
