import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import useScrollPosition from '../../hooks/useScrollPosition';

const ToTop = (props) => {

  const scrollPosition = useScrollPosition();

  const template = (
    <Fade right>
      <ArrowContainer onClick={props.click}>
        <FontAwesomeIcon
          icon={faAngleUp}
          size={props.size}
          color='#324955'
        />
      </ArrowContainer>
    </Fade>
  );

  const renderToTop = (position) => {
    return position.currentPosition > 850 ?
      template
      :
      null
  }

  return (
    <Wrapper>
      {renderToTop(scrollPosition)}
    </Wrapper>
  );
};

export default ToTop;

const Wrapper = styled.div`
  display: block;
  position: fixed;
  right: 0;
  bottom: 10%;
  cursor: pointer;

`;

const ArrowContainer = styled.div`
  opacity: 0.8;
  padding: 15px 22px;
  background-color: lightgray;
  @media (max-width: 420px) {
    padding: 15px 20px;
  }
`;