import styled from 'styled-components';
import gif from '../../../public/images/freelance_images/kontiki/kt_gif_big.gif';

const LandingImage = ({handleGifLoad}) => {
  return (
    <Container>
      <ImageContainer>
        <img src={gif} alt='kon-tiki-logo'/>
      </ImageContainer>
    </Container>
  );
};

export default LandingImage;

const Container = styled.div`
  display: flex;
  flex: 1 1;
  height: 90vh;
  width: 55vw;
  padding-bottom: 20px;
  background-color: black;
  @media (max-width: 1025px) {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      margin-top: 15px;
    }
  }
`; 

const ImageContainer = styled.div`
margin: 0 auto;
width: 80%;
height: 80%;
align-self: center;
justify-self: center;
img {
  width: 100%;
  height: 85%;
}
@media (max-width: 599px) {
  width: 90%;
  height: 50%;
}
`;