// components
import NavHeader from '../project/NavHeader';
import InfoSection from './InfoSection';
import ImageSlider from '../../utils/ImageSlider';
import NavFooter from '../project/NavFooter';
import Footer from '../../navigation/Footer';
import Fade from 'react-reveal/Fade';

// data
import { freelanceData } from '../../../data/freelanceData';

const FreelanceContainer = ({path}) => {

  const currentProject = freelanceData.find(project => project.path === path);
  const previousProject = freelanceData.find(project => project.id === currentProject.id - 1);
  const nextProject = freelanceData.find(project => project.id === currentProject.id + 1);
  const sliderImages = currentProject.images.carousel;

  return (
    <>
      <NavHeader/>
      <Fade>
        <InfoSection project={currentProject} path={path}/>
      </Fade>
      <ImageSlider images={sliderImages}/>
      <NavFooter previousProject={previousProject} nextProject={nextProject}/>
      <Footer/>
    </>
  );
};

export default FreelanceContainer;