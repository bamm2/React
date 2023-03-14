import * as S from "./Navbar.styled";
import { useState } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <S.NavFrame>
      <S.NavContainer>
        <S.MainLogoImg src="assets/MainLogo.png" alt=" 메인 로고 " />
        <S.RightContainer>
          {!isLogin && <div>로그인 하기</div>}
          {isLogin && <div>마이페이지 </div>}
          {isLogin && <div>로그아웃 하기 </div>}
          <img src="assets/Icon/ExitLogo.png" alt="logIn/Out 로고"></img>
        </S.RightContainer>
      </S.NavContainer>
    </S.NavFrame>
  );
};

export default Navbar;
