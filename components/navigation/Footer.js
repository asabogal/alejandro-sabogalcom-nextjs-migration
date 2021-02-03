import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <Container>
      <div>
        <p>&copy; {`${year} - Alejandro Sabogal`}</p>
      </div>
      <SocialFooter>
        <a href="https://www.github.com/asabogal" target="_blank" rel="noopener noreferrer"> 
         <p>GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/alejandro-sabogal-dev" target="_blank" rel="noopener noreferrer">
          <p>LinkedIn</p>
        </a>  
        <a href="mailto:asabogal.dev@gmail.com">
          <p>Contact Me</p>
        </a>  
      </SocialFooter>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0px 30px;
  font-size: 13px;
  @media (max-width: 520px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
`;

const SocialFooter = styled.div`
  display: flex;
  justify-items: space-around;
  p {
    padding-left: 10px;
  }
  a { 
    text-decoration: none;
    color: inherit;
  }

`;