import styled from "styled-components";

export const Header = styled.div`
  background: wheat;
  position: fixed;
  height: 100%;
  width: 50%;
  left: 25%;
  //   z-index: 1;
`;

export const NavFrame = styled.div`
  background: white;
  height: 8%;
  width: 100%;
  left: 25%;
  //   z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: pink;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li + li {
    margin-left: 30px;
  }
`;
