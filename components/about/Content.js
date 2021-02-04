import styled from 'styled-components';
import frontEnd from '../../public/images/about_images/front_end.svg'
import backEnd from '../../public/images/about_images/back_end.svg'
import ContentCard from './ContentCard';
import Build from './Build';

const Content = () => {

  const cardContent = {
    frontEnd: {
      title: 'Front End Development',
      paragraph: 'React, Next.js, Hooks, Context, Redux, JavaScript, HTML5, CSS3, Responsive Design, Styled Components, Bootstrap, Material UI'
    },
    backEnd: {
      title: 'Back End Architecture',
      paragraph: 'Ruby, Ruby on Rails, Node/Express, SQL, Postgres, Google Cloud Platform, Google Firebase, Heroku, Vercel'
    }
  }

  return (
    <ContentWrapper>
      <h1>WHAT I DO</h1>
      <CardsContainer>
        <ContentCard
          image={frontEnd}
          title={cardContent.frontEnd.title}
          paragraph={cardContent.frontEnd.paragraph}
        />
        <ContentCard
          image={backEnd}
          title={cardContent.backEnd.title}
          paragraph={cardContent.backEnd.paragraph}/>
      </CardsContainer>
      <Build/>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 25px auto auto;
  h1 {
    text-align: center;
    color: #a0acb3;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  margin: 0px 50px 0px 50px;
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;