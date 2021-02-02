import styled from 'styled-components';
import Link from 'next/link';
import ImageHead from '../components/about/ImageHead';
import Titles from '../components/about/Titles';
import Content from '../components/about/Content';
import {MainBtn} from '../components/utils/Buttons';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <Fade>
      <ImageHead/>
      <Titles/>
      <Content/>
      <BtnContainer>
        <Link href='/portfolio'>
          <MainBtn>VIEW MY WORK</MainBtn>
        </Link> 
      </BtnContainer>      
    </Fade>
  );
};

export default About;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 25px;
  padding-bottom: 50px;
`;