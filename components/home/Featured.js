import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';


const Featured = ({stack, name, description, link, url, image1, image2, index}) => {
  let left = parseInt(index)
  return (
    <Fade>
      <Wrapper left={left}>
        <InfoContainer>
          <h2>{stack}</h2>
          <h1>{name}</h1>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              style={{marginRight: '10px'}}
              size='sm'
              icon={faLaptop}
            />
            Launch App
          </a>
          <Link href={link}>
            <a>
              <FontAwesomeIcon
                style={{marginRight: '10px'}}
                size="sm"
                icon={faProjectDiagram}
              />
              View Project
            </a>
          </Link>
          </InfoContainer>
        <ImageContainer>
          <img className='img-2' src={image2} alt='project-image1'/>
          <img className='img-1' src={image1} alt='project-image2'/>
        </ImageContainer>
     </Wrapper>
    </Fade>
    
  );
};

export default Featured;

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  margin-top: 50px;
  flex-direction: ${(props => props.left % 2 === 0 ? 'row' : 'row-reverse')};
  @media (max-width: 950px) {
    flex-direction: column;
    margin: 150px 0px;
  }
  @media (max-width: 575px) {
    margin-top: 0px;
  }
`;

const InfoContainer = styled.div`
  flex: 0 1 40%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-self: center;
  align-self: center;
  padding: 0px 30px;
  height: auto;
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    color: #909ba1;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h1 {
    font-weight: 600;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
    margin: 10px;
  }
  @media (max-width: 720px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 16px;
    }
  }
  @media (max-width: 620px) {
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 14px;
    }
    a {
      font-size: 14px;
    }
  }

`;

const ImageContainer = styled.div`
  flex: 1 1;
  position: relative;
  height: auto;
  img {
    width: 80%;
    height: auto;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -40%); 
    box-shadow: 1px 0px 10px rgba(0,0,0,0.5);
  }
  .img-2 {
    transform: translate(-60%, -60%);
  }
  @media (max-width: 950px) {
    img {
      width: auto;
      max-width: 80%;
    }
  }
  @media (max-width: 650px) {
    img {
      width: 75%;
    }
  }
  @media (max-width: 575px) {
    img {
      width: 75%;
      height: auto;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 75%;
      height: auto;
      top: 35%;
      left: 50%;
    }
  }
`;