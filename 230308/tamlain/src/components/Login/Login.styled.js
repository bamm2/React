import styled from "styled-components";

export const Container = styled.div`
  background: url(./assets/Background/mainBackground.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 50%;
  left: 25%;
  z-index: 1;
`;

export const Filter = styled.div`
  background-color: #3a3a3a;
  opacity: 0.3;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const KakaoBtnContainer = styled.div`
  position: absolute;
  // background: red;
  left: 20%;
  width: 60%;
  top: 47%;
  height: 9%;
  z-index: 4;
  border-radius: 10px 10px 10px 10px;
`;

export const KakaoBtn = styled.button`
  // position: absolute;
  width: 100%;
  background: url(./assets/Icon/kakao_login_medium_wide.png);
  background-repeat: no-repeat;
  // border: none;
  height: 100%;
  background-size: cover;
  border-radius: 10px 10px 10px 10px;
  z-index: 5;
`;
