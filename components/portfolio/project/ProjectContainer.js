// components
import NavHeader from './NavHeader';
import InfoSection from './InfoSection';
import FeaturedImage from './FeaturedImage';
import Devices from './Devices';
import NavFooter from './NavFooter';
import Footer from '../../navigation/Footer';
// data
import { projectData } from '../../../data/projectData';
import Fade from 'react-reveal/Fade';

const ProjectContainer = ({path}) => {

  const currentProject = projectData.find(project => project.path === path);
  const previousProject = projectData.find(project => project.id === currentProject.id - 1);
  const nextProject = projectData.find(project => project.id === currentProject.id + 1);
 
  return (
    <>
      <NavHeader/>
      <Fade>
        <InfoSection project={currentProject}/>
      </Fade>
        <FeaturedImage image={currentProject.images.featured}/>
        <Devices image={currentProject.images.devices}/>
        <NavFooter previousProject={previousProject} nextProject={nextProject}/>
      <Footer/>
    </>
  );
};

export default ProjectContainer;