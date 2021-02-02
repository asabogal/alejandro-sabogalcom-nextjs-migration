import styled from 'styled-components';

const MainImage = (props) => {
  return (
    <ImageContainer>
      <img src={props.image} alt='project-home-page'/>
    </ImageContainer>
  );
};

export default MainImage;

const ImageContainer = styled.div`
  flex: 1 1;
  img {
    width: 55vw;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    vertical-align: middle;
    box-shadow: 10px 0px 20px rgba(0,0,0,0.5);
  }
  @media (max-width: 1025px) {
    img {
      width: 100%;
      height: auto;
      margin-top: 15px;
    }
  }
  `;