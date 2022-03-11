import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  width: 100%;
  max-width: 383px;

  .logo {
    width: 244px;
    margin-bottom: 20px;
    margin-top: 40px;
  }

  .dots {
    display: none;
  }

  @media (min-width: 1000px) {
    .dots {
      display: block;
      width: 180px;
      height: 80px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 300px;
  height: 95px;
  border: 1px solid var(--grey-100);
  border-radius: 5px;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  padding: 18px 14px;
  margin-bottom: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    background: #27ae601a;
    border-radius: 5px;
    margin-right: 20px;

    svg {
      width: 24px;
      height: 24px;
      color: var(--primary);
    }
  }

  @media (min-width: 1000px) {
    max-width: 377px;
    align-self: flex-start;
    margin-bottom: 30px;
  }
`;
