import styled from 'styled-components';

const Titles = () => {
  return (
    <TitlesContainer>
      <h1>Hello! I am Alejandro, a Web and Applications Developer based in New York City.</h1>
      <p>To me, programming is like making music, both can be beautiful and complex, and I express my creativity when writing both. I'm proficient in React, JavaScript and Ruby on Rails, and enjoy building efficient and useful software. I have professional experience in other fields; Finance, Entrepreneurship, and Audio Engineering. </p>
    </TitlesContainer>
  );
};

export default Titles;

const TitlesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-column-gap: 2rem;
  padding-left: 40px;
  padding-right: 40px;
  h1 {
    font-size: 30px;
    font-weight: 800;
    text-align: left;
  }
  p {
    font-size: 18px;
    font-weight: 300;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
    h1 {
      text-align: left;
    }
  }
`;