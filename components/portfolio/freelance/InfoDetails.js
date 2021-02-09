import styled from 'styled-components';
import {MainBtn} from '../../utils/Buttons';

const InfoDetails = ({project}) => {

  const {year, heading, description, role, stack, employer, employerUrl, url} = project;

  const renderStack = (stack) => {
    return stack.map((s, i) => {
      return (
      <p key={i}>{s}</p>
      );
    });
  }

  return (
    <InfoContainer>
      <div><h1>{heading}</h1></div>
      <div><h3>{description}</h3></div>
      <ul>
        <li>
          <h4>YEAR</h4>
          <p>{year}</p>
        </li>
      </ul>
      <ul>
       <li>
          <h4>ROLE</h4>
          <p>{role}</p>
        </li>  
      </ul>
      <ul>
        <li>
          <h4>STACK</h4>
          {renderStack(stack)}
        </li>
      </ul>
      {employerUrl && 
        <ul>
          <li>
            <h4>EMPLOYER</h4>
            <a href={employerUrl} target="_blank" rel="noopener noreferrer">{name}</a>
          </li>
        </ul>
      }
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MainBtn>Visit Project</MainBtn>
      </a> 
      </InfoContainer>
  );
};

export default InfoDetails;

const InfoContainer = styled.div`
    flex: 0 1 30%;
    display: grid;
    grid-template-rows: repeat(5, auto);
    margin: 30px;
    align-self: center;
    ul {
    padding: 0;
    list-style: none;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  p {
    font-size: 15px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h4 {
    font-size: 12px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3 {
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5em
  }
  h1 {
    font-size: 35px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    
    font-size: 13px;
    align-self: flex-end;
    display: block;
    color: inherit;
  }
  button {
    margin-top: 20px;
  }
  `;

