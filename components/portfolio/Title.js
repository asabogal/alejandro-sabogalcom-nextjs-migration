import styled from 'styled-components';

const Title = (props) => {
  return (
    <Container>
      <div>
      <h2>
        {props.title}
      </h2>
      <h3>
        {props.description}
      </h3>
      </div>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  margin-left: 30px;
  h2 {
    font-size: 4rem;
    font-weight:  400;
    color: lightgrey;
    letter-spacing: -.2rem;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3 {
    font-weight:  500;
    color: #707b81;
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 3rem;
    }
  }
`;