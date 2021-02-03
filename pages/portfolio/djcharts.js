import {useRouter} from 'next/router';
import ProjectContainer  from '../../components/portfolio/project/ProjectContainer';;

const DJCharts = () => {

  const router = useRouter();
  const path = router.pathname.split('/')[2];

  return (
    <ProjectContainer path={path}/>
  )
}

export default DJCharts;