import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {CloseButton} from '../utils/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const SideNavigation = (props) => {
  return (
    <Container open={props.open}>
      <BtnContainer>
        <CloseButton size='lg'
          color='white'
          click={props.click}
        />
      </BtnContainer>
      
      <section onClick={props.click}>
        <FontAwesomeIcon
          size="lg"
          color="white"
          icon={faHome}
        />
        <Link href="/">HOME</Link>
      </section>
      <section onClick={props.click}>
        <FontAwesomeIcon
          size="lg"
          color="white"
          icon={faUserCircle}
        />
        <Link href="/about">ABOUT</Link>
      </section>
      <section onClick={props.click}> 
        <FontAwesomeIcon
          size="lg"
          color="white"
          icon={faCode}
        />
        <Link href="/portfolio">PORTFOLIO</Link>
      </section>
      <section onClick={props.click}>
        <FontAwesomeIcon
          size="lg"
          color="white"
          icon={faFileAlt}
        />
        <Link href="/resume">RESUME</Link>
      </section>
      <section onClick={props.click}>
        <FontAwesomeIcon
          size="lg"
          color="white"
          icon={faMedium}
        />
        <a href="https://medium.com/@asabogal" target="_blank" rel="noopener noreferrer">BLOG</a>
      </section>
    </Container>
  );
};

export default SideNavigation;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #253b47;;
  box-shadow: 1px 0px 10px rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 999;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.15s ease-out;
  section {
    display: grid;
    grid-template-columns: 30px 100px;
    align-items: center;
    padding-left:30px;
    :hover {
      background-color: #1F5061;
      cursor: pointer;
    }
  }
  a {
    display: block;
    width: 100%;
    font-size: 20px;
    text-decoration: none;
    color: white;
    padding: 20px;
    margin-left: 20px;
  }
`;