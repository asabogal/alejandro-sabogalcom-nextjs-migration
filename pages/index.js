import styled from 'styled-components';
import Link from 'next/link';
import Titles from '../components/home/Titles';
import Featured from '../components/home/Featured';
import ToTop from '../components/utils/ToTop';
import {MainBtn} from '../components/utils/Buttons';
import {featuredData} from '../data/featuredData';
import Fade from 'react-reveal/Fade';

const HomePage = () => {

  const arrowClickHandler = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  };

  const renderFeatured = (featuredData) => {
    return featuredData.map((project, index) => {
     return (
      <Featured 
        key={project.id}
        index={index}
        stack={project.stack}
        name={project.name}
        description={project.description}
        link={project.link}
        url={project.url}
        image1={project.image1}
        image2={project.image2}
      />
     )
    })
  };

  return (
    <>
      <Titles/> 
      <Fade up>  
      <Heading>
        Featured Work
      </Heading>
      </Fade>
      <FeaturedContainer>
        {renderFeatured(featuredData)}
      </FeaturedContainer>
      <ButtonContainer>
        <Link href='/portfolio'>
          <MainBtn height='45px' font='14px'>Portfolio</MainBtn>
        </Link>
      </ButtonContainer>
      <ToTop
        size='1x' 
        click={arrowClickHandler}
      /> 
    </>
  )
};

export default HomePage;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 80px;
  padding-bottom: 50px;
  @media(max-width: 980px) {
    margin-bottom: 50px;
  }
`;

const Heading = styled.div`
  font-size: 35px;
  text-align: center;
  padding-bottom: 100px;
  @media (max-width: 585px) {
    padding-bottom: 100px;
    font-size: 30px;
  }
`;
