import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialBar = (props) => {

  return (
    <Container>
      <a href="https://www.github.com/asabogal">
        <FontAwesomeIcon 
          icon={faGithub} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="https://www.linkedin.com/in/alejandro-sabogal-dev">
        <FontAwesomeIcon 
          icon={faLinkedinIn} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="mailto:asabogal.dev@gmail.com">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          size={props.size}
          color={props.color} 
        />
        </a>
    </Container>
  );
};

export default SocialBar;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    padding: 10px;
    cursor: pointer;
  }
`;