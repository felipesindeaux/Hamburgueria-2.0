import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0px;
  background: #33333380;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 22px;
  height: 54px;
  border-radius: 5px 5px 0px 0px;
  background: var(--primary);

  h3 {
    color: white;
  }

  button {
    color: rgba(255, 255, 255, 0.5);
    background: transparent;
    border: none;
    width: 20px;
    height: 20px;

    :hover {
      color: white;
    }
  }
`;

export const CartProducts = styled.ul`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  max-height: 420px;
  overflow-y: auto;

  li + li {
    margin-top: 18px;
  }
`;

export const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 158px;
  width: 100%;
  background: white;
  border-radius: 0px 0px 5px 5px;
`;
