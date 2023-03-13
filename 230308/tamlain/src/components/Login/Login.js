import React from "react";
import * as S from "./Login.styled";
import { KAKAO_AUTH_URL } from "./OAuth";

const Login = () => {
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Container>
      <S.Filter />
      <S.KakaoBtnContainer>
        <S.KakaoBtn onClick={kakaoLogin}></S.KakaoBtn>
      </S.KakaoBtnContainer>
    </S.Container>
  );
};

export default Login;
