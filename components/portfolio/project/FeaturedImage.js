import styled from 'styled-components';

const FeatureImage = (props) => {
  return (
    <Container>
      <img src={props.image} alt='project-featured'/>
    </Container>
  );
};

export default FeatureImage;

const Container = styled.div`
  margin-top: 40px;
  width: 100vw;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;