import styled from 'styled-components';

const Resume = () => {

  const resumePDF = './AlejandroSabogal-SoftwareDevResume.pdf'

  return (
    <ResumeContainer>
      <embed
        src={resumePDF}
        type="application/pdf"
      />    
    </ResumeContainer>
  );
};

export default Resume;

const ResumeContainer = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
  embed {
  display: block;
  height: 100%;
  width: 100%;
  }
`;