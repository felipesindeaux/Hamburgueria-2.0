import styled from "styled-components";

export const Container = styled.li`
  width: 300px;
  height: 346px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--grey-100);
  border-radius: 5px;
  margin: 0px 20px 20px 0px;
  flex-shrink: 0;

  :hover {
    border: 2px solid var(--primary);
  }

  div {
    width: 100%;
    height: 150px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
    }
  }

  h3 {
    margin-left: 20px;
  }

  .categoria {
    font-weight: 400;
    font-size: 12px;
    color: #828282;
    margin-left: 20px;
  }

  .preco {
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
    margin-left: 20px;
  }

  button {
    margin: 0px 0px 20px 20px;
  }

  @media (min-width: 850px) {
    margin: 0px 56px 56px 0px;
  }
`;
