import styled from 'styled-components';
import {MainBtn} from '../utils/Buttons';

const ExerciseCard = ({name, tools, description, url, image}) => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt='project-home-page'/>
      </ImageContainer>
      <InfoContainer>
        <h4>{name}</h4>
        <p>{tools}</p>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <MainBtn width='130px'>View Project</MainBtn>
        </a>
      </InfoContainer>
    </Container>
  );
};

export default ExerciseCard;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const ImageContainer = styled.div`
  opacity: 0.9;
  padding: 15px;
  box-shadow: 10px 10px 80px 0px rgba(0,0,0,0.12);
  background-color: inherit;
  img {
    width: 100%;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  h4 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: -.05rem;
    margin-block-start: 10px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p {
    font-weight:  500;
    color: #707b81;
    margin-block-start: 5px;
    margin-block-end: 8px;
    margin-inline-start: 5px;
    margin-inline-end: 0px;
  }
`;


