import styled from 'styled-components';
import Link from 'next/link';

const NavFooter = ({previousProject, nextProject}) => {

  return (
    <Container>
    {
      previousProject !== undefined ? 
      <Link href={'/portfolio/' + previousProject.path}>
        <NavItem>
        <div>
            <p>&larr;</p>
        </div>
        <section>
            <p>Previous Project</p>
            <h3>{previousProject.name}</h3>
          </section>
        </NavItem>
      </Link>
      :
      <div></div>
    }
    {
      nextProject !== undefined ?
      <Link href={'/portfolio/' + nextProject.path}>
      <NavItem>
          <section>
            <p style={{textAlign: 'right'}}>Next Project</p>
            <h3>{nextProject.name}</h3>
          </section>
          <div>
            <p>&rarr;</p>
          </div>
        </NavItem>
      </Link>
      :
      <div></div>
    }
    </Container>
  );
};

export default NavFooter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px;
  a {
    text-decoration: none;
    color: #324955; 
  }
  @media (max-width: 980px) {
    margin: 80px 20px;
  }

  @media (max-width: 765px) {
    margin: 50px 10px 80px 10px;
  }
  @media (max-width: 500px) {
    margin: 80px 10px;
  }
`;

const NavItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  cursor: pointer;
  section {
    display: grid;
    grid-template-rows: auto auto;
  }
  div {
    align-items: center;
    font-size: 25px;
  }
  p, h3 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3 {
    font-size: 25px;
  }
  
  @media (max-width: 780px) {
    margin: 80px 0px;
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 600px) {
    margin: 30px 0px;
    p {
      font-size: 14px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media (max-width: 565px) {
    grid-template-rows: 14px 18px;
    h3 {
      font-size: 12px;
    }
  }
`;