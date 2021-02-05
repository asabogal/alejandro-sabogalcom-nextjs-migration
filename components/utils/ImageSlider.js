import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({images}) => {

  const [x, setX] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setX(0);
  }, [images])

  const renderImages = () => {
    return images.map((image, index) => {
      return (
        <Slide key={index} style={{transform: `translateX(${x}%)`}}>
          <Image src={image} alt={`slider ${index + 1}`}/>
          <LeftButton onClick={moveLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='2x'
            color='white'
          />
        </LeftButton>
        <RightButton onClick={moveRight}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size='2x'
          color='white'
        />
        </RightButton>
      </Slide>
      )
    })
  };

  const moveLeft = () => {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
  };

  const moveRight = () => {
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Slider>
      {renderImages()}
    </Slider>    
  )
};

export default ImageSlider;

const Slider = styled.div`
  width: 80%;
  height: auto;
  max-height: 85vh;
  display: flex;
  align-items: center;
  margin: 40px auto;
  overflow: hidden;
  @media (max-width: 599px) {
    width: 90%;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
    height: auto;
    min-height: 100%;
    object-fit: contain;
  }
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  width: 5vw;
  height: 100%;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,0.4);
  }
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`;