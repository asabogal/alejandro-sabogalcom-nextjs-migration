import React from 'react';
import styled from 'styled-components';

export const Backdrop = (props) => (
  <BackdropContainer onClick={props.click}></BackdropContainer>
);

 const BackdropContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  z-index: 900;
`;