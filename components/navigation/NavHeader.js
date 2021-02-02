import React from 'react';
import styled from 'styled-components';
import SocialBar from '../utils/SocialBar'

const NavHeader = (props) => {
  return (
    <div>
      <HeaderContainer>
        <MenuButton onClick={props.toggleSideNav}>
          <div></div>
          <div></div>
          <div></div>
        </MenuButton>
        <div>
          <SocialBar
          size='1.5x'
          color='#1E4051'
          />
        </div>
      </HeaderContainer>
    </div>
  );
};


export default NavHeader;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 30px;
`;

const MenuButton = styled.div`
  cursor: pointer;
  div {
    width: 35px;
    height: 2px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  } 
  &:hover {
    div {
      height: 3px;
      margin: 7px 0;
    }
  }
`;