import styled from 'styled-components';
import MainImage from '../project/MainImage';
import KonTikiGif from './KonTikiGif';
import InfoDetails from './InfoDetails';

const InfoSection = ({project, path}) => {

  return (
    <Container>
    { path === 'kontiki' ?  
        <KonTikiGif />
    :    
    <MainImage image={project.images.featured}/>
    }
      <InfoDetails project={project}/>
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



  