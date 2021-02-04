import styled from 'styled-components';

const Titles = () => {
  return (
    <TitlesContainer>
      <h1>Hello! I am Alejandro, a Web and Applications Developer based in New York City.</h1>
      <p>Bridging analytical thinking and creativity is fundamental to my programming approach. I see software development and music creation in a similar way; both are beautiful yet complex, and I enjoy writing both with the same passion. I'm proficient in JavaScript, React, Next.js, Node/Express, and Ruby on Rails. Efficient with smart and responsive Front End design, and precise at building Back End architectures. I have professional experience in Finance, Entrepreneurship, Hospitality, and Audio Engineering. </p>
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