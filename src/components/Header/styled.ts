import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80px;
  padding: 0px 10px;
  background: var(--grey-0);

  img {
    width: 160px;
    cursor: pointer;
  }

  @media (min-width: 850px) {
    padding: 0px 5%;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105px;

  .icon {
    width: 23px;
    height: 23px;
    color: #bdbdbd;
    cursor: pointer;
  }

  .searchInput {
    display: none;
  }

  @media (min-width: 850px) {
    width: 460px;

    .searchInput {
      display: block;
    }

    .searchIcon {
      display: none;
    }
  }
`;

export const SearchContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 10px;
  background: var(--grey-0);
`;

export const CartContainer = styled.div`
  position: relative;

  p {
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: var(--primary);
    width: 20px;
    height: 20px;
    border-radius: 7px;
    font-weight: 900;
    font-size: 14px;
  }
`;
