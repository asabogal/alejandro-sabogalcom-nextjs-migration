import styled from 'styled-components';
import ExerciseCard from './ExerciseCard';
import {exercisesData} from '../../data/exercisesData';
import Fade from 'react-reveal/Fade';

const ExercisesContainer = () => {

  let sorted = exercisesData.sort((a, b) => (a.id > b.id) ? -1 : 1)
  
    const renderExercises = sorted.map(project => {
      return (
        <ExerciseCard key={project.id} name={project.name} description={project.description} tools={project.tools} url={project.url} image={project.image}/>
      )
    })

  return (
    <Container>
      <Fade up>
      {renderExercises}
      </Fade>
      
    </Container>
  );
};

export default ExercisesContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 60%;
  row-gap: 10em;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media (max-width: 450px) {
    grid-template-columns: 80%;
  }
`;