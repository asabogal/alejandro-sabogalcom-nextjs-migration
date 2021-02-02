import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import cryptofolio from '../../public/images/project_images/cryptofolio/home.png';
import interval from '../../public/images/project_images/interval/home.png';
import recordbox from '../../public/images/project_images/recordbox/home.png';
import uefa from '../../public/images/project_images/uefa/home.png';
import djcharts from '../../public/images/project_images/djcharts/home.png';

const Headers = () => {
  return (
    <Container>
      <Fade up>
        <div>
          <Link href='/portfolio/cryptofolio'>
          <a>
            <h2>Cryptofolio Tracker</h2>
            <img src={cryptofolio} alt='crypto-home-page'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade >
        <div>
          <Link href='/portfolio/interval-training-timer'>
          <a>
            <h2>Interval Training Timer</h2>
            <img src={interval} alt='interval-home-page'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade >
        <div>
          <Link href='/portfolio/recordbox-reviews'>
          <a>
            <h2>Recordbox Reviews</h2>
            <img src={recordbox} alt='recordbox-home-page'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade >
        <div>
          <Link href='/portfolio/uefa-schedules'>
          <a>
            <h2>UEFA Schedules</h2>
            <img src={uefa} alt='uefa-home-page'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade >
        <div>
          <Link href='/portfolio/djcharts'>
          <a>
            <h2>DJ Charts</h2>
            <img src={djcharts} alt='djcharts-home-page'/>
          </a>
          </Link>
        </div>
      </Fade>
    </Container>
  );
};

export default Headers;

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 65vh);
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin-bottom: 50vh;
  div {
    position: relative;
    justify-self: center;
    justify-content: center;
    align-self: end;
    &:hover {
      h2 {
        opacity: 0.1;
      }
      img {
        visibility: visible;
        opacity: 0.9;
        height: 58vh;
        @media (max-width: 500px) {
          height: 45vh;
        }
      }
    }
    img {
      position: absolute;
      height: 40vh;
      width: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.3;
      border-radius: 1%;
      visibility: hidden;
      opacity: 0;
      transition:  visibility 0.3s, height 0.5s, opacity 0.5s linear;
      z-index: 800;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  h2 {
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -.3rem;
    transition: opacity 0.5s linear;
  }

  @media(max-width: 980px) {
    grid-template-rows: repeat(5, 45vh);
    h2 {
    font-size: 4rem;
    letter-spacing: -.3rem;
    }
  }

  @media(max-width: 780px) {
    h2 {
    font-size: 4rem;
    letter-spacing: -.3rem;
    }
  }

  @media(max-width: 500px) {
    h2 {
    font-size: 3rem;
    letter-spacing: -.2rem;
    }
  }
`;