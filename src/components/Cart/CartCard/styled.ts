import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 80px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: var(--grey-100);
  border-radius: 5px;
  flex-shrink: 0;
  margin-right: 10px;

  img {
    width: 55px;
  }
`;

export const RestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105px;
  height: 34px;
  background: #f2f2f2;

  button {
    width: 30px;
    height: 100%;
    border: none;
    color: #eb5757;
    font-weight: 400;
    font-size: 22px;
  }

  p {
    background: white;
    width: 50px;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #bdbdbd;
    width: 17px;
    height: 17px;
    cursor: pointer;

    :hover {
      color: var(--grey-300);
    }
  }
`;
