import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 140px;
  background: white;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  position: absolute;
  display: flex;
  width: 90%;
  height: 2px;
  background: var(--grey-100);
  align-self: center;
`;

export const TotalContainer = styled.div`
  height: 100%;
  padding: 0px 23px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;

    p {
      font-weight: 600;
      color: var(--grey-600);
    }

    span {
      font-weight: 600;
    }
  }
`;
