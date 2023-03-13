import * as S from "./Navbar.styled";

const Navbar = () => {
  return (
    <S.Header>
      <S.NavFrame>
        <S.Content>
          <div>
            <img src="assets/MainLogo.png" alt=" 메인 로고 " />
          </div>
          <nav>
            <ul>
              <li>로그인</li>
            </ul>
          </nav>
        </S.Content>
      </S.NavFrame>
    </S.Header>
  );
};

export default Navbar;
