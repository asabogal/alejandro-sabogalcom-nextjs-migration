import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import galleryhotel from '../../../public/images/freelance_images/gallery-hotel/featured.jpg';
import kontiki from '../../../public/images/freelance_images/kontiki/featured.jpg';
import antibody from '../../../public/images/freelance_images/antibody/featured.jpg';
import offgrid from '../../../public/images/freelance_images/offgrid/featured.jpg';


const Headers = () => {
  return (
    <Container>
      <Fade up>
        <div>
          <Link href='/portfolio/offgrid'>
          <a>
            <h2>Off-Grid</h2>
            <img src={offgrid} alt='offgridfeatured'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade>
        <div>
          <Link href='/portfolio/antibodyclub'>
          <a>
            <h2>Antib0dy Club</h2>
            <img src={antibody} alt='antibodyClub-featured'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade>
        <div>
          <Link href='/portfolio/kontiki'>
          <a>
            <h2>Kon-Tiki</h2>
            <img src={kontiki} alt='kontiki-featured'/>
          </a>
          </Link>
        </div>
      </Fade>
      <Fade>
        <div>
          <Link href='/portfolio/galleryhotel'>
          <a>
            <h2>The Gallery Hotel</h2>
            <img src={galleryhotel} alt='galleryhotel-featured'/>
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
  grid-template-rows: repeat(4, 65vh);
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