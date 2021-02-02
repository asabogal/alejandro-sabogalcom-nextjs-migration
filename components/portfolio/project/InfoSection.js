import styled from 'styled-components';
import MainImage from './MainImage';
import SideInfo from './SideInfo';

const InfoSection = (props) => {

  return (
    <Container>
      <MainImage image={props.project.images.home}/>
      <SideInfo project={props.project}/>
    </Container>
  );
};  

export default InfoSection;

const Container = styled.div`
  display: flex;
  height: auto;
  padding: 5px 5vh;
  @media (max-width: 1025px){
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;



  