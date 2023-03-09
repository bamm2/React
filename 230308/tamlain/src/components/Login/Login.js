import React from "react";
import * as S from "./Login.styled";

const Login = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000"; // 나중에 url 재지정
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  console.log(REST_API_KEY);
  const kakakoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.Container>
      <button onClick={kakakoLogin}></button>
    </S.Container>
  );
};

export default Login;
