import styled from "styled-components";

export const Container = styled.button`
  border-radius: 8px;
  color: white;
  font-weight: 600;
  width: ${({ isMedium }) => (isMedium ? "106px" : "100%")};
  height: ${({ isMedium }) => (isMedium ? "40px" : "60px")};
  padding: ${({ isMedium }) => (isMedium ? "0px 20px" : "0px 40px")};
  border: 2px solid ${({ isGrey }) => (isGrey ? "#BDBDBD" : "#27AE60")};
  background: ${({ isGrey }) => (isGrey ? "#BDBDBD" : "#27AE60")};
  font-size: ${({ isMedium }) => (isMedium ? "14px" : "16px")};

  :hover {
    background: ${({ isGrey }) => (isGrey ? "#27AE60" : "#93D7AF")};
    border: 2px solid ${({ isGrey }) => (isGrey ? "#27AE60" : "#93D7AF")};
  }
`;
