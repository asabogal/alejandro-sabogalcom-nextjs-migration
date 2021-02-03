import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Titles = () => {

  return (
    <Fade>
      <Container>
      <h1>ALEJANDRO SABOGAL</h1>
      <h2>SOFTWARE & WEB DEVELOPER</h2>
      <h3>React | Next.js | Node/Express | Ruby | Rails</h3>
      </Container>
    </Fade>
  );
};

export default Titles;

const Container = styled.div`
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 60px;
    margin-bottom: -4px;
  }
  h2 {
    font-size: 32px;
    margin-top: -4px;
    margin-bottom: -6px;
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 20px;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 45px;
    }
    h2, h3 {
      font-size: 18px;
    }
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 38px;
    }
    h2, h3 {
      font-size: 16px;
    }
  }
  @media (max-width: 465px) {
    h1 {
      font-size: 32px;
      margin-block-end: 5px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    h2, h3 {
      font-size: 16px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;