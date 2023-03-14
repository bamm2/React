import React, { useEffect } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";

const OAuthRedirectPage = (props) => {
  // const dispatch = useDispatch();
  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    const kakaoLogin = async () => {
      await axios
        .get(`http://localhost:8080/oauth/callback/kakao?code=${code}`)
        .then((res) => {
          localStorage.setItem("token", res.headers.auth);
          window.location.href = "/";
        });
    };
    kakaoLogin();
  }, [props.history]);

  return <div>로그인 진행중입니다.</div>;
};

export default OAuthRedirectPage;
