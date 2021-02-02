import styled from 'styled-components';
import fast from '../../public/images/about_images/fast.svg';
import responsive from '../../public/images/about_images/responsive.svg';
import ui from '../../public/images/about_images/ui.svg';

const Build = () => {
  return (
    <BuildContainer>
      <div>
        <img src={fast} alt='fast'/>
        Fast
      </div>
      <div>
        <img src={responsive} alt='responsive'/>
        Responsive
      </div>
      <div>
        <img src={ui} alt='ui'/>
        Modern UI
      </div>
    </BuildContainer>
  );
};

export default Build;

const BuildContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
  }
  img {
    width: 120px;
    height: 90px;
  }
  @media (max-width: 420px) {
    grid-template-columns: auto;
  }
`;