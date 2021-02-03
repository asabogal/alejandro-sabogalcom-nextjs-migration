import {useRouter} from 'next/router';
import ProjectContainer  from '../../components/portfolio/project/ProjectContainer';;

const RecordBoxReviews = () => {

  const router = useRouter();
  const path = router.pathname.split('/')[2];

  return (
    <ProjectContainer path={path}/>
  )
}

export default RecordBoxReviews;