import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const BurgerButton = (props) => {
  return (
    <BtnContainer>
      <FontAwesomeIcon 
        icon={faBars} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </BtnContainer>
  );
};

export const CloseButton = (props) => {
  return (
    <CloseBtn>
      <FontAwesomeIcon 
        icon={faTimes} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </CloseBtn>
  );
};

export const MainBtn = styled.button`
  background-color: inherit;
  color: ${(props => props.color || '#324955')};
  font-size: ${(props => props.font || '13px')};
  height: ${(props => props.height || '38px')};
  width: ${(props => props.width || '180px')};
  border: 2px solid #324955;
  cursor: pointer;
  &:hover {
    background-color: #324955;
    color: #edf1f3;
    padding-right: 40px;
    padding-left:8px;
  } 
`;

const BtnContainer = styled.div`
  cursor: pointer;
`;

const CloseBtn = styled(BtnContainer)`
  margin: 20px 20px 10px 0px;
  :hover {
    transform: scale(1.3)
    }
`;