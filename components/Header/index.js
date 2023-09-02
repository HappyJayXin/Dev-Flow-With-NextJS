import { HeaderContainer, Container, Logo, Links, LinkItem } from './styled';

const Header = () => (
  <HeaderContainer>
    <Container>
      <Logo href="#">
        愛情 <b>摩天輪</b>
      </Logo>
      <Links>
        <LinkItem>首頁</LinkItem>
        <LinkItem>會員專區</LinkItem>
        <LinkItem>活動日程</LinkItem>
        <LinkItem>關於我們</LinkItem>
        <LinkItem>立即購票</LinkItem>
      </Links>
    </Container>
  </HeaderContainer>
);

export default Header;
