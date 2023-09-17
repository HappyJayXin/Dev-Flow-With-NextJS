import Button from '../Button';
import { Container, ContentContainer, Info, ImageWrapper, Image } from './styled';

const Content = () => (
  <ContentContainer>
    <Container>
      <Info>
        <h1>愛情摩天輪，讓愛高飛</h1>
        <p>帶您的心愛之人，一起體驗穿越雲端的浪漫時刻。</p>
        <Button>立即購票，飛向愛情巔峰</Button>
      </Info>
      <ImageWrapper>
        <Image src="https://images.unsplash.com/photo-1578784631301-a6ac338ea858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJ1cGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="愛情摩天輪" />
      </ImageWrapper>
    </Container>
  </ContentContainer>
);

export default Content;
