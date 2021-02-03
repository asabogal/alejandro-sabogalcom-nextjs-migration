import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavHeader = () => {
  return (
    <NavContainer>
      <Link href='/'>
        <p>Home</p>
      </Link>
      <Link href='/portfolio'>
        <p><span>&larr;</span> Back to Portfolio </p>
      </Link>
    </NavContainer>
  )
};

export default NavHeader;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  height: 30px;
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
  span {
    margin-right:8px;
    font-size: 18px;
    transition:  visibility 0.2s linear;
  }
`;
