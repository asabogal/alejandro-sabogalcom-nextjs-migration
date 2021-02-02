import { useEffect } from 'react';
import styled from 'styled-components';
import Excercises from '../../components/portfolio/sections/Exercises';
import Title from '../../components/portfolio/Title';
import Headers from '../../components/portfolio/Headers';
import ToTop from '../../components/utils/ToTop';

const PortfolioPage = () => {

  // Refresh projectPage from cache and scroll to top
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.location.pathname !== this.props.location.pathname) { 
  //     window.location.reload(false);
  //   }
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // scroll to top arrow functionality
  const arrowClickHandler = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  };
  
  return (
    <div>
      <Container>
      <Title
        title="Full Stack Development"
        description="Deployed, production ready, front and back end architected applications"
        />
      <Headers/>
    </Container>
    <Container>
      <Title
        title="Front End Exercises"
        description="A collection of small web applications sharpening fundamental and advanced front-end development skills"
        />
      <Excercises/>
    </Container>
    <ToTop
        size='1x'
        click={arrowClickHandler}
      />
    </div>
  );
}

export default PortfolioPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 980px) {
    grid-template-columns: auto;
  }
`;